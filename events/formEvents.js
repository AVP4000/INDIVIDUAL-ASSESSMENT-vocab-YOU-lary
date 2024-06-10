import { createVocab, getVocab, updateVocab } from '../api/vocabData';
import { showVocab } from '../pages/vocab';

const formEvents = () => {
  document.querySelector('#form-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO: CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOOK
    if (e.target.id.includes('submit-vocab')) {
      const payload = {
        vocab: document.querySelector('#vocab').value,
        description: document.querySelector('#description').value,
        langTechId: document.querySelector('#categoryType').value,
      };
      createVocab(payload).then(({ word }) => {
        const patchPayload = { firebaseKey: word };
        updateVocab(patchPayload).then(() => {
          getVocab().then(showVocab);
        });
      });
    }

    // TODO: CLICK EVENT FOR EDITING A BOOK
    if (e.target.id.includes('update-vocab')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        vocab: document.querySelector('#vocab').value,
        description: document.querySelector('#description').value,
        langTechId: document.querySelector('#categoryType').value,
        firebaseKey,
      };
      updateVocab(payload).then(() => {
        getVocab().then(showVocab);
      });
    }
  });
};

export default formEvents;
