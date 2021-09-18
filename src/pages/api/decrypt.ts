// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import Cryptr from "cryptr";
const cryptr = new Cryptr('btrsi');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { data } = req.query;

  const decryptedData = cryptr.decrypt(data as string)

  res.status(200).json({ decryptedData })


}
