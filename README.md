# Discord-Notify
Discord-Notify - send me a message when my Best Friend Comes online



with this bot you can get a message via Discord webhooks to know your friend is online 

first install dependencies with npm install 


all you have to do is 
in a server that both you and the user you want track is member
Go to Server settings - Widget
enable widget and copy the JSON API 
in index.js replace on 'server Widget JSON API' with the JSON API 

![image](https://user-images.githubusercontent.com/70973049/179100156-4c4a11e9-6bcf-4a72-a429-349092b61f79.png)


after that 
select a text channel to get the messages
right click on the channel and click edit channel 
integration - Webhooks 
clock New Webhook and Copy Webhook URL 
replace the webhook_id and webhook_token with the info you get in the URL 
Like this 


![image](https://user-images.githubusercontent.com/70973049/179100809-24635f18-b646-4792-86b7-03b6086dd39f.png)




and thats Done  

You can use PM2 to run index.js 
or simple node index.js
