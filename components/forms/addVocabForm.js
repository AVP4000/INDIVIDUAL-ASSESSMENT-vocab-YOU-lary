import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

// USING THIS FORM FOR BOTH CREATE AND UPDATE
const addVocabForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab'}" class="mb-4">
      <div class="form-group">
        <label for="vocab">Vocab</label>
        <input type="text" class="form-control" id="title" aria-describedby="vocabname" placeholder="Enter Some Knowledge" value="${obj.vocab || ''}" required>
      </div>
      <div class="form-group">
      <label for="image">Image URL</label>
      <input type="url" class="form-control" id="image" placeholder="Image URL" value="${obj.image || ''}" required>
    </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea class="form-control" placeholder="Description" id="description" style="height: 100px">${obj.description || ''}</textarea>
      </div>
      <div class="form-group">
        <label for="categoryType">Language/Tech</label>
        <textarea class="form-control" placeholder="Category" id="categoryType" style="height: 100px">${obj.langTechId || ''}</textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit Vocab
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addVocabForm;
