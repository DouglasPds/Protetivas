import { GetServerSideProps } from "next";
import { useState } from "react";
import Occurrence from "../components/occurrence";
import SearchBar from "../components/searchBar";
import { prisma } from "../lib/prisma";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const occurrences = await prisma.ocorrencia.findMany();

  // occurrences.map((a) => console.log(a.contestacoes));

  const data = occurrences.map((occurrence) => {
    return {
      id: occurrence.id,
      cpf_agressor: occurrence.cpf_agressor,
      nome_agressor: occurrence.nome_agressor,
      observacao_ocorrencia: occurrence.observacao_ocorrencia,
      data_ocorrencia: occurrence.data_ocorrencia.toISOString(),
      // contestacoes: occurrence.
    };
  });

  const docs = await prisma.doc.findUnique({
    where: {
      id: 4,
    },
  });

  //responseType: 'arraybuffer', headers: { Accept: 'application/pdf', }
  // req.headers = {
  //   Accept: "application/pdf",
  // };
  // res.write(docs.documento);

  // console.log("docs", docs);

  // const doc = Buffer.from(docs.documento);
  // const doc = Buffer.from(docs.documento).toString("utf8");
  // const doc = Buffer.from(docs.documento).toJSON();
  // const doc = Buffer.from(docs.documento);
  // const doc = writeFile("protetiva.pdf", docs.documento, (err) => {
  //   if (err) throw err;
  //   console.log("The file has been saved!");
  // });

  const doc = docs.documento.toJSON();

  // const doc = new Blob([new Uint8Array(docs.documento).buffer]);
  // const doc = window.URL.createObjectURL(
  //   new Blob([new Uint8Array(docs.documento.toJSON().data).buffer])
  // );

  // console.log(doc);

  // return {
  //   props: {
  //     docs,
  //   },
  // };

  return {
    props: {
      data,
      docs: {
        id: docs.id,
        documento: doc,
      },
    },
  };
};

// export const getServerSideProps: GetServerSideProps = async () => {
//   const docs = await prisma.doc.findUnique({
//     where: {
//       id: 1,
//     },
//   });
//   console.log("docs", docs);

//   return {
//     props: {
//       docs,
//     },
//   };
// };

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
  // console.log("docs", docs.documento.data);
  // console.log("docs buffer", Buffer.from(docs.documento.data));
  // console.log(
  //   "docs blob/uint8/buffer",
  //   new Blob([new Uint8Array(docs.documento.data).buffer])
  // );
  // console.log(
  //   "docs blob/uint8",
  //   new Blob([new Uint8Array(docs.documento.data)])
  // );
  // console.log("docs blob", new Blob([docs.documento.data]));
  // console.log("docs uint8", new Uint8Array(docs.documento.data));

  // const [resData, setResData] = useState<ArrayBuffer>();
  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);

  // function onDocumentLoadSuccess({ numPages }) {
  //   setNumPages(numPages);
  // }

  // useEffect(() => {
  //   const getDocs = async () => {
  //     return await fetch("/api/doc/", {
  //       method: "GET",
  //       headers: {
  //         // "Content-Type": "application/pdf",
  //         Accept: "application/pdf",
  //       },

  //       // body: JSON.stringify(data),
  //     });
  //   };
  //   // getDocs().then((res) => (console.log(res.blob()), setResData(res)));
  //   getDocs().then(
  //     (res) => res.arrayBuffer().then((res) => setResData(res))
  //     // (res) => res.blob().then((res) => setResData(res))
  //     // (res) => setResData(res.arrayBuffer))

  //     // console.log("res", res.arrayBuffer())
  //   );
  // }, []);

  // const viewer = useRef(null);

  // useEffect(() => {
  //   import("@pdftron/webviewer").then(() => {
  //     WebViewer(
  //       {
  //         // path: "/lib",
  //         // initialDoc: "/files/pdftron_about.pdf",
  //       },
  //       viewer.current
  //     ).then((instance) => {
  //       // const { docViewer } = instance;
  //       // you can now call WebViewer APIs here...
  //       const arr = new Uint8Array(resData);
  //       const blob = new Blob([arr], { type: "application/pdf" });
  //       instance.UI.loadDocument(blob, { filename: "myfile.pdf" });

  //       const { documentViewer } = instance.Core;
  //       documentViewer.addEventListener("documentLoaded", () => {
  //         // perform document operations
  //       });
  //     });
  //   });
  // }, []);

  // console.log(resData);

  // if (typeof window !== "undefined") {
  // Testar o código abaixo
  // const pdf = window.URL.createObjectURL(
  //   new Blob([docs.documento.data], { type: "application/pdf" })
  // );
  // const pdf = new Blob([docs.documento.data]);
  // const pdf = window.URL.createObjectURL(
  //   new Blob([new Uint8Array(docs.documento.data).buffer])
  // );
  // const pdf = new Blob([new Uint8Array(docs.documento.data).buffer]);
  // const pdf = window.URL.createObjectURL(new Blob([docs.documento.data]));
  // const pdf = new Blob([new Uint8Array(docs.documento.data)]);
  // const pdf = new Blob([new Uint8Array(docs.documento).buffer]);
  // const pdf = new File(
  //   [readFileSync(docs.documento)],
  //   "medida-protetiva.pdf"
  // );
  // const pdf = new File([docs.documento.data], "medida-protetiva.pdf");
  // const pdf = window.URL.createObjectURL(
  //   new File([docs.documento.data], "medida-protetiva.pdf", {
  //     type: "application/pdf",
  //   })
  // );
  // console.log("pdf", pdf);
  // console.log("pdf-Get", resData);
  // if (resData) {
  //   const pdf = window.URL.createObjectURL(
  //     new Blob([resData], { type: "application/pdf" })
  //   );

  // const pdf = window.URL.createObjectURL(
  //   new Blob([new Uint8Array(docs.documento.data)])
  // );
  // const link = document.createElement("a");
  // link.href = pdf;
  // link.setAttribute("download", "yourcoolpdf.pdf");
  // document.body.appendChild(link);
  // link.click();

  // }
  // }
  // const value = new Uint8Array(resData);
  const [searchResults, setSearchResults] = useState(data);

  {
    searchResults.map((occurrence) => console.log(occurrence));
  }
  return (
    <div>
      <SearchBar occurrences={data} setSearchResults={setSearchResults} />
      {searchResults.map((occurrence) => (
        <Occurrence key={occurrence.id} data={occurrence} />
      ))}

      {/* <Doc /> */}
      {/* <div className="webviewer" ref={viewer} style={{ height: "100vh" }}></div> */}
      {/* <div>
        <Document
          file={Buffer.from(docs.documento.data)}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div> */}
    </div>
  );
}
