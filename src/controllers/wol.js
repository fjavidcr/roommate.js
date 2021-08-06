import { NAS_MAC } from '../settings';
import { wakeOnLanWithMAC } from '../middleware';

export const wakeOnLan = async (req, res) => {
  const response = await wakeOnLanWithMAC(NAS_MAC);
  console.log(response);
  return res.status(200).json(response);
}