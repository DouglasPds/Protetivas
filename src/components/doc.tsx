import { useForm } from "react-hook-form";

export default function Doc({ docs = {} }) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      doc: "",
    },
  });

  // console.log("doc", docs);

  const handleAccount = async (data, e) => {
    e.preventDefault();
    let binaryDoc;
    // console.log("binary", binaryDoc);
    // console.log("aaaaaaaa");

    console.log("docccc", data.doc[0]);
    // console.log("docccc", data.doc[0].size);
    // const reader = new FileReader();
    // reader.onload = (readerEvt) => {
    //   let binaryString = readerEvt.target.result;
    //   binaryDoc = binaryString;
    // };
    // console.log("binary", binaryDoc);

    // const formData = new FormData();
    // formData.append("doc", data.doc[0]);

    try {
      await fetch("/api/doc", {
        method: "POST",
        headers: {
          // "Content-Type": "application/json",
          "Content-Type": "application/pdf",
          // "Content-Type": "multipart/form-data",
        },
        body: data.doc[0],
      });
    } catch (error) {
      console.log(error);
    }

    // try {
    //   await fetch("/api/doc/", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <form action="" onSubmit={handleSubmit(handleAccount)}>
      <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
        <label className="mb-3 text-sm leading-none text-gray-800">
          Documento da Ocorrência
        </label>
        <input
          type="file"
          tabIndex={0}
          aria-label="documento da ocorrencia"
          {...register("doc")}
          className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
        />
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
  );
}
