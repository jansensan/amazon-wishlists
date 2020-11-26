import React from 'react';
import ReactDOM from 'react-dom';

// constants
import Wishlists from './constants/wishlists.js';

// components
import Wishlist from './components/wishlist/wishlist.jsx';


ReactDOM.render(
  <div>
    <p>
      <br/>
      Une liste de bédés, de livres et autres articles qui m'intéressent.
      <br/>
      <br/>
    </p>

    <Wishlist
      wishlistId={Wishlists.MEDIA_ART_BOOKS}
      wishlistName="Livres - Arts médiatiques"
    ></Wishlist>
    <Wishlist
      wishlistId={Wishlists.CONTEMPORARY_ART_BOOKS}
      wishlistName="Livres - Arts contemporains"
    ></Wishlist>
    <Wishlist
      wishlistId={Wishlists.ART_BOOKS}
      wishlistName="Livres sur l'art"
    ></Wishlist>
    <Wishlist
      wishlistId={Wishlists.TECH_SOCIETY_BOOKS}
      wishlistName="Livres - Tech et société"
    ></Wishlist>
    <Wishlist
      wishlistId={Wishlists.DESIGN_BOOKS}
      wishlistName="Livres - Design"
    ></Wishlist>
    <Wishlist
      wishlistId={Wishlists.FICTION}
      wishlistName="Livres - Romans"
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
      wishlistId={Wishlists.MUSIC}
      wishlistName="Musique"
    ></Wishlist>
    <Wishlist
      wishlistId={Wishlists.WORKSHOP}
      wishlistName="Atelier et outils"
    ></Wishlist>
  </div>
  ,
  document.getElementById('reactApp')
);