import WishlistsService from '../../services/wishlists-service.js';


export default class WishlistModel {
  constructor(id) {
    this.id = id;
    this.isLoaded = false;
    this.data = [];
  }

  fetch() {
    return new Promise((resolve) => {
      WishlistsService
        .load(this.id)
        .then(
          (response) => {
            // parse json to array of objects
            this.data = JSON.parse(response);
            // console.log('this.data: ', this.data);

            // order array by product names
            this.data = _.orderBy(this.data, ['name'], ['asc']);

            // resolve promise
            this.isLoaded = true;
            resolve();
          }
        );
    });
  }
}