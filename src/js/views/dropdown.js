import currencyUI from './currency';

class DropdownUI {
  constructor(currency) {
    this.ul = document.querySelector('.show-favorites');
    this.getCurrencySimbol = currency.getCurrencySimbol.bind(currency);
    this.currency = currency;
  }

  renderDropdownListTiskets(tickets) {
    this.clearContainer();

    let fragment = '';
    const currency = this.getCurrencySimbol();

    console.log(tickets)

    tickets.forEach(ticket => {
      const template = DropdownUI.dropdownTemlate(ticket, currency);
      fragment += template;
    });

    this.ul.insertAdjacentHTML('afterbegin', fragment);
  }

  clearContainer() {
    this.ul.innerHTML = '';
  }

  static dropdownTemlate(ticket, currency) {
    return `
    <li class="favorites-list">
      <div class="ticket-airline d-flex align-items-center mx-1">
        <img src="${ticket.airline_logo}" class="ticket-airline-img" />
        <span class="my-1">${ticket.airline_name}</span>
        <button class="btn-small waves-effect waves-light pink darken-3 ml-auto" name="action">delete<i class="material-icons right">cancel</i>
        </button>
      </div>
      <div class="ticket-airline d-flex align-items-center justify-items-between mx-1">
        <span class="my-1">${ticket.origin_name}</span>
        <span class="my-1">${ticket.destination_name}</span>
      </div>
      <div class="ticket-airline d-flex align-items-center justify-items-between mx-1">
        <span class="my-1">${ticket.departure_at}</span>
        <span class="my-1">${currency}${ticket.price}</span>
      </div>
      <div class="ticket-airline d-flex align-items-center justify-items-between mx-1">
        <span class="my-1">Пересадок: ${ticket.transfers}</span>
        <span class="my-1">Номер рейса: ${ticket.flight_number}</span>
      </div>
    </li>
    `
  }
}

const dropdownUI = new DropdownUI(currencyUI);

export default dropdownUI;