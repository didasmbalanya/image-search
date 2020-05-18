import React, { Component, createRef } from "react";

export class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spans: 0,
    };

    this.imageRef = createRef();
  }

  setSpans = () => {
    const height = this.imageRef.current.height;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };

  componentDidMount = () => {
    this.imageRef.current.addEventListener("load", this.setSpans);
  };

  render() {
    const {
      alt_description,
      urls: { regular },
    } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={alt_description} src={regular} />
      </div>
    );
  }
}
