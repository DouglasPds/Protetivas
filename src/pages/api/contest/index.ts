import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function createContest(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id_ocorrencia, cpf, nome, contestacao } = req.body;

  if (req.method === "POST") {
    const contestacaoCriada = await prisma.contestacao.create({
      data: {
        id_ocorrencia,
        cpf,
        nome,
        contestacao,
      },
    });

    res.json(contestacaoCriada);
  }
}
