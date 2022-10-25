import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { occurrenceId } = req.query;

  const {
    cpf_vitima,
    cpf_agressor,
    nome_agressor,
    data_ocorrencia,
    observacao_ocorrencia,
  } = req.body;
  if (req.method === "PUT") {
    await prisma.ocorrencia.update({
      where: {
        id: occurrenceId.toString(),
      },
      data: {
        cpf_vitima,
        cpf_agressor,
        nome_agressor,
        data_ocorrencia: new Date(data_ocorrencia),
        observacao_ocorrencia,
      },
    });
    res.json("updated");
  } else if (req.method === "DELETE") {
    await prisma.ocorrencia.delete({
      where: {
        id: occurrenceId.toString(),
      },
    });
    res.json("deleted");
  }
}
