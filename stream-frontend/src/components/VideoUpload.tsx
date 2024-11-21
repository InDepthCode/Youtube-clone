import React from 'react';
import { Card } from 'flowbite-react'; // Ensure this matches your Card component's source

function VideoUpload() {
  return (
    <div className="flex justify-center items-center">
      <Card>
        <h2 className="text-xl  text-center mb-4 text-white">Upload Your Video</h2>
        <form className="space-y-6">
          {/* Thumbnail Preview */}
          <div className="flex items-center space-x-4">
            <div className="shrink-0">
              <img
                className="h-16 w-16 object-cover rounded-full"
                src="https://plus.unsplash.com/premium_vector-1720657345525-cfc1d6d8c79b?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Upload Preview"
              />
            </div>
            <label className="block">
              <span className="sr-only">Choose profile photo</span>
              <input
                type="file"
                accept="image/*"
                className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
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
