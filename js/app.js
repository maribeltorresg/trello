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
      // version 3
      var cardAdd = createElement('div', 'card-add inactive');
      var cardAddPlaceholder = createElement('span', 'card-add-placeholder', 'Add a card...');
      var cardAddTextarea = createElement('textarea', 'card-add-textarea');
      var cardAddSave = createElement('div', 'button button-done', 'Save');
      var cardAddCancel = createElement('div', 'button', null, 'span class="fa fa-close"></span>');

      cardAddPlaceholder.addEventListener('click', function() {
        cardAdd.classList.remove('inactive');
      });
      
      cardAddCancel.addEventListener('click', function() {
        cardAdd.classList.add('inactive');
      });

      cardAdd.appendChild(cardAddPlaceholder);
      cardAdd.appendChild(cardAddTextarea);
      cardAdd.appendChild(cardAddSave);
      cardAdd.appendChild(cardAddCancel);
      // fin version 3

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