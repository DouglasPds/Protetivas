import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";

export default async function createAccount(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { nome, cpf, email, telefone, cep, cidade } = req.body;
  const pessoa = await prisma.pessoa.create({
    data: {
      nome,
      cpf: parseInt(cpf),
      email,
      telefone: parseInt(telefone),
      cep: parseInt(cep),
      cidade,
    },
  });
  res.json(pessoa);
}
