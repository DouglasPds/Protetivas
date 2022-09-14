import Header from "../components/header";

export default function Account() {
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

          <div className="mt-8 md:flex items-center">
            <div className="flex flex-col">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Nome
              </label>
              <input
                type="name"
                tabIndex={0}
                aria-label="nome"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              />
            </div>
            <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
              <label className="mb-3 text-sm leading-none text-gray-800">
                CPF
              </label>
              <input
                type="name"
                tabIndex={0}
                aria-label="cpf"
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
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              />
            </div>
            <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Telefone
              </label>
              <input
                type="name"
                tabIndex={0}
                aria-label="telefone"
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
                type="name"
                tabIndex={0}
                aria-label="cep"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              />
            </div>
            <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Cidade
              </label>
              <input
                type="name"
                tabIndex={0}
                aria-label="cidade"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              />
            </div>
          </div>
          <button
            role="button"
            aria-label="Next step"
            className="flex items-center justify-center py-4 px-7 focus:outline-none bg-white border rounded border-gray-400 mt-7 md:mt-14 hover:bg-gray-100  focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
          >
            <span className="text-sm font-medium text-center text-gray-800 capitalize">
              Cadastrar
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
