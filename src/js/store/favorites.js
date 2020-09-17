class Favorites {
  constructor() {
    this.favoriteTickets = [];
  }

  addTicketToFavorites(ticket) {
    let isContain = false;

    isContain = this.favoriteTickets.some((item) => item === ticket);

    if (isContain) {
      M.toast({ html: 'already added to favorites', classes: 'pink accent-4' });
    } else {
      M.toast({
        html: 'ticket has added to favorites',
        classes: 'yellow darken-2',
      });
      this.favoriteTickets.push(ticket);
    }
  }

  removeFromFavorites(ticket) {
    this.favoriteTickets = this.favoriteTickets.filter((item) => {
      return item !== ticket;
    });
    M.toast({ html: 'removed from favorites', classes: 'yellow darken-2' });
  }
}

const favoritesStore = new Favorites();

export default favoritesStore;
