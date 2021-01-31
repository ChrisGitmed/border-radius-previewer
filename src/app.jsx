import React from 'react';
import BorderRadiusPreview from './components/border-radius-preview';

export default class App extends React.Component {
  render() {
    return (
      <div className="page-container">
        <nav><h1>Border Radius Previewer</h1></nav>
        <BorderRadiusPreview />
      </div>
    )
  }
}
