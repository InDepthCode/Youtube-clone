import React, { useState } from 'react';
import { Card, Textarea, TextInput } from 'flowbite-react'; // Ensure this matches your Card component's source
import axios from 'axios';

function VideoUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [meta, setMeta] = useState({
    title: "",
    description: ""
  });

  function formFieldChange(event) {
    const { name, value } = event.target;
    setMeta((prevMeta) => ({
      ...prevMeta,
      [name]: value,
    }));
  }

  function handleFileChange(event) {
    const file = event.target.files[0];
    setSelectedFile(file);
  }

  async function handleForm(formEvent) {
    formEvent.preventDefault();

    if (!selectedFile) {
      setMessage("Please select a file to upload.");
      return;
    }

    saveVideoToServer(selectedFile, meta);
  }

  async function saveVideoToServer(video, videoMetaData) {
    setUploading(true);

    // Create FormData object
    let formData = new FormData();
    formData.append("title", videoMetaData.title);
    formData.append("description", videoMetaData.description);
    formData.append("file", video); // Use `video` instead of `selectedFile` for clarity

    try {
      const response = await axios.post("http://localhost:8080/api/v1/videos", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          console.log(progressEvent);
        },
      });

      setMessage('File uploaded successfully.');
      console.log('Response:', response.data);
    } catch (error) {
      setMessage('Error uploading file. Please try again.');
      console.error('Upload error:', error);
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="flex justify-center items-center">
      <Card className="w-full max-w-md bg-gray-800 p-6 rounded-lg">
        <h2 className="text-xl text-center mb-6 text-white">Upload Your Video</h2>
        <form noValidate className="space-y-5" onSubmit={handleForm}>
          <div>
            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-300">
              Video Title
            </label>
            <TextInput
              onChange={formFieldChange}
              name="title"
              id="title"
              placeholder="Enter the title"
              required
              className="w-full"
              value={meta.title}
            />
          </div>

          <div>
            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-300">
              Video Description
            </label>
            <Textarea
              onChange={formFieldChange}
              name="description"
              id="description"
              placeholder="Enter the description"
              required
              className="w-full"
              value={meta.description}
            />
          </div>

          <div className="flex items-center space-x-4">
            <div className="shrink-0">
              <img
                className="h-16 w-16 object-cover rounded-full border-2 border-gray-300"
                src={
                  selectedFile
                    ? URL.createObjectURL(selectedFile)
                    : "https://via.placeholder.com/150"
                }
                alt="Upload Preview"
              />
            </div>
            <label className="block w-full">
              <span className="sr-only">Choose thumbnail</span>
              <input
                onChange={handleFileChange}
                name="file"
                type="file"
                accept="video/*"
                className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-violet-700 file:text-white hover:file:bg-violet-800"
              />
            </label>
          </div>

          {uploading && (
            <div className="text-center text-white">
              Uploading... {progress}%
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-violet-600 text-white py-2 px-4 rounded-md hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            {uploading ? "Uploading..." : "Upload"}
          </button>

          {message && <div className="text-center text-white mt-4">{message}</div>}
        </form>
      </Card>
    </div>
  );
}

export default VideoUpload;
