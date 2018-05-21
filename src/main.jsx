import _ from 'lodash';

import React from 'react';
import ReactDOM from 'react-dom';

// constants
import Wishlists from './constants/wishlists.js';

// components
import Wishlist from './components/wishlist/wishlist.jsx';
import ListItem from './components/list-item/list-item.jsx';


ReactDOM.render(
  <div>
    <p>Une liste de bédés, de livres et autres articles qui m'intéressent.</p>
    <Wishlist
      wishlistId={Wishlists.TRANSFORMERS}
      wishlistName="Comics - Transformers"
    ></Wishlist>
    <Wishlist
      wishlistId={Wishlists.COMICS}
      wishlistName="Bédés/Comics"
    ></Wishlist>
    <Wishlist
      wishlistId={Wishlists.VIDEO_GAMES}
      wishlistName="Jeux vidéo"
    ></Wishlist>
    <Wishlist
      wishlistId={Wishlists.CONTEMPORARY_ART_BOOKS}
      wishlistName="Livres - Arts contemporains"
    ></Wishlist>
    <Wishlist
      wishlistId={Wishlists.MEDIA_ART_BOOKS}
      wishlistName="Livres - Arts médiatiques"
    ></Wishlist>
    <Wishlist
      wishlistId={Wishlists.TECH_SOCIETY_BOOKS}
      wishlistName="Livres - Tech et société"
    ></Wishlist>
    <Wishlist
      wishlistId={Wishlists.ART_BOOKS}
      wishlistName="Livres sur l'art"
    ></Wishlist>
    <Wishlist
      wishlistId={Wishlists.BOOKS}
      wishlistName="Livres (non triés)"
    ></Wishlist>
    <Wishlist
      wishlistId={Wishlists.MUSIC}
      wishlistName="Musique"
    ></Wishlist>
    <Wishlist
      wishlistId={Wishlists.VIDEO}
      wishlistName="Vidéo"
    ></Wishlist>
  </div>
  ,
  document.getElementById('reactApp')
);