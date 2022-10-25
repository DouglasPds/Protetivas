import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { userId } = req.query;

  const { name, cpf, telefone, cep, cidade } = req.body;
  if (req.method === "PUT") {
    await prisma.user.update({
      where: {
        id: userId.toString(),
      },
      data: {
        name,
        cpf,
        telefone,
        cep,
        cidade,
      },
    });
    res.json("updated");
  } else if (req.method === "DELETE") {
    await prisma.user.delete({
      where: {
        id: userId.toString(),
      },
    });
    res.json("deleted");
  }
}
