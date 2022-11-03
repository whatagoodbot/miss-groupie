
# Miss Groupie
A bot designed to work with social listening music platforms. Primarily a chat bot to respond to certain commands and phrases posted by users, with some additional functionality related to the listening of music to enhance your experience and created richer data and statistics.

## How do I contact you to ask questions or make requests?
You can find me on the normal discord servers or in the listening apps (where else did you hear about the bot?). If you can't find me there, this is a good place to track things. Please feel free to raise an [issue](https://github.com/whatagoodbot/miss-groupie/issues/new).
  
## Getting started
**Getting the bot into your room**
Grab the URL for the room that you'd like the bot in and drop me a [message](#How-do-I-contact-you-to-ask-questions-or-make-requests?) with that URL. 

**Once the bot is in your room**
`!help` is your friend and lists the built in commands. You should also look at [aliases](#Seeing-available-aliases).

## Configuration
At the moment, configuration options are limited and cannot be adjusted by users. Currently, only the following can be configured per room;
- [Last FM scrobbling account](#scrobbling)
- Name of Spotify Playlist for [⭐️ _starred_ ⭐️](#Starring) tracks
- Command Identifiers. Miss Groupie will always listen to `!`, but can also listen to other characters of your choosing (if you add a new identifier, you can substitue it everywhere in this document that you see `!`).
If you want to make any changes to these, send me a [message](#How-do-I-contact-you-to-ask-questions-or-make-requests?)
## Features
The current features are listed below. You'll notice a few have a temporary ***[DISABLED]*** flag against them. These are features with current issues that will be resolved shortly and the flag then removed.
### Aliases
Aliases are your own custom commands - Miss Groupie will accept your command and respond with either some text, or an image (flat image or animated gif)

**Seeing available aliases**
To see all available aliases, which include global alises and room specific aliases, use `!aliases`

**Creating an alias**
To add an alias, you need the name for the alias and the reponse to provide, along with specifiying if it is an image or a text response.

To add a text based reponse `!alias {NAME} text {TEXT TO RESPOND WITH}` for example `!alias hi text hello there` will mean anyone entering `!hi` will be met with a response of *"hello there"*

To add an image based reponse `!alias {NAME} image {URL TO IMAGE}` for example `!alias hi image https://media.giphy.com/media/QLKSt3wQqlj7a/giphy.gif` will mean anyone entering `!hi` will be met with a gif of Forest Gump waving.

### Greetings
Miss Groupie will greet you when you join a room. You'll only be greeted once every 10 minutes, so that when you're having systems issues and are frequently disconnecting and reconnecting (bouncing), you won't be greeted over and over.

**User Greeting**
Each user can have their own custom greeting in your room. Miss Groupie stores as many greetings as you like and will pick one at random each time a user joins the room. 
You can have both text and image greetings. If a user has both a text and an image greeting, a random choice of each will be used to gree the joining user.
 
To add a text based greeting `!addusergreeting @{USERNAME} text {TEXT TO GREET WITH}` for example `!addusergreeting @notABluesSinger text Blame him for everything I say` will mean when I join the room, I will be greeted with *"Blame him for everything I say"*

To add an image base greeting `!addusergreeting @{USERNAME} image {URL TO IMAGE}` for example `!addusergreeting @notABluesSinger image https://media.giphy.com/media/xT5LMwPeFtqewwZbWM/giphy.gif` will mean when I join a room everyone will be treated to a gif of Lisa Simpson playing the blues.

**Room Greeting**
You can specify a particular greeting for the room. This will show each and every time a user joins the room as well as their user greeting. This could be useful to let people know the kind of music the room plays or any community rules that are enforced.

To add a text based greeting `!addroomgreeting text {TEXT TO GREET WITH}` for example `!addroomgreeting text Please be nice to cats` will mean when anyone joins the room, after any greeting Miss Groupie will also say *"Please be nice to cats"*

To add an image base greeting `!addroomgreeting image {URL TO IMAGE}` for example `!addroomgreeting image https://media.giphy.com/media/l0MYGb1LuZ3n7dRnO/giphy.gif` will mean after a user is greeted they'll be shown a nice gif of John McClane.

### Image Functions
#### Random Images
There are a number of features that will return a random image - these use 3rd party APIs to get the images.
- `!cat` a random picture of a cat
- `!dog` a random picutre of a dog
- `!fox` yep, you guessed it, a random picture of a fox

#### giphy
`!giphy {search term}` will return whatever giphy comes back with for the search term. For example `!giphy cactus` should give you a normal cactus - but it's giphy, so YMMV.
#### dalle ***[DISABLED]***
*Temporarily disabled due to different clients handling image responses differently.*
Uses [craiyon.com](https://www.craiyon.com/)'s API to send in your text and generates an AI image. This service can take up to 2 minutes to generate your image, so it will return a holding message while the generation takes place.
To use, simply add your query after the command: `!dalle dancing cheese straws` and you'll get some kind of AI driven image of some cheese straws, dancing.

### Jokes
- `!dadjoke` will return a random Dad joke
- `!geekjoke` will return a random Geek based joke

#### Quotes
Random quotes from random people
- `!thedonald` Your favourite POTUS said some classic things - _warning_ they might be odd.
- `!kanye` Also might be weird - but Kanye also has an impressive back catalogue of sayings.

### Language
- `!translate` will try to translate the last message into English
- `!translateto` requireds you to specify the language to translate some English into. For example `!translateto fr good day` will return "Bon jour"
- `!wut` will replay the last message BUT LOUDER
- `!mock` will mock the last message - wHaTeVeR mAtE

### Scrobbling
If configured, your room specific [Last.fm](https://www.last.fm/) account can keep a track of all of the songs played in the room. You'll need to send me a [message](#How-do-I-contact-you-to-ask-questions-or-make-requests?) to get some details setup.

### Track based
Based on the song currently playing, the following features are available.
- `!relink` Can't hear the song playing - `!relink` will check with Spotify which countries the current track is available in and let you know if there are any limitations.
- `!yt` If the current track playing isn't available (or you just want to watch the video of it) `!yt` will give you a link to the track on youtube (with a thumbnail image)
- `!genre` will return the genres that Spotify holds for this track
- `!artist`  ***[DISABLED]*** will provide a small bio about the artist weho performed the track.
- `!album` ***[DISABLED]***  will provide some information about the album the track is from.

### Voting
Not all clients support voting - if the client supports up voting, down voting and starring tracks then these will be stored in the statistics database. 
If you're client doesn't support these features you can manually trigger a vote with the use of emojis.

**Upvote**
While a track is playing simply send a message containing _only_ a 👍

**Downvote**
While a track is playing simply send a message containing _only_ a 👎

**Starring**
While a track is playing simply send a message containing _only_ a ⭐️

### Statistics
A bunch of data gets collected when songs play or users vote - these can be used to view interesting statistics. They can be individual for the user, or grouped for the room.
All of the below options will default to displaying statistics for the current month, but you can also request data for either `lastmonth` or `alltime` - just add that after the command, for example
- `!leaderboard`
- `!leaderboard lastmonth`
- `!leaderboard alltime`
#### Room based
- `!leaderboard` will show a leaderboard of users based on the votes that they have received. Scored as 
	- 2 points for ⭐️
	- 1 point for 👍
	- -1 point for 👎
- `!roomspins` will tell you how many songs have been played for the current month. 
- `!roomdopes` will tell you how many dopes (or 👍) given in the room
- `!roomnopes` will tell you how many nopes (or 👎) given in the room
- `!roomstars` will tell you how many stars (or ⭐️) given in the room
- `!roomfavourite` will tell you which song got the highest score
- `!roomstats` will summarise all of the above into a single message

#### User based
- `!myspins` will tell you how many songs have been played for the current month. 
- `!mydopes` will tell you how many dopes (or 👍) given in the room
- `!mynopes` will tell you how many nopes (or 👎) given in the room
- `!mystars` will tell you how many stars (or ⭐️) given in the room
- `!myfavourite` will tell you which song got the highest score
- `!mystats` will summarise all of the above into a single message

### Quick Themes ***[DISABLED]*** 
Quick themes is a function that will pick a random theme from a database of hundreds and communicate that with the room, with the idea being that people play songs related to the theme. 
Automatically, one user is picked as the first person to start the theme (the leader 🚂) and one is the last person (the caboose 🚃) on which the theme will switch to the next theme. Miss Groupie will take care of DJs leaving and joining and adjust start and end points. 
While a theme is in play, votes will be tracked against the theme and at the end of each theme a winner will be announced for that round.
Miss Groupie will tell you at appropriate times what the curren theme is and who is leader and caboose, as well as the next theme coming up, so that you can prepare your next spin.

To control quick themes, the following commands are available;
- `!start` to begin a quick themes session - this will wait until you've looped back to the chosen leader before begining
- `!stop` will stop a quick themes session - this will stop straight away
- `!current` will confirm the current theme details, leader, caboose and next theme.
- `!skip` will skip the theme that is queued to be next.
