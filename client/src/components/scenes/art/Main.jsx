import React, { Component } from "react";
import Gallery from "react-photo-gallery";
import GalleryImage from "./GalleryImage.jsx";
import styled from "react-emotion";

const photos = [
  {
    src: "https://img00.deviantart.net/3e1b/i/2016/314/6/0/master_by_themirandachick-danw7bm.png",
    width: 600,
    height: 898
  },
  {
    src: "https://img00.deviantart.net/2d99/i/2016/299/e/d/inktober_25___weight_of_splendor_by_themirandachick-dambgav.png",
    width: 400,
    height: 573
  },
  {
    src: "https://img00.deviantart.net/e68d/i/2016/325/0/0/crossfire_by_themirandachick-daoxyfu.png",
    width: 600,
    height: 763
  },
  {
    src: "https://pre00.deviantart.net/ad30/th/pre/f/2017/275/b/9/joker_by_themirandachick-dbpb3es.png",
    width: 497,
    height: 768
  },
  {
    src: "https://img00.deviantart.net/c83e/i/2016/328/5/9/enter_darkness_by_themirandachick-dapeigs.png",
    width: 600,
    height: 832
  },
  {
    src: "https://img00.deviantart.net/0b5e/i/2016/301/5/6/inktober_27___the_bigger_bite_by_themirandachick-damk8lj.png",
    width: 600,
    height: 610
  },
  {
    src: "https://img00.deviantart.net/05c8/i/2018/016/9/4/space_mercenary_by_themirandachick-dc07mgo.png",
    width: 800,
    height: 1083
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
  },
  {
    src: "https://img00.deviantart.net/be9a/i/2016/313/c/a/solar_workings_by_themirandachick-danv8cx.png",
    width: 600,
    height: 619
  },
  {
    src: "https://img00.deviantart.net/c1fa/i/2016/323/7/9/cosmodaunt_by_themirandachick-daou4yw.png",
    width: 600,
    height: 959
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
