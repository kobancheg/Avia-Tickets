import '../css/style.css';
import './plugins';
import locations from './store/locations';
import formUI from './views/forms';

document.addEventListener('DOMContentLoaded', () => {
  initApp();

  // Events


  // Handlers
  async function initApp() {
    await locations.init();
    formUI.setAutoCompleteData(locations.shortCitiesList);
  }



})
