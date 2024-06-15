import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navEvents';
import { getVocab } from '../api/vocabData';
import { showVocab } from '../pages/vocab';
// import { getLanguageTechVocabulary } from '../api/langTechData';
// import { showLanguageTech } from '../pages/langTech';

const startApp = (user) => {
  domBuilder(user); // BUILD THE DOM
  domEvents(user); // ADD THE EVENT LISTENTERS TO THE DOM
  formEvents(user); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(user); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents(user); // ATTACH THE EVENT LISTENERS TO THE NAVBAR

  // TODO: Put all Vocab on the DOM on App load
  getVocab(user.uid).then((vocab) => showVocab(vocab));
//   getLanguageTechVocabulary().then(showLanguageTech);
};

export default startApp;
