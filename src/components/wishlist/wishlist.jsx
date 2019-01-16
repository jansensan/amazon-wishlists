import React, { Component } from 'react';

import WishlistModel from './wishlist-model.js';
import ListItem from '../list-item/list-item.jsx';
import SpinnerSrc from '../../assets/spinner-32x32.gif';

require('./wishlist.scss');


export default class Wishlist extends Component {
  constructor(props) {
    super(props);
    this.state = new WishlistModel(this.props.wishlistId);
  }

  // react methods definitions
  render() {
    return (
      <div className="wishlist">
        <h2>{this.props.wishlistName}</h2>

        {this.renderLoadingSpinner()}

        <div className="wishlist-items-container">
          {this.renderWishlistItems()}
        </div>

        <div className="wishlist-cta-container">
          {this.renderWishlistCTA()}
        </div>

      </div>
    );
  }

  componentDidMount() {
    this.state
      .fetch()
      .then(() => {
        this.setState(this.state)
      });
  }


  // methods definitions
  getWishlistURL() {
    return "https://www.amazon.ca/hz/wishlist/ls/" + this.state.id;
  }

  renderLoadingSpinner() {
    return !this.state.isLoaded &&
      <div className="loading-display">
        <img src={SpinnerSrc} className="icon" />
        <span className="label">En chargement...</span>
      </div>;
  }

  renderWishlistCTA() {
    return this.state.isLoaded &&
      <a
        href={this.getWishlistURL()}
        className="cta wishlist-cta"
        target="_blank"
      >Voyez la liste Amazon</a>;
  }

  renderWishlistItems() {
    return (this.state.isLoaded !== null) ?
      this.state.data.map((item, i) =>
        <ListItem
          key={i}
          productImageSrc={item.picture}
          productName={item.name}
          productLink={item.link}
        ></ListItem>
      )
    : <p>Cette liste ne contient rien</p>
  }
}