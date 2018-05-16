import React, { Component } from 'react';

import WishlistModel from './wishlist-model.js';
import ListItem from '../list-item/list-item.jsx';
import SpinnerSrc from '../../assets/spinner-32x32.gif';

require('./wishlist.scss');


export default class Wishlist extends Component {
  constructor(props) {
    super(props);
    this.state = new WishlistModel(this.props.wishlistId);
    this.state
      .fetch()
      .then((() => {
        this.setState(this.state);
      }));
  }

  // react methods definitions
  render() {
    return (
      <div className="wishlist">
        <h2>{this.props.wishlistName}</h2>

        {
          !this.state.isLoaded ?
          <div className="loading-display">
            <img src={SpinnerSrc} className="icon" />
            <span className="label">En chargement...</span>
          </div>
          : null
        }

        {
          (this.state.isLoaded !== null) ?
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

      </div>
    );
  }
}