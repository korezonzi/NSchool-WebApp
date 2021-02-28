'use strict';
module.exports = robot => {
   //HubotのAPI利用
  robot.hear(/hello>/i, msg => {
    const user_id = msg.message.user.id;
    msg.send(`Hello, <@${user_id}>`);
  });
};
