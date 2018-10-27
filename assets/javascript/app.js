$(document).ready(function () {


  var topics = ["Halo", "pokemon", "call of duty", "zelda", "portal", "castle crashers", "rainbow six siege", "super smash bros", "hearthstone"];


  for (i = 0; i < topics.length; i++) {
    $("#buttons").append($("<button>", { id: "gamebuttons", class: "btn btn-dark" }).text(topics[i].toLowerCase()))
  }

  $("#searchGifs").click(function () {
    var input = $("#searchText").val().toLowerCase();
    console.log(input)
    if (input === "") {
      alert("Please enter a Video Game");
      return
    }

    if (topics.indexOf(input) !== -1) {

      alert("There's already a GIPHY button for " + input);
      return
    }

    console.log(input);
    topics.push(input);
    $("#buttons").append($("<button>", { class: "btn btn-dark" }).text(topics[topics.length - 1])); 
  });

  $("#searchText").keyup(function (event) { 
    console.log(event);
    if (event.keyCode === 13) {
      $("#searchGifs").click()
    }
  });



  $(document).on("click", ".btn-dark", function () {
    $("#gifsDisplay").empty()
    inputSearch = this.textContent;
    console.log(inputSearch);
    var apiKey = "Hv8i0h2SNO7gK9IEt8XYsVG9SWZj7Zdv";
    var queryurl = "https://api.giphy.com/v1/gifs/search?q=" + inputSearch + "&api_key=" + apiKey + "&limit=12"
    $.ajax({
      url: queryurl,
      method: "GET"
    }).then(function (response) {
      var gifs = response.data

      for (i in gifs) {
        $("#gifsDisplay").append("<img src='" + gifs[i].images.original.url + "' style='height:250px; width: 250px;'>")
      }
    });
  })
});




