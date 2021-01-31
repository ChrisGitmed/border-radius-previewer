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
    const {
      name,
      value
    } = event.target;
    if (name === 'corner1') {
      if (value === '') {
        this.setState({corner1 : 0})
      } else this.setState({corner1 : value})
    } else if (name === 'corner2') {
      if (value === '') {
        this.setState({ corner2: 0 })
      } else this.setState({corner2 : value})
    } else if (name === 'corner3') {
      if (value === '') {
        this.setState({corner3: 0});
      } else this.setState({ corner3: value })
    } else if (name === 'corner4') {
      if (value === '') {
        this.setState({ corner4: 0 })
      } else this.setState({ corner4: value })
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

    const styleObj = { "borderRadius": `${corner1}px ${corner2}px ${corner3}px ${corner4}px`};
    const styleString = `${corner1}px ${corner2}px ${corner3}px ${corner4}px`;
    return (
      <>
        <div className="preview-box" style={styleObj}></div>
        <div className="input-row row">
          <span><input type="text" name="corner1" onChange={handleChange} placeholder="0"/> px</span>
          <span><input type="text" name="corner2" onChange={handleChange} placeholder="0"/> px</span>
          <span><input type="text" name="corner3" onChange={handleChange} placeholder="0"/> px</span>
          <span><input type="text" name="corner4" onChange={handleChange} placeholder="0"/> px</span>
        </div>
        <div className="copy-row">
          <p>border-radius: {styleString}</p>
          <button><span className="lnr lnr-paperclip"></span></button>
        </div>
      </>
    )
  }
}
