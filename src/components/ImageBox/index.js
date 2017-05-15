import React, { Component } from "react";
import { View, Image, ActivityIndicator } from "react-native";
import PureRenderMixin from "react-addons-pure-render-mixin";
import { size } from "../../theme";
import Loading from "../Loading";

const defaultMaxWidth = size.window.width;

class ImageBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(
      this
    );
  }

  onImageLoadEnd() {
    const { source, maxWidth = defaultMaxWidth } = this.props;
    this.setState({
      loading: false
    });
    Image.getSize &&
      Image.getSize(
        source.uri,
        (width, height) => {
          if (width >= maxWidth) {
            height = maxWidth / width * height;
            width = maxWidth;
          }
          this.image &&
            this.image.setNativeProps({
              style: {
                width: width,
                height: height
              }
            });
        },
        () => null
      );
  }

  render() {
    const { source, style } = this.props;
    return (
      <Image
        ref={view => this.image = view}
        source={{ uri: source.uri }}
        style={style}
        onLoadEnd={() => this.onImageLoadEnd()}
      >
        {this.state.loading ? <Loading /> : null}
      </Image>
    );
  }
}

export default ImageBox;
