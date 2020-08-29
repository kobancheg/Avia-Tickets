class Favorites {
  constructor() {
    this.favoriteTickets = [];
  }

  addTicketToFavorites(ticket) {
    let isContain = false;

    this.favoriteTickets.forEach(item => {
      if (item === ticket) {
        isContain = true;
      }
    });
    if (isContain) {
      M.toast({ html: 'already added to favorites', classes: 'pink accent-4' });
    } else {
      M.toast({ html: 'ticket has added to favorites', classes: 'green accent-4' });
      this.favoriteTickets.push(ticket);
    }
  }

  removeFromFavorites(ticket) {
    this.favoriteTickets = this.favoriteTickets.filter((item) => {
      return item !== ticket;
    })
  }

}

const favoritesStore = new Favorites();

export default favoritesStore;