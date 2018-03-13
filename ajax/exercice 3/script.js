$("#bouton").click(function(){
    var ville = $('#city').val();
    $.ajax({
        type:'get',
        url:'https://geo.api.gouv.fr/communes/',
        data : {nom : ville},
        dataType:'json',
        success: function(data){
                $('.resultat').append('<p>Résultats : '+data.length+'</p>')
            for(var i=0 ;i< data.length;i++) {
                $('table').append('<tr><td>'+data[i].nom+'</td><td>'+data[i].codesPostaux+'</td><td>'+data[i].population+'</td><td>'+data[i].codeDepartement+'</td></tr>');

            }
        }
    })
})