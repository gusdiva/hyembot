module.exports = {
  Admins: ["UserID", "UserID"], //Admins of the bot
  ExpressServer: true, //If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || ">", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://www.youtube.com/channel/UCHU-w8K1fMx9fb2vIFbHf7A", //Support Server Link
  Token: process.env.Token || "", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  ServerDeafen: true, //If you want bot to stay deafened
  DefaultVolume: 100, //Sets the default volume of the bot, You can change this number anywhere from 1 to 100
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Hyemhyemu is cute", //A Secret like a password
  IconURL:
    "https://media.giphy.com/media/dMH5v2ol3eMfkj90kw/giphy.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "#db706c", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
  Permissions: 2205281600, //Bot Inviting Permissions
  Website: process.env.Website || "", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku
  
  Presence: {
    status: "idle", // You can show online, idle, and dnd
    name: "Hyemhyemu", // The message shown
    type: "WATCHING", // PLAYING, WATCHING, LISTENING, STREAMING
  },

  //Lavalink
  Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80, // The port that lavalink is listening to. This must be a number!
    pass: "anything as password",
    secure: false, // Set this to true if the lavalink uses SSL or you're hosting lavalink on repl.it
  },

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "", //Spotify Client Secret
  },
};
