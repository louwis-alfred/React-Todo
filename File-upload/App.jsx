import { useState } from "react";
import axios from "axios";

function App() {
  const [file, setFile] = useState(null); // State for storing selected file

  const upload = () => {
    if (!file) {
      alert("Please select a file before uploading!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file); // Append the file to FormData

    axios
      .post("http://localhost:3000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log("File uploaded successfully:", res.data);
        alert(`File uploaded: ${res.data.filePath}`);
      })
      .catch((err) => {
        console.error("Error uploading file:", err);
        alert("Error uploading file. Please try again.");
      });
  };

  return (
    <div>
      <h1>File Upload Example</h1>
      {/* File input */}
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])} // Set the selected file
      />
      <button type="button" onClick={upload}>
        Upload
      </button>
    </div>
  );
}

export default App;
