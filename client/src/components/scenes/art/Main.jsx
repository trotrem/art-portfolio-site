import React, { Component } from "react";
import Gallery from "react-photo-gallery";
import GalleryImage from "./GalleryImage.jsx";
import styled from "react-emotion";

let img_path = "./gallery_images/"
const photos = [
  {
    src: require(img_path + "Cosmodaunt.jpg"),
    width: 564,
    height: 901
  },
  {
    src: require(img_path + "Crossfire.jpg"),
    width: 564,
    height: 717
  },
  {
    src: require(img_path + "Enter_Darkness.jpg"),
    width: 564,
    height: 782
  },
  {
    src: require(img_path + "Ghosty.jpg"),
    width: 563,
    height: 594
  },
  {
    src: require(img_path + "Joker.jpg"),
    width: 564,
    height: 870
  },
  {
    src: require(img_path + "Lazy_Dragon.jpg"),
    width: 563,
    height: 600
  },
  {
    src: require(img_path + "master.png"),
    width: 600,
    height:898 
  },
  {
    src: require(img_path + "Solar_Workings.jpg"),
    width: 563,
    height: 581
  },
  {
    src: require(img_path + "Sword_in_Stone.jpg"),
    width: 563,
    height: 598
  },
  {
    src: require(img_path + "Waiting_for_the_Next_Round.jpg"),
    width: 564,
    height: 686
  },
  {
    src: require(img_path + "Weight_of_Splendour.jpg"),
    width: 400,
    height: 573
  }
];

const BlockingBackground = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default class GalleryPage extends Component {
  constructor(props) {
    super(props);

    this.resize = this.resize.bind(this);
    this.onKey = this.onKey.bind(this);
    
    this.state = {
      focusedImageIndex: null,
      width: window.innerWidth
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize());
    window.addEventListener("keydown", this.onKey);
    this.resize();
  }

  negativeMod(n, m) {
    return ((n % m) + m) % m;
  }
  
  onKey(e) {
    if (this.state.focusedImageIndex === null) {
      return
    }
    if (e.key === "ArrowLeft") {
      this.SetFocusedImage(e, { photo: null, index: this.negativeMod(this.state.focusedImageIndex - 1, photos.length)});
    }
    else if (e.key === "ArrowRight") {
      this.SetFocusedImage(e, { photo: null, index: (this.state.focusedImageIndex + 1) % photos.length });
    }
  }

  resize() {
    var timer = null;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        this.setState({ width: window.innerWidth });
      }, 100);
    };
  }

  SetFocusedImage = (event, obj) => {
    this.setState({ focusedImageIndex: obj ? obj.index : null });
  };

  render() {
    return (
      <div>
        <Gallery
          photos={photos}
          columns={this.state.width >= 1824 ? 4 : this.state.width >= 1024 ? 3 : this.state.width >= 480 ? 2 : 1}
          margin={2}
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
                this.SetFocusedImage(e, { photo: null, index: (this.state.focusedImageIndex + 1) % photos.length });
                e.stopPropagation();
              }}
            />
          </BlockingBackground>
        ) : null}
      </div>
    );
  }
}
