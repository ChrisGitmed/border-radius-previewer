import React from 'react';
import TestSquare from './preview-box';

export default class BorderRadiusPreview extends React.Component {
  render() {
    return (
      <>
        <TestSquare/>
        <div className="input-row">
          <span><input type="text" /> px</span>
          <span><input type="text" /> px</span>
          <span><input type="text" /> px</span>
          <span><input type="text" /> px</span>
        </div>
      </>
    )
  }
}
