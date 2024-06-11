import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';
import selectLanguageTech from './selectLangTech';

// USING THIS FORM FOR BOTH CREATE AND UPDATE
const addVocabForm = (user, obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab'}" class="mb-4">
      <div class="form-group">
        <label for="vocab">Vocab</label>
        <input type="text" class="form-control" id="vocab" aria-describedby="vocabname" placeholder="Enter Some Knowledge" value="${obj.vocab || ''}" required>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea class="form-control" placeholder="Description" id="description" style="height: 100px">${obj.description || ''}</textarea>
      </div>
      <div class="form-group">
        <label for="categoryType">Language/Tech</label>
        <textarea class="form-control" placeholder="Category" id="categoryType" style="height: 100px">${obj.categoryType || ''}</textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit Vocab
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
  selectLanguageTech(user, `${obj || ''}`);
};

export default addVocabForm;
