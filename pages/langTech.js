import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';
import '@fortawesome/fontawesome-free';

const emptyLanguageTech = () => {
  const domString = '<h1>No LanguageTech</h1>';
  renderToDOM('#store', domString);
};

const showLanguageTech = (array) => {
  clearDom();

  //   const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-author-btn">Add An Author</button>';

  //   renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.langTech}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${item.categoryType}</h6>
        <p class="card-text>${item.trending ? '<span class="badge badge-info fave-badge"><i class="fa fa-heart" aria-hidden="true"></span></i> ' : ''}</p>
        <hr>
        <i class="btn btn-success fas fa-eye" id="view-languagetech-btn--${item.firebaseKey}"></i>
        <i class="fas fa-edit btn btn-info" id="update-languagetech--${item.firebaseKey}"></i>
        <i class="btn btn-danger fas fa-trash-alt" id="delete-languagetech-btn--${item.firebaseKey}"></i>
      </div>
    </div>
    `;
  });
  renderToDOM('#store', domString);
};

export { showLanguageTech, emptyLanguageTech };
