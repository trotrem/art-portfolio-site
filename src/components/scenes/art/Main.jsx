import React, { Component } from "react";
import glamorous from "glamorous";
import Gallery from "react-photo-gallery";
import GalleryImage from "./GalleryImage.jsx";

const photos = [
  {
    src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    width: 1,
    height: 1
  },
  {
    src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/PpOHJezOalU/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
    width: 4,
    height: 3
  }
];

const BlockingBackground = glamorous.div({
  position: "fixed",
  top: "0",
  left: "0",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  cursor: "pointer",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
});

export default class GalleryPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focusedImageIndex: null
    };
  }

  SetFocusedImage = (event, index) => {
    this.setState({ focusedImageIndex: index });
  };

  render() {
    console.log(this.state.focusedImageIndex);
    return (
      <div>
        <Gallery
          photos={photos}
          ImageComponent={GalleryImage}
          onClick={this.SetFocusedImage}
        />
        {this.state.focusedImageIndex !== null ? (
          <BlockingBackground
            onClick={e => {
              this.SetFocusedImage(e, null);
            }}
          >
            <img
              src={photos[this.state.focusedImageIndex].src}
              alt=""
              onClick={e => {
                let i = this.state.focusedImageIndex + 1;
                this.SetFocusedImage(e, i);
              }}
            />
          </BlockingBackground>
        ) : null}
      </div>
    );
  }
}