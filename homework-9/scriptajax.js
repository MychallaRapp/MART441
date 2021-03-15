$(document).ready(function () {
           $("button").click(function () {
               $("#pokemonInformation").load("data/pokemon.json");
           });
       });
