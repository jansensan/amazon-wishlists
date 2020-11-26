import WishlistsService from '../../services/wishlists-service.js';

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
              var newEntry = _.cloneDeep(entry);
              if (newEntry.priority) {
                newEntry.priorityValue = priorityValues[newEntry.priority];
              }
              this.data.push(newEntry);
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