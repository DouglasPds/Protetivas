import { GetServerSideProps } from "next";
import Occurrence from "../components/occurrence";
import { prisma } from "../lib/prisma";

export const getServerSideProps: GetServerSideProps = async () => {
  const occurrences = await prisma.ocorrencia.findMany();

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

export default function App({ data }: Occurrences) {
  return (
    <div>
      {data.map((occurrence) => (
        <Occurrence key={occurrence.id} data={occurrence} />
      ))}
    </div>
  );
}
