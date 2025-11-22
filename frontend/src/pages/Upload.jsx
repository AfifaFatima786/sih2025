
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpCircle } from "lucide-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Upload() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const CLOUDINARY_CLOUD_NAME = "dnjvtjchd"; // replace with your Cloudinary cloud name
  const CLOUDINARY_UPLOAD_PRESET = "sihpreset"; // replace with your upload preset

  const handleFileChange = (e) => setFiles([...e.target.files]);

  // Smooth Mouse Tracking (optional)
  useEffect(() => {
    let animationFrame;
    const handleMouseMove = (e) => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  // Upload a single file to Cloudinary
  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    formData.append("folder", "proposal_docs");
    formData.append("tags", "proposal,document");

    try {
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/raw/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!res.ok) throw new Error(`Upload failed: ${res.statusText}`);

    const data = await res.json();

    // Show success toast
    toast.success("Uploaded successfully!");

    return data;
  } catch (err) {
    // Show error toast
    toast.error(err.message || "Cloudinary upload error");
    throw new Error(err.message || "Cloudinary upload error");
  }
  };

  // Handle upload of all selected files
  const handleUpload = async () => {
    if (files.length === 0) {
      setError("Please select at least one file to upload");
      return;
    }

    setLoading(true);
    setError(null);
    setResponse([]);

    try {
      const uploadResults = [];
      for (const file of files) {
        const data = await uploadToCloudinary(file);
        uploadResults.push({
          fileName: file.name,
          fileSize: file.size,
          fileUrl: data.secure_url,
          publicId: data.public_id,
          uploadedAt: new Date().toISOString(),
        });
      }
      setResponse(uploadResults);
      setFiles([]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#EEEEEE] text-[#473472] relative overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-20">
        {/* Back Button */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#53629E] text-white rounded-xl px-5 py-3 hover:bg-[#3F4B8B] shadow-md transition-all duration-300 border hover:shadow-lg hover:border-[#473472]"
          >
            <ArrowUpCircle className="rotate-180" size={22} />
            Back to Dashboard
          </Link>
        </motion.div>

        {/* Header */}
        <div className="text-center mt-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-[#473472]"
          >
            Upload Proposal Documents
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[#53629E] mt-4 max-w-2xl mx-auto"
          >
            Submit your proposal files for AI-powered evaluation and automated document analysis.
          </motion.p>
        </div>

        {/* Upload Box */}
        <motion.label
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center justify-center border-2 border-dashed border-[#53629E] bg-white rounded-2xl p-16 mt-12 cursor-pointer hover:border-[#473472] transition shadow-lg"
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowUpCircle size={60} className="text-[#53629E] mb-4" />
          </motion.div>

          <p className="font-semibold text-lg text-[#473472]">Choose Proposal Files</p>
          <p className="text-[#53629E] text-sm mt-1">
            Drag & drop or click to browse (PDF, DOCX, TXT)
          </p>

          <input type="file" className="hidden" multiple onChange={handleFileChange} />
        </motion.label>

        {/* Selected Files */}
        {files.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 bg-white border border-[#53629E] p-6 rounded-xl shadow-md"
          >
            <h3 className="font-semibold text-lg mb-3 text-[#473472]">Selected Files</h3>
            <ul className="text-sm text-[#473472]">
              {files.map((file, index) => (
                <li
                  key={index}
                  className="py-2 flex items-center gap-2 border-b border-[#EEEEEE] last:border-none"
                >
                  📄 <span>{file.name}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={handleUpload}
              disabled={loading}
              className={`mt-4 w-full px-4 py-3 font-bold rounded-lg transition-all ${
                loading
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 cursor-pointer"
              }`}
            >
              {loading ? "Uploading..." : "Upload to Cloudinary"}
            </button>
          </motion.div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mt-6 p-4 bg-red-100 text-red-800 rounded-lg border border-red-300">
            <strong>⚠ Error:</strong> {error}
          </div>
        )}

        {/* Response / Success */}
        {response.length > 0 && (
          <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-lg border border-green-300">
            <strong>✓ Upload Successful!</strong>
            <ul className="mt-3 space-y-2 text-sm text-gray-800">
              {response.map((file, index) => (
                <li key={index}>
                  <a
                    href={file.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 underline"
                  >
                    {file.fileName}
                  </a>{" "}
                  ({(file.fileSize / 1024).toFixed(2)} KB)
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="h-20"></div>
      </div>
    </div>
  );
}

export default Upload;
