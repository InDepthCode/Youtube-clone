import React, { useState } from 'react';
import { Card, Textarea, TextInput } from 'flowbite-react'; // Ensure this matches your Card component's source

function VideoUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [meta, setMeta]=useState({
    title:"",
    description:""
  });

  function handleFileChange(event) {
    console.log(event.target.files[0]);
    setSelectedFile(event.target.files[0]);
  }

  function handleForm(event) {
    event.preventDefault();
    console.log("Button Clicked.. ");
    console.log(selectedFile);
  }

  return (
    <div className="flex justify-center items-center ">
      <Card className="w-full max-w-md bg-gray-800 p-6 rounded-lg">
        <h2 className="text-xl text-center mb-6 text-white">Upload Your Video</h2>
        <form className="space-y-5" onSubmit={handleForm}>

          {/* Title Input */}
          <div>
            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-300">
              Video Title
            </label>
            <TextInput
              id="title"
              placeholder="Enter the title"
              required
              className="w-full"
            />
          </div>

          {/* Description Input */}
          <div>
            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-300">
              Video Description
            </label>
            <Textarea
              id="description"
              placeholder="Enter the description"
              required
              className="w-full"
            />
          </div>

          {/* Thumbnail Preview */}
          <div className="flex items-center space-x-4">
            <div className="shrink-0">
              <img
                className="h-16 w-16 object-cover rounded-full border-2 border-gray-300"
                src={
                  selectedFile
                    ? URL.createObjectURL(selectedFile)
                    :"https://plus.unsplash.com/premium_vector-1720657345525-cfc1d6d8c79b?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt="Upload Preview"
              />
            </div>
            <label className="block w-full">
              <span className="sr-only">Choose thumbnail</span>
              <input
                onChange={handleFileChange}
                type="file"
                accept="image/*"
                className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-violet-700 file:text-white hover:file:bg-violet-800"
              />
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-violet-600 text-white py-2 px-4 rounded-md hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            Upload
          </button>
        </form>
      </Card>
    </div>
  );
}

export default VideoUpload;
