// var button1=document.getElementById('button1');
// button1.addEventListener('click',function(){
//   var xhr = new XMLHttpRequest();
//   xhr.open('GET', 'chat.php');
//   xhr.send(null);
//   xhr.addEventListener('readystatechange', function(){
//
//       if(xhr.readyState === XMLHttpRequest.DONE){
//
//           if(xhr.status === 200){
//               document.querySelector('#view').innerHTML = xhr.responseText;
//               self.location.hash='#chat';
//           } else {
//               document.querySelector('#view').innerHTML = 'Erreur de récupération : '+xhr.status;
//           }
//
//       }
//
//   });
// });
//
// var button2=document.getElementById('button2');
// button2.addEventListener('click',function(){
//   var xhr = new XMLHttpRequest();
//   xhr.open('GET', 'chien.php');
//   xhr.send(null);
//   xhr.addEventListener('readystatechange', function(){
//
//       if(xhr.readyState === XMLHttpRequest.DONE){
//
//           if(xhr.status === 200){
//               document.querySelector('#view').innerHTML = xhr.responseText;
//               self.location.hash='#chien';
//           } else {
//               document.querySelector('#view').innerHTML = 'Erreur de récupération : '+xhr.status;
//           }
//
//       }
//
//   });
// });
//
// var button3=document.getElementById('button3');
// button3.addEventListener('click',function(){
//   var xhr = new XMLHttpRequest();
//   xhr.open('GET', 'poisson.php');
//   xhr.send(null);
//   xhr.addEventListener('readystatechange', function(){
//
//       if(xhr.readyState === XMLHttpRequest.DONE){
//
//           if(xhr.status === 200){
//               document.querySelector('#view').innerHTML = xhr.responseText;
//               self.location.hash='#poisson';
//           } else {
//               document.querySelector('#view').innerHTML = 'Erreur de récupération : '+xhr.status;
//           }
//
//       }
//
//   });
// });

//$('selecteur').load('page.php', function(){
// fonction de retour executé uniquement apres chargement complet ajax
// });

//$.get('page.php',function(data){
//  data contiendra le code source de page.php
// }).fail(function(){
// fonction si la requete echoue
// }).always(function(){
//  fonction executée dans tous les cas});

//$.post('page.php',function(data){
//  data contiendra le code source de page.php
// }).fail(function(){
// fonction si la requete echoue
// }).always(function(){
//  fonction executée dans tous les cas});

// $('#button1').click(function(){
//     $('#view').load('chat.php');
// });
//
// $('#button2').click(function(){
//     $('#view').load('chien.php');
// });
//
// $('#button3').click(function(){
//     $('#view').load('poisson.php');
// });



//getscript
//$.getScript('test.js',function(){
//
//});

//getJSON
//$.getJSON('page.json',function(data){
//
// });

$('#button1').click(function () {
    $.get('chat.php',function (data) {
        $('#view').html(data);
    });
});

$('#button2').click(function () {
    $.get('chien.php',function (data) {
        $('#view').html(data);
    });
});

$('#button3').click(function () {
    $.get('poisson.php',function (data) {
        $('#view').html(data);
    });
});