import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";

export default async function createOccurrence(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { doc } = req.body;
  if (req.method === "GET") {
    const docs = await prisma.doc.findUnique({
      where: {
        id: 4,
      },
    });
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=name.Pdf");
    res.send({ docs });
  }
  // console.log(req.body);
  // console.log(doc);
  // console.log(Buffer.from(req.body));
  // res.json(doc);
  if (req.method === "POST") {
    const documento = await prisma.doc.create({
      data: {
        documento: Buffer.from(req.body),
        // documento: documento_ocorrencia,
      },
    });

    res.json(documento);
  }
  // console.log(documento);
}
