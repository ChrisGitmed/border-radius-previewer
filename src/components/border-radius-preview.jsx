import React from 'react';

export default class BorderRadiusPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      corner1: 0,
      corner2: 0,
      corner3: 0,
      corner4: 0
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log('fired!');
    console.log('event.target.name: ', event.target.name);
    console.log('event.target.value: ', event.target.value);
    const {
      name,
      value
    } = event.target;
    if (name === 'corner1') {
      this.setState({ corner1: value })
    } else if (name === 'corner2') {
      this.setState({ corner2: value})
    } else if (name === 'corner3') {
      this.setState({ corner3: value })
    } else if (name === 'corner4') {
      this.setState({ corner4: value })
    }
  }

  render() {
    const { handleChange } = this;
    const {
      corner1,
      corner2,
      corner3,
      corner4
    } = this.state;

    const styleString = { "borderRadius": `${corner1}px ${corner2}px ${corner3}px ${corner4}px`}
    return (
      <>
        <div className="preview-box" style={styleString}></div>
        <div className="input-row">
          <span><input type="text" name="corner1" onChange={handleChange} placeholder="0"/> px</span>
          <span><input type="text" name="corner2" onChange={handleChange} placeholder="0"/> px</span>
          <span><input type="text" name="corner3" onChange={handleChange} placeholder="0"/> px</span>
          <span><input type="text" name="corner4" onChange={handleChange} placeholder="0"/> px</span>
        </div>
      </>
    )
  }
}
