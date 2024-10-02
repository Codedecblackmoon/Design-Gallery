// src/ImageUploader.tsx
import React, { useCallback, useState } from 'react';
import axios from 'axios';

const ImageUpload: React.FC = () => {
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = useCallback(async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
    
    const files = e.dataTransfer.files;
    await handleFiles(files);
  }, []);

  const handleFiles = async (files: FileList) => {
    const formData = new FormData();
    const validImageTypes = ['image/png', 'image/jpeg'];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (validImageTypes.includes(file.type)) {
        formData.append('images', file);
      } else {
        setError('Only PNG and JPG files are allowed.');
        return;
      }
    }

    if (formData.has('images')) {
        await axios.post('http://localhost:5174/getstarted', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        alert('Files uploaded successfully.');
        setError(null); // Reset error
    //   try {
        
    //   } catch (err) {
    //     setError('Error uploading files.');
    //     console.error(err);
    //   }
    } else {
      setError('No valid images to upload.');
    }
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      style={{
        border: dragging ? '2px solid #4caf50' : '2px dashed #ccc',
        padding: '20px',
        width: '400px',
        margin: '20px auto',
        textAlign: 'center',
      }}
    >
      <p>Drag & drop images (PNG, JPG) here</p>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default ImageUpload;

