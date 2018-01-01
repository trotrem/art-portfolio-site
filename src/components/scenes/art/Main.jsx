import React, { Component } from "react";
import glamorous from "glamorous";
import Gallery from "react-photo-gallery";
import GalleryImage from "./GalleryImage.jsx";

const photos = [
  {
    src: "https://pre00.deviantart.net/549b/th/pre/f/2017/346/f/6/fairy_by_themirandachick-dbwia3p.png",
    width: 749,
    height: 891
  },
  {
    src: "https://orig00.deviantart.net/9604/f/2017/324/c/2/sword_in_stone_by_themirandachick-dbucbp8.png",
    width: 693,
    height: 736
  },
  {
    src: "https://orig00.deviantart.net/a328/f/2017/321/9/1/0_ric_the_wizard_by_themirandachick-dbu1yhi.png",
    width: 590,
    height: 622
  },
  {
    src: "https://pre00.deviantart.net/ad30/th/pre/f/2017/275/b/9/joker_by_themirandachick-dbpb3es.png",
    width: 497,
    height: 768
  },
  {
    src: "https://orig00.deviantart.net/38b9/f/2017/274/0/b/linky_by_themirandachick-dbp60yw.png",
    width: 675,
    height: 768
  },
  {
    src: "https://img00.deviantart.net/b730/i/2017/033/7/c/papillon_by_themirandachick-daxooyd.png",
    width: 563,
    height: 768
  },
  {
    src: "https://img00.deviantart.net/a6b1/i/2017/026/d/0/to_wander_by_themirandachick-dawuiex.png",
    width: 521,
    height: 768
  },
  {
    src: "https://img00.deviantart.net/65f2/i/2016/352/8/d/mandy_by_themirandachick-das1qyt.png",
    width: 600,
    height: 734
  },
  {
    src: "https://img00.deviantart.net/0704/i/2016/339/1/2/waiting_for_the_next_round_by_themirandachick-daqepgp.png",
    width: 600,
    height: 730
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

  SetFocusedImage = (event, obj) => {
    this.setState({ focusedImageIndex: obj? obj.index:null });
  };

  render() {
    return (
      <div>
        <Gallery
          photos={photos}
          columns={4}
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
                this.SetFocusedImage(e, {photo: null, index: (this.state.focusedImageIndex + 1) % photos.length});
                e.stopPropagation();
              }}
            />
          </BlockingBackground>
        ) : null}
      </div>
    );
  }
}