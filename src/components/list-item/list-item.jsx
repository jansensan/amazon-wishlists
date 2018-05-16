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
    fullName = this.unescapeName(fullName);
    return _.truncate(fullName, {'length': 50});
  }

  unescapeName(name) {
    // see https://stackoverflow.com/questions/26888290/javascript-unescape-doesnt-seem-to-work
    var div = document.createElement('div');
    div.innerHTML = name;
    return div.textContent || div.innerText; // IE is different
  }
}