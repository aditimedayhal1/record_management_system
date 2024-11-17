
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FileList() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/files')
      .then(response => {
        setFiles(response.data);
      })
      .catch(error => {
        console.error('Error fetching files:', error);
      });
  }, []);

  return (
    <div className="file-list">
      <h2>Uploaded Files</h2>
      <ul>
        {files.map(file => (
          <li key={file._id}>
            <a href={`https://ipfs.io/ipfs/${file.cid}`} target="_blank" rel="noopener noreferrer">
              {file.name}
            </a> ({file.size} bytes)
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FileList;
