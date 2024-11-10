import React, { useState } from "react";
import axios from "axios";

const FileUpload = ({ State }) => {
  const [file, setFile] = useState(null);
  const [fileURL, setFileURL] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState("");

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      // 10MB size limit
      if (selectedFile.size > 10 * 1024 * 1024) {
        setError("File size must be less than 10MB");
        return;
      }
      setFile(selectedFile);
      setFileURL(URL.createObjectURL(selectedFile));
      setError("");
    }
  };

  const upload = async () => {
    if (!file) {
      setError("Please select a file first");
      return;
    }

    setIsUploading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await axios({
        method: "POST",
        url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
        data: formData,
        headers: {
          pinata_api_key: `${import.meta.env.VITE_API_KEY}`,
          pinata_secret_api_key: `${import.meta.env.VITE_API_SECRET}`,
          "Content-Type": "multipart/form-data",
        },
      });

      const fileHash = `ipfs://${response.data.IpfsHash}`;
      
      if (State?.Account && State?.Contract) {
        await State.Contract.Upload(State.Account, fileHash);
      }

      setFile(null);
      setFileURL(null);
      
      // Show success message
      const successMessage = document.getElementById("status-message");
      successMessage.textContent = "File Uploaded Successfully";
      successMessage.className = "text-green-500 text-center mb-2";
      setTimeout(() => {
        successMessage.textContent = "";
      }, 3000);
    } catch (err) {
      setError("Error uploading file to IPFS");
      console.error("Upload error:", err);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="w-[60%] h-[100%] flex justify-center items-center mx-auto flex-col gap-2">
      <div id="status-message" className="h-6"></div>
      {error && (
        <div className="w-full text-red-500 text-center mb-2">{error}</div>
      )}
      
      <section className="flex w-[100%] text-white gap-2 h-[70%]">
        <div
          onClick={() => !isUploading && document.querySelector(".input-field").click()}
          className={`cursor-pointer w-[50%] bg-red-500 p-2 flex justify-center items-center 
            shadow-2xl rounded-lg flex-col gap-5 transition-all duration-300
            ${isUploading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-600'}`}
        >
          <img 
            className="hover:scale-110 transition-transform duration-300" 
            src="./Icon.png" 
            height={60} 
            width={60}
            alt="Upload icon"
          />
          <input
            type="file"
            className="input-field"
            hidden
            onChange={handleFileChange}
            disabled={isUploading}
            accept="image/*,video/*,audio/*,application/pdf"
          />
          <small>{isUploading ? "Uploading..." : "Select File"}</small>
        </div>

        <div className="w-[50%] bg-red-500 p-2 rounded-lg shadow-2xl">
          {file && (
            <div className="flex flex-col gap-5 items-start h-[100%] p-5">
              <p className="flex justify-between w-[100%] border-2 border-dashed border-red-400 p-1">
                <span>File Name </span>
                <span className="truncate max-w-[200px]">{file.name}</span>
              </p>
              <p className="flex justify-between w-[100%] border-2 border-dashed border-red-400 p-1">
                <span>File Size </span>
                <span>{formatFileSize(file.size)}</span>
              </p>
              <p className="flex justify-between w-[100%] border-2 border-dashed border-red-400 p-1">
                <span>File Type </span>
                <span className="truncate max-w-[200px]">{file.type || "Unknown"}</span>
              </p>

              {file.type.startsWith("image/") && (
                <img
                  src={fileURL}
                  alt="Preview"
                  height={170}
                  width={170}
                  className="rounded-md object-contain mx-auto"
                />
              )}
            </div>
          )}
        </div>
      </section>

      <section className="w-[100%]">
        <button
          className={`w-full p-2 rounded-lg text-white transition-all duration-300
            ${isUploading || !file
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-[#2ecc71] hover:bg-[#27ae60]'
            }`}
          onClick={upload}
          disabled={isUploading || !file}
        >
          {isUploading ? "Uploading..." : "Upload File"}
        </button>
      </section>
    </div>
  );
};

export default FileUpload;