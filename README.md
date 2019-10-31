                                    Radio Station Project
### Front-End Construction
The front-end for this project is constructed with JavaScript, jQuery, HTML and CSS.

## The link to this deployed project via Netlify https://radio-station.netlify.com/

![Printscreen 1](/images/printscreen1.jpg)

## About the radio:
It's a nice designed animated browser version of the radio station with the range of songs.
You can change the volume and list songs or stop music. 
Lovely animation was implemented into this project: falling and rotating musical notes. 

## Code Snippet:
```
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
```
![Printscreen 2](/images/printscreen2.jpg)