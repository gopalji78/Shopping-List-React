import React, { useState } from 'react';

const FileUploadComponent = () => {
  const [files, setFiles] = useState([]);
  const [sortedFiles, setSortedFiles] = useState([]);
  const [sortOrder, setSortOrder] = useState('desc'); // 'asc' for ascending, 'desc' for descending

  const handleFileChange = (e) => {
    const newFiles = [...files, ...e.target.files];
    setFiles(newFiles);
    setSortedFiles(sortFiles(newFiles, sortOrder));
  };

  const handleSortChange = (e) => {
    const newSortOrder = e.target.value;
    setSortOrder(newSortOrder);
    setSortedFiles(sortFiles(files, newSortOrder));
  };

  const sortFiles = (filesToSort, order) => {
    const sorted = [...filesToSort];
    sorted.sort((a, b) => {
      if (order === 'asc') {
        return a.lastModified - b.lastModified;
      } else {
        return b.lastModified - a.lastModified;
      }
    });
    return sorted;
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      
      <div>
        <label>Sort by Date: </label>
        <select onChange={handleSortChange}>
          <option value="desc">Newest First</option>
          <option value="asc">Oldest First</option>
        </select>
      </div>

      <div>
        {sortedFiles.map((file, index) => (
          <div key={index}>
            <p>{file.name}</p>
            <p>{`Last Modified: ${new Date(file.lastModified).toLocaleString()}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileUploadComponent;
