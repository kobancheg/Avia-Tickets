import favoritesStore from '../store/favorites';

class Dropdown {
  constructor(tickets) {
    this.tickets = tickets;
  }

  getFavoritesArr() {
    console.log(this.tickets);
    return this.tickets;
  }
}

const dropdownUI = new Dropdown(favoritesStore.favoriteTickets);

export default dropdownUI;