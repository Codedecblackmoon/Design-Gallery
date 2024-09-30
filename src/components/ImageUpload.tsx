import React, { useState } from 'react';

const ImageUpload: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [imageURL, setImageURL] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
      const url = URL.createObjectURL(file);
      setImageURL(url);
    }
};

const handleDownload = () => {
  if (image) {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(image);
    link.download = image.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

const handleShareLink = () => {
  if (imageURL) {
    navigator.clipboard.writeText(imageURL).then(() => {
      alert('Link copied to clipboard!');
    });
  }
};

return (
  <div>
    <h2>Upload Image</h2>
    <input type="file" accept="image/*" onChange={handleImageChange} />
    {image && (
      <div>
        <h3>Uploaded Image:</h3>
        <img src={URL.createObjectURL(image)} alt="Uploaded" style={{ width: '200px' }} />
        <div>
          <button onClick={handleDownload}>Download</button>
          <button onClick={handleShareLink}>Share Link</button>
        </div>
      </div>
    )}
  </div>
);
};

export default ImageUpload;
