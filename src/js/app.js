import '../css/style.css';
import './plugins';
import locations from './store/locations';
import formUI from './views/form';
import ticketsUI from './views/tickets';
import currencyUI from './views/currency';
import favorites from './store/favorites';
import dropdownUI from './views/dropdown';

document.addEventListener('DOMContentLoaded', () => {
  initApp();
  const form = formUI.form;

  // Events
  form.addEventListener('submit', e => {
    e.preventDefault();
    onFormSubmit();
  })

  ticketsUI.container.addEventListener('click', (element) => {
    if (element.target.classList.contains('favorite')) {
      const id = element.target.closest('div[id]').id;
      const ticket = locations.lastSearch.find(item => item.id == id);
      favorites.addTicketToFavorites(ticket);
      dropdownUI.renderDropdownListTiskets(favorites.favoriteTickets);
      element.target.innerText = 'added to favorite';
      element.target.classList.add('yellow', 'darken-2');
    }
  });

  dropdownUI.ul.addEventListener('click', (element) => {
    if (element.target.classList.contains('delete')) {
      const id = element.target.closest('div[id]').id;
      const ticket = locations.lastSearch.find(item => item.id == id);
      favorites.removeFromFavorites(ticket);
      dropdownUI.renderDropdownListTiskets(favorites.favoriteTickets);
      ticketsUI.returnFavoriteBtnColor(id);
    }
  });

  // Handlers
  async function initApp() {
    await locations.init();
    formUI.setAutoCompleteData(locations.shortCities);
  }

  async function onFormSubmit() {
    // собрать данные из инпутов
    const origin = locations.getCityCodeByKey(formUI.originValue);
    const destination = locations.getCityCodeByKey(formUI.destinationValue);
    const depart_date = formUI.departDateValue;
    const return_date = formUI.returnDateValue;
    const currency = currencyUI.currencyValue;
    // CODE, CODE, 2019-09, 2019-10
    // console.log(origin, destination, depart_date, return_date);
    await locations.fetchTickets({
      origin,
      destination,
      depart_date,
      return_date,
      currency
    })

    ticketsUI.renderTickets(locations.lastSearch);
  }
})


