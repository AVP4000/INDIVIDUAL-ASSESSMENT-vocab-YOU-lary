import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyVocab = () => {
  const domString = '<h1>No Vocab</h1>';
  renderToDOM('#store', domString);
};

const showVocab = (array) => {
  clearDom();

  //   const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-vocab-btn">Add A vocab</button>';
  //   renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">${item.vocab}</h3>
        <p class="card-text"><bold>${item.categoryType}</bold></p>
        <p class="card-text">${item.definition}</p>
        <hr>
        <i id="edit-vocab-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"> Edit</i>
        <i id="delete-vocab-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"> Delete</i>
      </div>
      <div class="card-footer">Submitted: ${item.timeSubmitted}</div>
    </div>
    `;
  });
  renderToDOM('#store', domString);
};

export { showVocab, emptyVocab };
