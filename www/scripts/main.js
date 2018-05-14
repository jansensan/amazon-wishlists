var wishlists = {
  doitlikejustin: {
    DEFAULT: "37XI10RRD17X2"
  },
  mjanson: {
    COMICS: '19KZ6ZR0EHLT7',
    BOOKS: '3AY2APFYKM62X',
    ART_BOOKS: '325IJY9J13L36',
    ELECTRONICS: '2QLMANEL99JBT',
    MOVING: '2AJF6FA0IT5KX',
    MUSIC: '3POJMXXU46S0D',
    TRANSFORMERS: '30A896D8GFXLP',
    VIDEO: '7LQB61KUM4CV',
    VIDEO_GAMES: '2HMCYO3SQW2PM',
  }
};

function loadWishlist() {
  console.info('--- loadWishlist ---');
  var wishlistId = wishlists.mjanson.COMICS;

  console.log('load wishlist id ' + wishlistId);

  var requestURL = 'services/wishlist.php' +
    '?id=' + wishlistId +
    '&reveal=unpurchased' +
    '&sort=priority' +
    '&format=json' +
    '&tld=ca';

  var request = new XMLHttpRequest();
  request.onreadystatechange = onRequestStateChanged;
  request.open('GET', requestURL, true);
  request.send(); 
}

function onRequestStateChanged() {
  if (this.readyState == 4 && this.status == 200) {
    // console.log('response: ', this.response);
    var obj = JSON.parse(this.response);
    console.log('obj: ', obj);
  }
}