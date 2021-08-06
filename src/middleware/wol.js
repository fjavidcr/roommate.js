const wol = require('../lib/wake-on-lan');

export const wakeOnLanWithMAC = async (mac) => {
  let response = {};
  await wol.wake(mac, (err) => {
    if (err) throw err;
    response.message = `send magic packet to ${mac} success .`;
  }).then((result => {
    response.result = result
  }));
  return response;
};
