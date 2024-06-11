import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

// USING THIS FORM FOR BOTH CREATE AND UPDATE
const addVocabForm = (obj = {}) => {
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
<br>
      <div class="form-group" id="select-category-type">
      <label for="category">Categories</label>
        <select class="form-control" placeholder="Select Category" id="categoryType" name="vocabCategory" value="${obj.categoryType || ''}" required>
        <option value="">Select a Language</option>
          <option value="Python" ${obj.categoryType === 'Python' ? 'selected' : ''}>Python</option>
          <option value="Java" ${obj.categoryType === 'Java' ? 'selected' : ''}>Java</option>
          <option value="Javascript" ${obj.categoryType === 'JavaScript' ? 'selected' : ''}>JavaScript</option>
          <option value="C++" ${obj.categoryType === 'C++' ? 'selected' : ''}>C++</option>
        </select>
      </div>
      <br>  
      <button type="submit" class="btn btn-primary">Submit Vocab
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addVocabForm;
