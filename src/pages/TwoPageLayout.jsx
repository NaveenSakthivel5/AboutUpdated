// TwoPageLayout.js
import React from 'react';
import { Model } from './Battery'; // Adjust the path as needed

// Use <Model /> wherever you want the 3D battery to appear in your layout
// Use default import for Battery component
import './TwoPageLayout.css';

const TwoPageLayout = () => {
  return (
    <div>
      {/* First Page */}
      <div className="page-container first-page">
        <div className="column-left">
          <h2>Left Column</h2>
          <p>
            This is the left column with text content. It can contain a description or any
            other content that you want to display on the left side of the first page.
          </p>
        </div>
        <div className="column-center">
          {/* Battery Component in the center */}
          <Model />
        </div>
        <div className="column-right">
          <h2>Right Column</h2>
          <p>
            This is the right column with text content. Similar to the left, you can add
            your own content here for display.
          </p>
        </div>
      </div>

      {/* Second Page */}
      <div className="page-container second-page">
        <div className="column-left">
          {/* Blank space where the battery will move */}
        </div>
        <div className="column-right">
          <h2>Right Column</h2>
          <p>
            On this second page, we have a blank space on the left and the content
            on the right. You can use this layout for specific content that needs
            emphasis on the right.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TwoPageLayout;
