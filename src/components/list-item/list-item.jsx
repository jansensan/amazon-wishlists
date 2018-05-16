import React, { Component } from 'react';

require('./list-item.scss');


export default class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  // react methods definitions
  render() {
    return (
      <div className="list-item">
        <a href={this.props.productLink}>
          <img
            className="product-img"
            src={this.props.productImageSrc}
            alt={this.props.productName}
          />
          <span className="product-name">{this.getProductName(this.props.productName)}</span>
        </a>
      </div>
    );
  }

  // methods definition
  getProductName(fullName) {
    fullName = _.unescape(fullName);
    return _.truncate(fullName, {'length': 50});
  }
}