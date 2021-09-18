// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import Cryptr from "cryptr";
import { AppError } from '../../services/error/AppError';
const cryptr = new Cryptr(process.env.CRYPTO_KEY);

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { data } = req.query;

  try {
    const dataIsEmpty = data === '';

    if(dataIsEmpty) {
      throw new AppError('opss, vocẽ esqueceu de digitar os dados para serem codificados!', 400)
    }

    const encryptedData = cryptr.encrypt(data as string)
  
    res.status(200).json({ encryptedData })

  } catch(err) {
    console.log('Erro ->', err)

    if(err.statusCode === 400) {
      res.status(400).json({ 
        message: err.message 
      });

      return
    }

    res.status(500).json({ 
      message: 'opss, ocorreu um erro interno. Por favor, tente mais tarde' 
    })
  }
}
