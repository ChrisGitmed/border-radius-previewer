import React from 'react';
import TestSquare from './test-square';

export default class BorderRadiusPreview extends React.Component {
  render() {
    return (
      <>
        <TestSquare/>
        <div className="input-row">
          <span>Border: </span>
          <span><input type="text" /> px</span>
          <span><input type="text" /> px</span>
          <span><input type="text" /> px</span>
          <span><input type="text" /> px</span>
        </div>
      </>
    )
  }
}
