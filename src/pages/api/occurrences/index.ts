import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function createOccurrence(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    cpf_vitima,
    cpf_agressor,
    nome_agressor,
    data_ocorrencia,
    observacao_ocorrencia,
    user,
    // documento_ocorrencia,
  } = req.body;
  // const formData = new FormData();
  if (req.method === "POST") {
    const ocorrencia = await prisma.ocorrencia.create({
      data: {
        id_user: user.id,
        cpf_vitima,
        cpf_agressor,
        nome_agressor,
        data_ocorrencia: new Date(data_ocorrencia),
        observacao_ocorrencia,
        // documento_ocorrencia: Buffer.from(documento_ocorrencia[0]),
        // documento_ocorrencia: Buffer.from([documento_ocorrencia]),
      },
    });

    res.json(ocorrencia);
  } else if (req.method === "GET") {
  }
}

// const { documento_ocorrencia } = req.body;
// const documento = await prisma.doc.create({
//   data: {
//     documento: Buffer.from(documento_ocorrencia),
//     // documento: documento_ocorrencia,
//   },
// });
// res.json(documento);
