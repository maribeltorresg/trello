window.addEventListener('load', function() {
  var listAdd = document.getElementById('list-add');
  var listAddPlaceholder = document.getElementById('list-add-placeholder');

  listAddPlaceholder.addEventListener('click', function() {
    listAdd.classList.remove('inactive');
  })
})