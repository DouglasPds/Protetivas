import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { prisma } from "../lib/prisma";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  return {
    props: {
      user: {
        id: user.id,
      },
    },
  };
};

export default function Occurrence({ user }) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      cpf_vitima: "",
      cpf_agressor: "",
      nome_agressor: "",
      data_ocorrencia: "",
      observacao_ocorrencia: "",
      // documento_ocorrencia: "",
    },
  });

  const handleAccount = async (data, e) => {
    e.preventDefault();
    data = { user, ...data };

    try {
      await fetch("/api/occurrences/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="w-full bg-white p-10">
        <h1
          tabIndex={0}
          role="heading"
          aria-label="profile information"
          className="focus:outline-none text-3xl font-bold text-gray-800 mt-12"
        >
          Ocorrência
        </h1>

        <form action="" onSubmit={handleSubmit(handleAccount)}>
          <div className="mt-8 md:flex items-center">
            <div className="flex flex-col">
              <label className="mb-3 text-sm leading-none text-gray-800">
                CPF da vítima
              </label>
              <input
                type="text"
                tabIndex={0}
                aria-label="cpf da vitima"
                {...register("cpf_vitima")}
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              />
            </div>
            <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
              <label className="mb-3 text-sm leading-none text-gray-800">
                CPF do agressor
              </label>
              <input
                type="text"
                tabIndex={0}
                aria-label="cpf do agressor"
                {...register("cpf_agressor")}
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              />
            </div>
          </div>
          <div className="mt-12 md:flex items-center">
            <div className="flex flex-col">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Nome do agressor
              </label>
              <input
                type="text"
                tabIndex={0}
                aria-label="nome do agressor"
                {...register("nome_agressor")}
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              />
            </div>
            <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Data da Ocorrência
              </label>
              <input
                type="date"
                tabIndex={0}
                aria-label="data da ocorrencia"
                {...register("data_ocorrencia")}
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              />
            </div>
          </div>
          <div className="mt-12 md:flex items-center">
            <div className="flex flex-col">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Observação da Ocorrência
              </label>
              <textarea
                tabIndex={0}
                aria-label="observacao da ocorrencia"
                {...register("observacao_ocorrencia")}
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              />
            </div>
            <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Documento da Ocorrência
              </label>
              <input
                type="file"
                tabIndex={0}
                aria-label="documento da ocorrencia"
                // {...register("documento_ocorrencia")}
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              />
            </div>
          </div>
          <button
            role="button"
            type="submit"
            aria-label="Next step"
            className="flex items-center justify-center py-4 px-7 focus:outline-none bg-green-500 border rounded border-gray-400 mt-7 md:mt-14 hover:bg-green-600  focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
          >
            <span className="text-sm font-medium text-center text-gray-800 capitalize">
              Cadastrar
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}
