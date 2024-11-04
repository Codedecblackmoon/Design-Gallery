import React, { useState } from 'react';

const UploadDragDrop: React.FC = () => {
    const [dragging, setDragging] = useState(false);

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setDragging(true);
    };

    const handleDragLeave = () => {
        setDragging(false);
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setDragging(false);
        const files = event.dataTransfer.files;
        handleFiles(files);
    };

    const handleFiles = (files: FileList) => {
        Array.from(files).forEach((file) => {
            console.log('Uploaded file:', file.name);
        });
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) handleFiles(files);
    };

    return (
        <div
            className={`dropzone ${dragging ? 'drag-over' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => document.getElementById('fileInput')?.click()}
        >
            <h5>Drag & drop files here or click to upload</h5>
            <input
                type="file"
                id="fileInput"
                style={{ display: 'none' }}
                onChange={handleInputChange}
                multiple
            />
        </div>
    );
};

export default UploadDragDrop;


