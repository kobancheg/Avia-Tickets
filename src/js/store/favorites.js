import locations from './locations';
import dropdownUI from '../views/dropdown';
class Favorites {
  constructor() {
    this.favoriteTickets = [];
  }

  getFavoriteBtn() {
    const favoriteBtn = document.querySelectorAll('.favorite');
    favoriteBtn.forEach((item) => { 
      item.addEventListener('click', this.addTicketToFavorites);
    });
  }

  addTicketToFavorites(element) {
    const id = element.target.closest('div[id]').id;
    const ticket = locations.lastSearch.find(item => item.id == id);
    this.favoriteTickets = favoritesStore.favoriteTickets.push(ticket);
    dropdownUI.renderDropdownListTiskets(favoritesStore.favoriteTickets);
  }

}

const favoritesStore = new Favorites();

export default favoritesStore;