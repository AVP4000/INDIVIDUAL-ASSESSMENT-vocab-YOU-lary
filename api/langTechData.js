import client from '../utils/client';

const endpoint = client.databaseURL;

//  GET ALL LanguageTech
const getLanguageTech = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/languagetech.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }, // you technically do not need the options object for GET requests, but using it here for consistency
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});
// CREATE LanguageTech
// const createLanguageTech = (payload) => new Promise((resolve, reject) => {
//   fetch(`${endpoint}/languagetech.json`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     }, // you technically do not need the options object for GET requests, but using it here for consistency
//     body: JSON.stringify(payload)
//   })
//     .then((response) => response.json())
//     .then((data) => resolve(data))
//     .catch(reject);
// });

// GET SINGLE LanguageTech
const getSingleLanguageTech = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/languagetech/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }, // you technically do not need the options object for GET requests, but using it here for consistency
  })
    .then((response) => response.json())
    .then((data) => resolve(data)) // will resolve a single object
    .catch(reject);
});

// DELETE LanguageTech
const deleteSingleLanguageTech = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/languagetech/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    }, // you technically do not need the options object for GET requests, but using it here for consistency
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// UPDATE LanguageTech
const updateLanguageTech = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/languagetech/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    }, // you technically do not need the options object for GET requests, but using it here for consistency
    body: JSON.stringify(payload)
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// GET A SINGLE LanguageTech's VOCABULARY
const getLanguageTechVocabulary = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabulary.json?orderBy="languageTechId"&equalTo="${firebaseKey}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// TRENDING THE LanguageTech
const getTrendingLanguageTech = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/languagetech.json?orderBy="trending"&equalTo=true`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

export {
  getLanguageTech,
  //   createLanguageTech,
  getSingleLanguageTech,
  deleteSingleLanguageTech,
  updateLanguageTech,
  getLanguageTechVocabulary,
  getTrendingLanguageTech
};
