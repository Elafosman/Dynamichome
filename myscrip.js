document.getElementById('btn').addEventListener('click', (event) => {
  let element_list = document.getElementById('list');
  let new_li = document.createElement('li');
  new_li.innerText = 'best time between Dec-Jan';

  element_list.appendChild(new_li);

});