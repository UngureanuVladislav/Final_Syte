import React from 'react';
import Image from 'react-bootstrap/Image';

export default function RotatedImage(props) {
  const styles = {
    img: {
      width: props.width,
      height: props.height,
      position: props.position,
      marginLeft: props.marginLeft,
      marginRight: props.marginRight,
      marginTop: props.marginTop,
      marginBottom: props.marginBottom,
      top: props.top,
      left: props.left,
      right: props.right,
      bottom: props.bottom,
      zIndex: props.zIndex,
    }
  };

  return (
    <Image fluid src={props.img} style={styles.img} />
  );
}
