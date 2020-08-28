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
      <div class="ticket-airline d-flex align-items-center justify-items-between ml-auto">
        <img src="${ticket.airline_logo}" class="ticket-airline-img" />
        <span class="">${ticket.airline_name}</span>
        <button class="btn-small waves-effect waves-light pink darken-3" name="action">delete<i class="material-icons right">cancel</i>
        </button>
      </div>
      <div class="ticket-airline d-flex align-items-center justify-items-between">
        <span class="">${ticket.origin_name}</span>
        <span class="">${ticket.destination_name}</span>
      </div>
      <div class="ticket-airline d-flex align-items-center justify-items-between">
        <span class="">${ticket.departure_at}</span>
        <span class="">${currency}${ticket.price}</span>
      </div>
      <div class="ticket-airline d-flex align-items-center justify-items-between">
        <span class="">Пересадок: ${ticket.transfers}</span>
        <span class="">Номер рейса: ${ticket.flight_number}</span>
      </div>
    </li>
    `
  }
}

const dropdownUI = new DropdownUI(currencyUI);

export default dropdownUI;