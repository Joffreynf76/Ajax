var button1=document.getElementById('button1');
button1.addEventListener('click',function(){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'chat.php');
  xhr.send(null);
  xhr.addEventListener('readystatechange', function(){

      if(xhr.readyState === XMLHttpRequest.DONE){

          if(xhr.status === 200){
              document.querySelector('#view').innerHTML = xhr.responseText;
              self.location.hash='#chat';
          } else {
              document.querySelector('#view').innerHTML = 'Erreur de récupération : '+xhr.status;
          }

      }

  });
});

var button2=document.getElementById('button2');
button2.addEventListener('click',function(){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'chien.php');
  xhr.send(null);
  xhr.addEventListener('readystatechange', function(){

      if(xhr.readyState === XMLHttpRequest.DONE){

          if(xhr.status === 200){
              document.querySelector('#view').innerHTML = xhr.responseText;
              self.location.hash='#chien';
          } else {
              document.querySelector('#view').innerHTML = 'Erreur de récupération : '+xhr.status;
          }

      }

  });
});

var button3=document.getElementById('button3');
button3.addEventListener('click',function(){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'poisson.php');
  xhr.send(null);
  xhr.addEventListener('readystatechange', function(){

      if(xhr.readyState === XMLHttpRequest.DONE){

          if(xhr.status === 200){
              document.querySelector('#view').innerHTML = xhr.responseText;
              self.location.hash='#poisson';
          } else {
              document.querySelector('#view').innerHTML = 'Erreur de récupération : '+xhr.status;
          }

      }

  });
});
