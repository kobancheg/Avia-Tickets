import '../css/style.css';
import './plugins';
import locations from './store/locations';
import formUI from './views/form';

document.addEventListener('DOMContentLoaded', () => {
  initApp();
  const form = formUI.form;

  // Events
  form.addEventListener('submit', e => {
    e.preventDefault();
    onFormSubmit();
  })

  // Handlers
  async function initApp() {
    await locations.init();
    formUI.setAutoCompleteData(locations.shortCitiesList);
  }

  async function onFormSubmit() {
    // собрать данные из инпутов
    const origin = formUI.originValue;
    const destination = formUI.destinationValue;
    const depart_date = formUI.departDateValue;
    const return_date = formUI.returnDateValue;

    console.log(origin, destination, depart_date, return_date)
  }

})
