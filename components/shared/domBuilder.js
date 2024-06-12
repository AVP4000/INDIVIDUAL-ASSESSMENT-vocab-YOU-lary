import renderToDOM from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container">
  <div id="all-btns">
  <button type="button" class="btn btn-success" id="java-btn">JAVA</button>
  <button type="button" class="btn btn-success" id="javascript-btn">JavaScript</button>
  <button type="button" class="btn btn-success" id="python-btn">Python</button>
  <button type="button" class="btn btn-success" id="cplus-btn">C++</button>
  </div>
    <div id="add-button"></div>
    <div id="form-container"></div>
    <div id="store"></div>
    <div id="view"></div>
  </div>`;

  renderToDOM('#app', domString);
};

export default domBuilder;
