import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Link from "next/link";
import Occurrence from "../components/occurrence";
import { prisma } from "../lib/prisma";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  const occurrences = await prisma.ocorrencia.findMany({
    where: {
      id_user: user.id,
    },
  });

  const data = occurrences.map((occurrence) => {
    return {
      id: occurrence.id,
      cpf_agressor: occurrence.cpf_agressor,
      nome_agressor: occurrence.nome_agressor,
      observacao_ocorrencia: occurrence.observacao_ocorrencia,
      data_ocorrencia: occurrence.data_ocorrencia.toISOString(),
    };
  });

  return {
    props: {
      data,
    },
  };
};

type Occurrences = {
  data: [
    {
      id: string;
      cpf_agressor: string;
      nome_agressor: string;
      data_ocorrencia: string;
      observacao_ocorrencia: string;
    }
  ];
};

export default function MyOccurrences({ data }: Occurrences) {
  return (
    <>
      {data.map((occurrence) => (
        <Link key={occurrence.id} href={`/occurrence/${occurrence.id}`}>
          <div>
            <Occurrence data={occurrence} />
          </div>
        </Link>
      ))}
    </>
  );
}
