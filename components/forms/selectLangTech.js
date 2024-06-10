import { getLanguageTech } from '../../api/langTechData';
import renderToDOM from '../../utils/renderToDom';

const selectLanguageTech = (languageTechId) => {
  let domString = `<label for="language-tech">Select a Category</label>
    <select class="form-control" id="select-language-tech" required>
    <option value="">Select a Category</option>`;

  getLanguageTech().then((LanguageTechArray) => {
    LanguageTechArray.forEach((LanguageTech) => {
      domString += `
          <option 
            value="${LanguageTech.firebaseKey}" 
            ${languageTechId === LanguageTech.firebaseKey ? 'selected' : ''}>
              ${LanguageTech.langTech}
          </option>`;
    });

    domString += '</select>';

    renderToDOM('#select-language-tech', domString);
  });
};

export default selectLanguageTech;
