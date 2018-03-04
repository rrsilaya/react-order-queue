import React, { Component } from 'react';
import { Icon } from 'antd';

class IconText extends Component {
  render() {
    const { icon, text } = this.props;

    return (
      <span>
        <Icon type={icon} style={{ marginRight: 8 }} />
        {text}
      </span>
    );
  }
}

export default IconText;