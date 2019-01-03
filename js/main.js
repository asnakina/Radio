//1. Create a radio object
//2. Give it a property called stations and make the value an array of station objects
//3. Give each station object a property called name and songs. Name should be a string and songs should be an array of song objects
//4. Song objects should have 2 properties: title and artist
//5. Create a method on your radio object that changes the station
//6. When the station is changed pick a song from that station console.log("Now Playing:" + song.title + " by " + song.artist);

var radio = {
  stations: [{
    name: "Rock",
    songs: [{
      title: "I Don't Care",
      artist: "Apocalyptica",
      audio: "audio/I Don't Care.mp3"
    },
    {
      title: "Two Weeks",
      artist: "All That Remains",
      audio: "audio/Two Weeks.mp3"
    }]
  },
  {
    name: "Hip Hop",
    songs: [{
      title: "Iconic",
      artist: "Logic",
      audio: "audio/Iconic.mp3"
    },
    {
      title: "Lucky You",
      artist: "Eminem",
      audio: "audio/Lucky You.mp3"
    }]
  },
  {
    name: "Jazz",
    songs: [{
      title: "Take Five",
      artist: "Dave Brubeck",
      audio: "audio/Take Five.mp3"
    },
    {
      title: "So What",
      artist: "Miles Davis",
      audio: "audio/So What.mp3"
    }]
  }],
  change: function() {
    var randStation = Math.floor(Math.random() * radio.stations.length);
    var randSong = Math.floor(Math.random() * 2);
    var currentStation = radio.stations[randStation];
    $('#audio').attr('src', currentStation.songs[randSong].audio);

    return `Now Playing: ${currentStation.songs[randSong].title} by ${currentStation.songs[randSong].artist}`;
  }
}

// All jQuery code goes in this function
$(document).ready(function() {
  var volume = 1;
  $('#song').html(radio.change()); //Song that displays on load

  let songPlaying = $('#song').html();
  let previousSong;

  // When next is clicked the change function is called and radio displays new song
  $('#next').click(function() {
    $('#play').hide();
    $('#pause').show();

    previousSong = songPlaying;
    $('#song').html(radio.change());
    songPlaying = $('#song').html();
  // This conditional is to prevent a song from repeating
    if(previousSong == songPlaying) {
      songPlaying = $('#song').html(radio.change());
    }
  });

  // Toggles display for play and pause buttons when clicked
  $('.playpause').click(function() {
    $('#play').toggle();
    $('#pause').toggle();
  });

  // When clicked, volume property on the audio changes
  $('#volumeup').click(function() {
    volume += .2;
    $('#audio').prop("volume", volume);
  });

  $('#volumedown').click(function() {
    volume -= .2;
    $('#audio').prop("volume", volume);
  });

});
