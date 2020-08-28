import favoritesStore from '../store/favorites';

class Dropdown {
  constructor(tickets) {
    this.tickets = tickets;
  }



  getFavoritesArr() {
    // const dropdownBtn = document.querySelector('.dropdown-trigger');
    // dropdownBtn.addEventListener('click', element => {
      return this.tickets;
    // })
  }
}

const dropdownUI = new Dropdown(favoritesStore.favoriteTickets);

export default dropdownUI;