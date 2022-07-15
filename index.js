const fetch = require("node-fetch");
const { MessageEmbed, WebhookClient } = require("discord.js");
const { time } = require("console");
const webhookClient = new WebhookClient({
  id: "webhook_id",
  token: "webhook_token",
});
const embed = new MessageEmbed().setTitle("Lawa").setColor("#faa81a");
const getData = async () => {
  const fetchedData = await fetch("server Widget JSON API");
  const data = await fetchedData.json();
  return data;
};
//its just check every one minute -- discord json API have delay of 5 minutes
// but you can change it to any time you want (in miliseconds) to check
const track_time = 60000;
// change target_username to your username or anyone you wanna track
// the user should be in the server you get the widget and have permission to see the channel of weidget
const target_username = "Lawa";
let color_status = "#0099ff";
var current = new Date();
var idk = "idk";
function Track() {
  getData().then((data) => {
    const Lawa = data.members.find(
      (member) => member.username === target_username
    );
    if (Lawa) {
      if (Lawa.status === "online") {
        color_status = "#3ba55d";
      }
      if (Lawa.status === "idle") {
        color_status = "#faa81a";
      }
      if (Lawa.status === "dnd") {
        color_status = "#ed4245";
      }
      if (Lawa.status === "offline") {
        color_status = "#000000";
      }
      if (idk === "idk") {
        console.log(
          `${current.toLocaleTimeString()} >>  ${target_username} is ${
            Lawa.status
          } now `
        );

        webhookClient.send({
          username: Lawa.username,
          avatarURL: Lawa.avatar_url,
          embeds: [
            embed
              .setTitle(Lawa.username + " is " + Lawa.status)
              .setColor(color_status)
              .setFields([
                {
                  name: "is Playing",
                  value: Lawa.game ? Lawa.game.name : "N/A",
                  inline: true,
                },
              ])
              .setFooter({
                text: new Date().toLocaleTimeString(),
              })
              .setThumbnail(Lawa.avatar_url)
              .setTimestamp(),
          ],
        });
      }
    } else {
      console.log(
        new Date().toLocaleTimeString() +
          " << " +
          " Checked " +
          " >> " +
          " Not Online"
      );
    }
  });
  setTimeout(Track, track_time);
}
setTimeout(Track, track_time);
