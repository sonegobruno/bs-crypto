// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import Cryptr from "cryptr";
const cryptr = new Cryptr(process.env.CRYPTO_KEY);

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { data } = req.query;

  try {
    const decryptedData = cryptr.decrypt(data as string)

    res.status(200).json({ decryptedData })
  } catch(err) {
    console.log('Erro -> ', err)

    res.status(400).json({ 
      message: 'opss, ocorreu um erro ao decodificar seus dados. Por favor, verifique se digitou corretamente a chave.' 
    })
  }
}
