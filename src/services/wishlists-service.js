// public api
let WishlistsService = {
  load: load
};
export default WishlistsService;


// public methods definitions
function load(wishlistId) {
  let url = 'services/wishlist.php' +
    '?id=' + wishlistId +
    '&reveal=unpurchased' +
    '&sort=priority' +
    '&format=json' +
    '&tld=ca';

  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
}
