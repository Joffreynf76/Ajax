$('#button').click(function(e){
    e.preventDefault();
    if($('#mail').val().length==0) {
        $('.error1').remove();
        $('.success1').remove();
        $('#mail').css('border', '1px solid red');
        $('#mail1').append('<div class="error1">Email invalide</div>').css('color', 'red').css('margin-top', 0);


    }

    else {
        $('.error1').remove();
        $('.success1').remove();

    }
    if($('#password').val().length==0){
        $('.error2').remove();
        $('.success2').remove();
        $('#password').css('border','1px solid red');
        $('#mdp2').append('<div class="success2">Mot de passe invalide</div>').css('color','red').css('margin-top',0);

    }else {
        $('.error2').remove();
        $('.success2').remove();

    }
    var email= $('#mail').val();
    var mdp = $('#password').val();
    $.ajax({
        type:'post',
        url:'login.php',
        dataType:'json',
        data: {email: email,
                password: mdp},
        success: function (data) {
            if(data.success===true){
                $('.form').hide();
                $('#view').append('Connexion réussi');
            }else {
                $('.error1').remove();
                $('.success1').remove();
                $('#mail').css('border', '1px solid red');
                $('#mail1').append('<div class="error1">Email invalide</div>').css('color', 'red').css('margin-top', 0);
                $('.error2').remove();
                $('.success2').remove();
                $('#password').css('border','1px solid red');
                $('#mdp2').append('<div class="success2">Mot de passe invalide</div>').css('color','red').css('margin-top',0);

            }
        }
    })
})