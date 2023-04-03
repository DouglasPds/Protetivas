import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

export default function Contest() {
  const router = useRouter();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      cpf: "",
      nome: "",
      contestacao: "",
    },
  });

  const handleContest = async (data, e) => {
    e.preventDefault();
    const id_ocorrencia = localStorage.getItem("id_occurrence");
    data = { id_ocorrencia, ...data };

    try {
      await fetch("/api/contest/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      await router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const updateContestCount = () => {
    localStorage.setItem("numberOfContests", "1");
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
          Contestar Ocorrência
        </h1>

        <form action="" onSubmit={handleSubmit(handleContest)}>
          <div className="mt-8 md:flex items-center">
            <div className="flex flex-col">
              <label className="mb-3 text-sm leading-none text-gray-800">
                CPF
              </label>
              <input
                type="text"
                tabIndex={0}
                aria-label="cpf"
                {...register("cpf", {
                  required: true,
                  maxLength: 14,
                  pattern: /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}))$/,
                  setValueAs: (value) =>
                    value.replace(
                      /^(\d{3})\D*(\d{3})\D*(\d{3})\D*(\d{2})$/g,
                      "$1.$2.$3-$4"
                    ),
                })}
                required
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              />
            </div>
            <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
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
          </div>
          <div className="mt-12 md:flex items-center">
            <div className="flex flex-col">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Motivo da Contestação
              </label>
              <textarea
                tabIndex={0}
                aria-label="contestacao"
                {...register("contestacao")}
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              />
            </div>
          </div>
          <button
            role="button"
            type="submit"
            onClick={updateContestCount}
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
