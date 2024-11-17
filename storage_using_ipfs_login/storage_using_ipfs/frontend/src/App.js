import React from 'react';
import FileUpload from './components/FileUpload';
import FileList from './components/FileList';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Document Management System</h1>
      </header>
      <FileUpload />
      <FileList />
    </div>
  );
}

export default App;
