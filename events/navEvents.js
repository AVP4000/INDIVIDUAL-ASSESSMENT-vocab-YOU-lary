// import { getBooks, booksOnSale } from '../api/bookData';
// import { getAuthors, getFavAuthors } from '../api/authorData';
// import { showAuthors } from '../pages/authors';
// import { showBooks } from '../pages/books';
import { signOut } from '../utils/auth';
import { getVocab, vocabularyWordOfTheMonth } from '../api/vocabData';
import { getLanguageTech, getTrendingLanguageTech } from '../api/langTechData';
import { showVocab } from '../pages/vocab';
import { showLanguageTech } from '../pages/langTech';

// navigation events --CHECK THE NAV BAR UNDER SHARED--
const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // Words of the month
  document.querySelector('#word-of-the-month').addEventListener('click', () => {
    // console.warn('CLICKED WORD OF MONTH');
    vocabularyWordOfTheMonth().then(showVocab);
  });

  // ALL VOCAB
  document.querySelector('#all-vocab').addEventListener('click', () => {
    getVocab().then(showVocab);
  });

  // STUDENTS Create an event listener for the LANG/TECH
  // 1. When a user clicks the LANG/TECH link, make a call to firebase to get all LANG/TECH
  // 2. Convert the response to an array because that is what the makeLANG/TECH function is expecting
  // 3. If the array is empty because there are no LANG/TECH, make sure to use the LANG/TECH function
  document.querySelector('#language-tech').addEventListener('click', () => {
    // console.warn('CLICKED LANG/TECH');
    getLanguageTech().then(showLanguageTech);
  });

  //   TRENDING LANG/TECH --CHECK THE NAV BAR UNDER SHARED--
  document.querySelector('#trending-language-tech').addEventListener('click', () => {
    //   console.warn('CLICKED TRENFING LANG/TECH');
    getTrendingLanguageTech().then(showLanguageTech);
  });

  // STRETCH: SEARCH
  //   document.querySelector('#search').addEventListener('keyup', (e) => {
  //     const searchValue = document.querySelector('#search').value.toLowerCase();
  //     console.warn(searchValue);

  // WHEN THE USER PRESSES ENTER, MAKE THE API CALL AND CLEAR THE INPUT
  //     if (e.keyCode === 13) {
  //       // MAKE A CALL TO THE API TO FILTER ON THE BOOKS
  //       // IF THE SEARCH DOESN'T RETURN ANYTHING, SHOW THE EMPTY STORE
  //       // OTHERWISE SHOW THE STORE

//       document.querySelector('#search').value = '';
//     }
//   });
};

export default navigationEvents;
