<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Geo api</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="main">

    <input type="text" name="ville" id="city">

    <button id="bouton">Valider</button>
    <div class="resultat"></div>
    <div class="tab">

        <table>
            <thead><tr><th>Nom</th><th>Codes postaux</th><th>Population</th><th>Département</th></tr></thead>

        </table>
    </div>

</div>
<script
    src="https://code.jquery.com/jquery-3.3.1.min.js"
    integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
    crossorigin="anonymous"></script>
<script src="script.js"></script>
</body>
</html>