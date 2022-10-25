type Occurrence = {
  data: {
    id: string;
    cpf_agressor: string;
    nome_agressor: string;
    data_ocorrencia: string;
    observacao_ocorrencia: string;
  };
};

function convertsData(data: string) {
  const datePart = data.slice(0, 10);
  const dateFormated = datePart.split("-").reverse().join("/");
  return dateFormated;
}

export default function Occurrence({ data }: Occurrence) {
  return (
    <div className="my-0 mx-auto py-8 lg:w-3/4">
      <div className="mb-7 bg-white p-6 shadow rounded">
        <div className="flex items-center border-b border-gray-200 pb-6">
          <div className="flex items-start justify-between w-full">
            <div className="pl-3 w-full">
              <p className="text-xl font-medium leading-5 text-gray-800">
                {data.nome_agressor}
              </p>
              <p className="text-sm leading-normal pt-2 text-gray-500">
                {data.cpf_agressor}
              </p>
            </div>
            <div className="flex flex-col w-full items-end">
              <p className="text-lg font-medium leading-5 text-gray-800">
                Data da ocorrência:
              </p>
              <p className="text-sm leading-normal pt-2 text-gray-500">
                {convertsData(data.data_ocorrencia)}
              </p>
            </div>
          </div>
        </div>
        <div className="px-2">
          <p className="pt-1 text-base font-medium leading-5 text-gray-800">
            Observação da ocorrência:
          </p>
          <p className="text-sm leading-5 py-4 text-gray-600">
            {data.observacao_ocorrencia}
          </p>
        </div>
      </div>
    </div>
  );
}
