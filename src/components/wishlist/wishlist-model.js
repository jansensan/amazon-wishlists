import WishlistsService from '../../services/wishlists-service.js';

const maxItems = 10;

const priorityValues = {
  'highest': 1,
  'high': 2,
  'medium': 3,
  'low': 4,
  'lowest': 5,
};

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
            if (this.data) {
              this.data.length = 0;
              this.data = [];
            }

            // parse json to array of objects
            const temp = JSON.parse(response);

            // add numeric value for priority
            temp.forEach(entry => {
              // make copy
              var newEntry = _.cloneDeep(entry);

              // add priority value as per mapping
              if (newEntry.priority) {
                newEntry.priorityValue = priorityValues[newEntry.priority];
              }

              // add a max of X
              if (this.data.length < maxItems) {
                this.data.push(newEntry);
              }
            });

            // order array by product names
            this.data = _.orderBy(
              this.data,
              ['priorityValue', 'name'],
              ['asc', 'asc']
            );

            // resolve promise
            this.isLoaded = true;
            resolve();
          }
        );
    });
  }
}