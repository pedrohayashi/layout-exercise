import React from 'react';
import MainContent from './MainContent';
import ExtraContent from './ExtraContent';

const BottomContent = () => {
  return (
    <div className="bottom-content">
      <MainContent />
      <ExtraContent />
    </div>
  );
};

export default BottomContent;
