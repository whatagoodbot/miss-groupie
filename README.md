
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
- Command Identifiers. Miss Groupie will always listen to `!` and `/`, but can also listen to other characters of your choosing (if you add a new identifier, you can substitue it everywhere in this document that you see `!`).
If you want to make any changes to these, send me a [message](#How-do-I-contact-you-to-ask-questions-or-make-requests?)
## Features
The current features are listed below. You'll notice a few have a temporary ***[DISABLED]*** flag against them. These are features with current issues that will be resolved shortly and the flag then removed.

### Room Helpers
- `!lastfm` will give users a link to the rooms last.fm account, if configured
- `!playlist` will ink people off to the [⭐️ _starred_ ⭐️](#Starring) playlist, if configured

### Aliases
Aliases are your own custom commands - Miss Groupie will accept your command and respond with either some text, or an image (flat image or animated gif)

**Seeing available aliases**

To see all available aliases, which include global alises and room specific aliases, use `!aliases`

**Creating an alias**

To add an alias, you need the name for the alias and the reponse to provide.

To add a text based reponse `!alias {NAME} {TEXT TO RESPOND WITH}` for example `!alias hi hello there` will mean anyone entering `!hi` will be met with a response of *"hello there"*

To add an image based reponse `!alias {NAME} {URL TO IMAGE}` for example `!alias hi https://media.giphy.com/media/QLKSt3wQqlj7a/giphy.gif` will mean anyone entering `!hi` will be met with a gif of Forest Gump waving.

You can combine text and images using `!alias {NAME} {TEXT TO RESPOND WITH} {URL TO IMAGE}` for example `!alias hi hello there https://media.giphy.com/media/QLKSt3wQqlj7a/giphy.gif` will mean anyone entering `!hi` will be met with a message saying "hello there" and a gif of Forest Gump waving.

**Clearing an alias**

If you need to clear down all responses against an alias you can use `!deletealias {NAME}` for example `!deletealias hi` will remove all of the `!hi` aliases, created in the above example.

### Greetings
Miss Groupie will greet you when you join a room. You'll only be greeted once every 10 minutes, so that when you're having systems issues and are frequently disconnecting and reconnecting (bouncing), you won't be greeted over and over.

**User Greeting**

Each user can have their own custom greeting in your room. Miss Groupie stores as many greetings as you like and will pick one at random each time a user joins the room. 
You can have both text and image greetings. If a user has both a text and an image greeting, a random choice of each will be used to greet the joining user.

**_YOU CAN ONLY ADD GREETINGS FOR YOURSELF_**
 
To add a text based greeting `!addusergreeting {TEXT TO GREET WITH}` for example `!addusergreeting Blame him for everything I say` will mean when I join the room, I will be greeted with *"Blame him for everything I say"*

To add an image base greeting `!addusergreeting {URL TO IMAGE}` for example `!addusergreeting https://media.giphy.com/media/xT5LMwPeFtqewwZbWM/giphy.gif` will mean when I join a room everyone will be treated to a gif of Lisa Simpson playing the blues.

You can combine text and images using `!addusergreeting {TEXT TO GREET WITH} {URL TO IMAGE}` for example `!addusergreeting Blame him for everything I say https://media.giphy.com/media/xT5LMwPeFtqewwZbWM/giphy.gif` will mean when I join a room I will be greeted with *"Blame him for everything I say"* and everyone will be treated to a gif of Lisa Simpson playing the blues.

**Clearing a user greeting**

If you need to clear down all greetings for yourself you can use `!deleteusergreetings` for example `!deleteusergreetings` will remove all user greetings for my user.

**Room Greeting**

You can specify a particular greeting for the room. This will show each and every time a user joins the room as well as their user greeting. This could be useful to let people know the kind of music the room plays or any community rules that are enforced.

To add a text based greeting `!addroomgreeting {TEXT TO GREET WITH}` for example `!addroomgreeting Please be nice to cats` will mean when anyone joins the room, after any greeting Miss Groupie will also say *"Please be nice to cats"*

To add an image base greeting `!addroomgreeting {URL TO IMAGE}` for example `!addroomgreeting Please be nice to cats https://media.giphy.com/media/l0MYGb1LuZ3n7dRnO/giphy.gif` will mean after a user is greeted they'll be shown a nice gif of John McClane.

You can combine text and images using `!addroomgreeting {TEXT TO GREET WITH} {URL TO IMAGE}` for example `!addroomgreeting https://media.giphy.com/media/l0MYGb1LuZ3n7dRnO/giphy.gif` will mean after a user is greeted they'll be shown a message saying  *"Please be nice to cats"* as well as a nice gif of John McClane.

**Clearing room greetings**

Some rooms use room greetings to inform of time based events - so collecting a bunch of greetings to show randomly isn't helpful. If you need to clear down all room greetings you can use `!deleteroomgreetings` and all greetings will be deleted.

### Image Functions
#### Random Images
There are a number of features that will return a random image - these use 3rd party APIs to get the images.
- `!cat` a random picture of a cat
- `!dog` a random picutre of a dog
- `!fox` yep, you guessed it, a random picture of a fox

#### giphy
`!giphy {search term}` will return whatever giphy comes back with for the search term. For example `!giphy cactus` should give you a normal cactus - but it's giphy, so YMMV.

#### dalle
Uses [craiyon.com](https://www.craiyon.com/)'s API to send in your text and generates an AI image. This service can take up to 2 minutes to generate your image, so it will return a holding message while the generation takes place.
To use, simply add your query after the command: `!dalle dancing cheese straws` and you'll get some kind of AI driven image of some cheese straws, dancing.

#### inspiro bot
`!inspire` will show you a unique inspirational quote & accompanying image

### Jokes
- `!dadjoke` will return a random Dad joke
- `!geekjoke` will return a random Geek based joke

#### Quotes
Random quotes from random people
- `!thedonald` Your favourite POTUS said some classic things - _warning_ they might be odd.
- **[DISABLED]** `!kanye` Also might be weird - but Kanye also has an impressive back catalogue of sayings.

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
- `!artist` will provide a small bio about the artist weho performed the track.
- `!album` ***[DISABLED]***  will provide some information about the album the track is from.

### Voting
Not all clients support voting - if the client supports up voting, down voting and starring tracks then these will be stored in the statistics database. 
If you're client doesn't support these features you can manually trigger a vote with the use of emojis.

**Upvote**

Native voting is supported in all clients that provide it. For those that don't you can simply send a message containing _only_ a 👍 while a track is playing 

**Downvote**

Native voting is supported in all clients that provide it. For those that don't you can simply send a message containing _only_ a 👎 while a track is playing 

**Starring**

Native voting is supported in all clients that provide it. For those that don't you can simply send a message containing _only_ a ⭐️ (also supports 🌟 & * - just the asterix above the 8 key)
 while a track is playing 

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
- `!roommostpopular` will tell you which song got the highest score
- `!roomstats` will summarise all of the above into a single message

#### User based
- `!myspins` will tell you how many songs have been played for the current month. 
- `!mydopes` will tell you how many dopes (or 👍) given in the room
- `!mynopes` will tell you how many nopes (or 👎) given in the room
- `!mystars` will tell you how many stars (or ⭐️) given in the room
- `!mymostpopular` will tell you which song got the highest score
- `!mystats` will summarise all of the above into a single message
- `!myscore` will give you your score in case you don't show up on the leaderboard - so that you know how far of the top 5 you are

#### Track based
 - `!first` will tell you when and who played the track first (only across rooms the bot is in, which is about 20 rooms)
 - `!roomfirst` will tell you when and who played the track first in the current room

### Quick Themes 
Quick themes is a function that will pick a random theme from a database of hundreds and communicate that with the room, with the idea being that people play songs related to the theme. 
Automatically, one user is picked as the first person to start the theme (the leader 🚂) and one is the last person (the caboose 🚃) on which the theme will switch to the next theme. Miss Groupie will take care of DJs leaving and joining and adjust start and end points. 
While a theme is in play, votes will be tracked against the theme and at the end of each theme a winner will be announced for that round.
Miss Groupie will tell you at appropriate times what the curren theme is and who is leader and caboose, as well as the next theme coming up, so that you can prepare your next spin.

To control quick themes, the following commands are available;
- `!qt start` to begin a quick themes session - this will wait until you've looped back to the chosen leader before begining
- `!qt stop` will stop a quick themes session - this will stop straight away
- `!qt current` will confirm the current theme details, leader, caboose and next theme.
- `!qt skip` will skip the theme that is queued to be next.
- `!qt leaderboard` will give you a leaderbaord, up to 5 DJs for the quick themes session
- `!qt currentleaderboard` will show a leaderboard, up to 5 DJs for the quick theme in play

### Compliments
Thanks to [@nicolabosco87](https://github.com/nicolabosco87) for this feature.
Why not make another listener feel good about themselves - send them a random compliment using `!compliment @{USERNAME}`. e.g. `!compliment @{notABluesSinger}` will be kind to me :)

### Dice
Thanks to [@nicolabosco87](https://github.com/nicolabosco87) for this feature.
Need a dice rolled - use `!dice`. You can also specify the number of dice and largest number on each using `!dice 1d10`, where 1 is the number of dice and 10 is the largest number.

### Magic 8 Ball
Thanks to [@nicolabosco87](https://github.com/nicolabosco87) for this feature.
Need to ask a magic 8 ball a question - `!magic8ball {QUESTION}` will help you out. e.g. `!magic8ball is groupie a good robot?`

### Simple text based responses
- `!corporatebs` will return you the perfect corporate BS talk
- `!fact` will give you a random fact
- `!fortune` will show you a random fortune - like from a fortune cookie
- `!meowfact` give you a fact about cats
- `!thatreally` gives you a random variation on the phrase "that really grinds my gears"

### Urban Dictionary
Thanks to [@nicolabosco87](https://github.com/nicolabosco87) for this feature.
Not sure what a phrase means - look it up on the urba dictionary using `!urban {PHRASE}`, e.g. `!urban rock` and you can learn about rock, paper, scissors

### Zen
Thanks to [@nicolabosco87](https://github.com/nicolabosco87) for this feature.
Do you need some inspiration and a bit of zen? `!zen` will get you an inspirational quote from an infuential figures from history.
