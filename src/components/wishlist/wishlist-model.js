import WishlistsService from '../../services/wishlists-service.js';


export default class WishlistModel {
  constructor(id) {
    this.id = id;
    this.isLoaded = false;
    this.data = [];
  }

  fetch() {
    return new Promise((resolve, reject) => {
      WishlistsService
      .load(this.id)
      .then((response) => {
        this.data = JSON.parse(response);
        this.isLoaded = true;
        resolve();
      });
    });
  }
}