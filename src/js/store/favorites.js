class Favorites {
  constructor(ticket) {
    // console.log(ticket)
  }

  addTicketToFavorites(e) {
    if (e.target.tagName === 'A') {
      console.log('a was clicked!');
    }
  }
}

const favorites = new Favorites();

export default favorites;