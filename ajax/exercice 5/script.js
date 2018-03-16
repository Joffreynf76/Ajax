function initMap() {

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: {lat: 49.44323199999999, lng: 1.0999709999999823}
    });


    function addMarker(target, title){
        var marker = new google.maps.Marker({
            position: target,
            map: map,
            title: title,
            animation: google.maps.Animation.DROP
        });
    }


    map.addListener('click',function (e) {
        $('#map').after('<div id="overlay">\n' +
            '    <form action="" method="post">\n' +
            '        <input type="text" placeholder="Nom" id="nom" name="title">\n' +
            '        <textarea id="contenu" name="content"></textarea>\n' +
            '        <button id="button">Valider</button>\n' +
            '\n' +   '<button id="annuler">Annuler</button>'+
            '    </form>\n' +
            '</div>');

        $('#annuler').click(function(){
            $('#overlay').remove();
        });

        $('#button').click(function(e2){
            e2.preventDefault();
            addMarker(e.latLng, $('#nom').val());

            $.ajax({
                type:'post',
                url:'marker.php',
                dataType:'json',
                data: {lat: e.latLng.lat().toFixed(6),
                        lng: e.latLng.lng().toFixed(6),
                        title: $('#nom').val(),
                        content: $('#contenu').val()
                },
                success: function (data){
                    alert(data.title);
                }

            })
            $('#overlay').remove();
        })
})

}

