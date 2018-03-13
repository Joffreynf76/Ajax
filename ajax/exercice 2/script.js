// $('#name').click(function(){
//     $.getJSON('test.json',function(data){
//         $("#nom").html(data.name);
//         $(".age").html(data.age);
// })
// })

//$.ajax

//$.ajax({
// type:'get',...,
// url:'exemple.php',
// dataType:'html','json',...,
// data:{
//      name:'jean'},
// timeout: 4000,
// success: function(data){
//      },
// error: function(){
//  },
// beforeSend: function(){
//  },
// complete: function(){
//  },
// statusCode:{
// 404:function(){}
// }
// })
$('#name').click(function(){
    $.ajax({
        type:'get',
        url: 'test.json',
        dataType:'json',
        success: function(data){
            $("#nom").html(data.name);
            $(".age").html(data.age);
        }

    })
})