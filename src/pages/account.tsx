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
        name: user.name,
        cpf: user.cpf,
        email: user.email,
        telefone: user.telefone,
        cep: user.cep,
        cidade: user.cidade,
        id: user.id,
      },
    },
  };
};

export default function Account({ user }) {
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      nome: "",
      cpf: "",
      email: "",
      telefone: "",
      cep: "",
      cidade: "",
    },
  });

  if (user) {
    setValue("cep", user.cep);
    setValue("cidade", user.cidade);
    setValue("cpf", user.cpf);
    setValue("email", user.email);
    setValue("nome", user.name);
    setValue("telefone", user.telefone);
  }

  const handleAccount = async (data, e) => {
    e.preventDefault();
    try {
      await fetch(`/api/users/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAccount = async () => {
    try {
      await fetch(`/api/users/${user.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
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
          Informações do Perfil
        </h1>

        <form action="" onSubmit={handleSubmit(handleAccount)}>
          <div className="mt-8 md:flex items-center">
            <div className="flex flex-col">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Nome
              </label>
              <input
                type="text"
                tabIndex={0}
                aria-label="nome"
                {...register("nome")}
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              />
            </div>
            <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
              <label className="mb-3 text-sm leading-none text-gray-800">
                CPF
              </label>
              <input
                type="text"
                tabIndex={0}
                aria-label="cpf"
                {...register("cpf")}
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              />
            </div>
          </div>
          <div className="mt-12 md:flex items-center">
            <div className="flex flex-col">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Email
              </label>
              <input
                type="email"
                tabIndex={0}
                aria-label="email"
                {...register("email")}
                disabled
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              />
            </div>
            <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Telefone
              </label>
              <input
                type="text"
                tabIndex={0}
                aria-label="telefone"
                {...register("telefone")}
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              />
            </div>
          </div>
          <div className="mt-12 md:flex items-center">
            <div className="flex flex-col">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Cep
              </label>
              <input
                type="text"
                tabIndex={0}
                aria-label="cep"
                {...register("cep")}
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              />
            </div>
            <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Cidade
              </label>
              <input
                type="text"
                tabIndex={0}
                aria-label="cidade"
                {...register("cidade")}
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              />
            </div>
          </div>
          <div className="flex">
            <button
              role="button"
              type="submit"
              aria-label="Next step"
              className="flex items-center justify-center mr-10 py-4 px-7 focus:outline-none bg-green-500 border rounded border-gray-400 mt-7 md:mt-14 hover:bg-green-600  focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
            >
              <span className="text-sm font-medium text-center text-gray-800 capitalize">
                Atualizar
              </span>
            </button>

            <button
              role="button"
              type="button"
              aria-label="Next step"
              onClick={deleteAccount}
              className="flex items-center justify-center py-4 px-7 focus:outline-none bg-red-500 border rounded mt-7 md:mt-14 hover:bg-red-600  focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
            >
              <span className="text-sm font-medium text-center text-gray-800 capitalize">
                Deletar
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
