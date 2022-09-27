import { useForm } from "react-hook-form";
import Header from "../components/header";

export default function Account() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      nome: "",
      cpf: "",
      email: "",
      telefone: "",
      cep: "",
      cidade: "",
    },
  });

  const handleAccount = async (data, e) => {
    e.preventDefault();
    try {
      await fetch("/api/account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
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
                  type="number"
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
                  className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                />
              </div>
              <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                <label className="mb-3 text-sm leading-none text-gray-800">
                  Telefone
                </label>
                <input
                  type="number"
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
                  type="number"
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
    </div>
  );
}
