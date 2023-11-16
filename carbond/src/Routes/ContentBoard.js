import React from 'react';

import HomeMode from './HomeMode';

function ContentBoard({ mode }) {
  switch (mode) {
    case '/option1':
      return <HomeMode />;
    // Add cases for other modes and import corresponding components

    default:
      return null; // Render null for unknown modes
  }
}

export default ContentBoard;
