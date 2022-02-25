var $userList = document.querySelector('#user-list');

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';

xhr.addEventListener('load', function () {
  console.log(xhr.status);
  console.log(xhr.response);
  var data = xhr.response;
  for (let i = 0; i < data.length; i++) {
    var $nameNode = document.createElement('li');
    $nameNode.textContent = data[i].name;
    $userList.append($nameNode);
  }
}
);
xhr.send();
