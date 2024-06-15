import { deleteVocab, getVocab, getSingleVocab } from '../api/vocabData';
import { showVocab } from '../pages/vocab';
import addVocabForm from '../components/forms/addVocabForm';
// import viewVocab from '../pages/viewVocab';
// import { getLanguageTech, getSingleLanguageTech } from '../api/langTechData';
// import { getvocabDetails } from '../api/mergedData';
// import { showLanguageTech } from '../pages/langTech';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // TODO: CLICK EVENT FOR DELETING A vocab
    if (e.target.id.includes('delete-vocab-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete this gift?')) {
        // console.warn('CLICKED DELETE vocab', e.target.id);
        // console.warn(e.target.id.split('--'));
        const [, firebaseKey] = e.target.id.split('--');

        deleteVocab(firebaseKey).then(() => {
          getVocab(user.uid).then(showVocab);
        });
      }
    }

    // TODO: CLICK EVENT EDITING/UPDATING A vocab
    if (e.target.id.includes('edit-vocab-btn')) {
      // console.warn('EDIT vocab', e.target.id);
      // console.warn(e.target.id.split('--'));
      const [, firebaseKey] = e.target.id.split('--');

      getSingleVocab(firebaseKey).then((vocabObj) => addVocabForm(vocabObj));

      // getSinglevocab(firebaseKey).then(addVocabForm); // using the callback method
    }

    // TODO: CLICK EVENT FOR SHOWING FORM FOR ADDING A vocab
    if (e.target.id.includes('add-vocab-btn')) {
      // console.warn('ADD vocab');
      addVocabForm(user);
    }

    // TODO: CLICK EVENT FOR VIEW vocab DETAILS
    // if (e.target.id.includes('view-vocab-btn')) {
    // console.warn('VIEW vocab', e.target.id);
    // console.warn(e.target.id.split('--'));
    // const [, firebaseKey] = e.target.id.split('--');

    //   getvocabDetails(firebaseKey).then(viewVocab);
    // }

    // // FIXME: ADD CLICK EVENT FOR DELETING AN AUTHOR
    // if (e.target.id.includes('delete-author-btn')) {
    //   // eslint-disable-next-line no-alert
    //   if (window.confirm('What? Is the Pen mightier than the sword?!')) {
    //     // console.warn('DELETE AUTHOR', e.target.id);
    //     // console.warn(e.target.id.split('--'));
    //     const [, firebaseKey] = e.target.id.split('--');
    //     // Call the promise we created on button click to delete all the authors Vocab,
    //     // then delete the author
    //     deleteAuthorVocabRelationship(firebaseKey).then(() => {
    //       getAuthors().then(showAuthors);
    //     });
    //   }
    // }

    // // FIXME: ADD CLICK EVENT FOR SHOWING FORM FOR ADDING AN AUTHOR
    // if (e.target.id.includes('add-author-btn')) {
    //   // console.warn('ADD AUTHOR');
    //   addAuthorForm();
    // }
    // // FIXME: ADD CLICK EVENT FOR EDITING AN AUTHOR
    // if (e.target.id.includes('update-author')) {
    //   // console.warn('EDIT vocab', e.target.id);
    //   // console.warn(e.target.id.split('--'));
    //   const [, firebaseKey] = e.target.id.split('--');
    //   getSingleAuthor(firebaseKey).then((authorObj) => addAuthorForm(authorObj));
    // }

    // // FIXME: ADD CLICK EVENT FOR VIEW AUTHOR DETAILS
    // if (e.target.id.includes('view-author-btn')) {
    //   // console.warn('EDIT vocab', e.target.id);
    //   // console.warn(e.target.id.split('--'));
    //   const [, firebaseKey] = e.target.id.split('--');
    //   getAuthorDetails(firebaseKey).then(viewAuthor);
    // }
  });
};

export default domEvents;
