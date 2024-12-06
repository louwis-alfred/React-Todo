const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Enable CORS
app.use(cors());
app.use(express.json());

// Ensure Images folder exists
const uploadDir = path.join(__dirname, "Images");
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir); // Save files in the Images folder
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`); // Create unique filenames
    },
});

const upload = multer({ storage });

// Endpoint for uploading files
app.post("/upload", upload.single("file"), (req, res) => {
    console.log("Form Data:", req.body); // Log additional form data
    console.log("Uploaded File:", req.file); // Log file metadata

    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
    }

    res.status(200).json({
        message: "File uploaded successfully",
        filePath: `/Images/${req.file.filename}`, // Path to the file
    });
});

// Serve static files from Images folder
app.use("/Images", express.static(path.join(__dirname, "Images")));

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
