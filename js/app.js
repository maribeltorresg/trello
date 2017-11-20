window.addEventListener('load', function() {
  var data = [];

  var lists = document.getElementById('lists');
  var listAdd = document.getElementById('list-add');
  var listAddPlaceholder = document.getElementById('list-add-placeholder');
  var listAddInput = document.getElementById('list-add-input');
  var listAddSave = document.getElementById('list-add-save');

  function saveList(title) {
    data.push({
      title: title,
      cards: []
    });
    drawLists();
  }

  function drawLists() {
    lists.textContent = '';
    for (var i = 0; i < data.length; i++) {
      var list = createElement('div', 'list');
      var listTitle = createElement('div', 'list-title', data[i].title);
      var cards = createElement('div', 'cards');
      var cardAdd = createElement('div', 'card-add', 'Add a card...');
      cardAdd.addEventListener('click', function() {
        console.log('adding card');
      });
      list.appendChild(listTitle);
      list.appendChild(cards);
      list.appendChild(cardAdd);
      lists.appendChild(list);
    }
  }

  function createElement(tagName, className, textContent, innerHtml) {
    var element = document.createElement(tagName);
    if (className) {
      element.className = className;
    }
    if (textContent) {
      element.textContent = textContent;
    }
    if (innerHtml) {
      element.innerHtml = innerHtml;
    }

    return element;
  }

  listAddPlaceholder.addEventListener('click', function() {
    listAdd.classList.remove('inactive');
  });

  listAddSave.addEventListener('click', function() {
    saveList(listAddInput.value);
    listAdd.classList.add('inactive');
  });

})