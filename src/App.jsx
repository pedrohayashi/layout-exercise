import React from 'react';
import './App.css';

function App() {
  return (
    <div className="main-container">
      <header className="header">Header</header>
      <div className="content-container">
        <div className="side-container">
          <div className="hero">Hero</div>
          <div className="sidebar">Sidebar</div>
        </div>
        <div className="main-extra-container">
          <div className="main-content">Main Content</div>
          <div className="extra-content">Extra Content</div>
        </div>
      </div>
      <div className="related-container">
        <div className="related-images">Related Images</div>
        <div className="related-posts">Related Posts</div>
      </div>
      <footer className="footer">Footer</footer>
    </div>
  );
}

export default App;
