import React from 'react';
import ReactDOM from 'react-dom';

// constants
import Wishlists from './constants/wishlists.js';

// components
import Wishlist from './components/wishlist/wishlist.jsx';
import ListItem from './components/list-item/list-item.jsx';


ReactDOM.render(
  <div>
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
      wishlistId={Wishlists.ART_BOOKS}
      wishlistName="Livres d'art"
    ></Wishlist>
    <Wishlist
      wishlistId={Wishlists.BOOKS}
      wishlistName="Livres (non triés)"
    ></Wishlist>
    <Wishlist
      wishlistId={Wishlists.VIDEO}
      wishlistName="Vidéo"
    ></Wishlist>
    <Wishlist
      wishlistId={Wishlists.MUSIC}
      wishlistName="Musique"
    ></Wishlist>
  </div>
  ,
  document.getElementById('reactApp')
);