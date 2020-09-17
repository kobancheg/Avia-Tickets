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

    tickets.forEach((ticket) => {
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
    <div class="favorites-list" id="${ticket.id}">
      <div class="ticket-airline d-flex align-items-center mx-1">
        <img src="${ticket.airline_logo}" class="ticket-airline-img" />
        <span>${ticket.airline_name}</span>
        <button class="btn-small waves-effect waves-light pink darken-3 ml-auto delete" name="action">delete<i class="material-icons right">cancel</i>
        </button>
      </div>
      <div class="ticket-airline d-flex align-items-center justify-items-between mx-1">
        <span>${ticket.origin_name}</span>
        <span>${ticket.destination_name}</span>
      </div>
      <div class="ticket-airline d-flex align-items-center justify-items-between mx-1">
        <span>${ticket.departure_at}</span>
        <span>${currency}${ticket.price}</span>
      </div>
      <div class="ticket-airline d-flex align-items-center justify-items-between mx-1">
        <span>Пересадок: ${ticket.transfers}</span>
        <span>Номер рейса: ${ticket.flight_number}</span>
      </div>
    </div>
    `;
  }
}

const dropdownUI = new DropdownUI(currencyUI);

export default dropdownUI;
