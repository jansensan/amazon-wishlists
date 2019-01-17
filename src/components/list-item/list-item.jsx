import _ from 'lodash';
import React, { Component } from 'react';

import breakpointModel from '../../models/breakpoints-model';
import Breakpoints from '../../constants/breakpoints';

require('./list-item.scss');


export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.isComponentMounted = false;

    breakpointModel.changed.add(this.update, this);
  }

  // react methods definitions
  render() {
    return (
      <a className="list-item" href={this.props.productLink}>
        <img
          className="product-img"
          src={this.props.productImageSrc}
          alt={this.props.productName}
        />
        <span className="product-name">{this.getProductName(this.props.productName)}</span>
      </a>
    );
  }

  componentDidMount() {
    this.isComponentMounted = true;
  }

  // methods definition
  getProductName(fullName) {
    // unescape name
    fullName = this.unescapeName(fullName);

    // deal with names in all capital letters
    if (fullName.toUpperCase() === fullName) {
      fullName = _.startCase(fullName.toLocaleLowerCase());
    }

    return _.truncate(
      fullName,
      {
        'length': this.getProductNameLength()
      }
    );
  }

  getProductNameLength() {
    let length = 44;

    switch (breakpointModel.breakpoint) {
      case Breakpoints.PHONE:
        length = 34;
        break;

      case Breakpoints.TABLET:
        length = 28;
        break;

      case Breakpoints.DESKTOP:
      case Breakpoints.LARGE_DESKTOP:
        length = 52;
        break;

      default:
    }

    return length;
  }

  unescapeName(name) {
    // see https://stackoverflow.com/questions/26888290/javascript-unescape-doesnt-seem-to-work
    var div = document.createElement('div');
    div.innerHTML = name;
    return div.textContent || div.innerText; // IE is different
  }

  update() {
    if (!this.isComponentMounted) {
      return;
    }

    this.forceUpdate();
  }
}