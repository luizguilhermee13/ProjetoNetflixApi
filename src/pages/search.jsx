export default function SearchPage() {
  return (
    <div className="bg-red-800 max-w-screen-xl h-svh  my-2 text-white flex flex-col ">
      <ContainerPesquisar />
    </div>
  );
}

function ContainerPesquisar() {
  let name = document.getElementById("name");
  return (
    <div className="w-full h-[30%] border border-red-900">
      <form className="h-full flex flex-col items-center justify-center text-4xl gap-10">
        <div>
          <label>Pesquisa de Filmes</label>
        </div>
        <div>
          <input
            className="rounded-xl p-2 mx-4"
            type="text"
            placeholder="Digite o nome do filme"
            id="name"
          />
          <button
            className="bg-slate-800 p-2 rounded-xl"
            onClick={(e) => {
              e.preventDefault();
              TestandoChamada(name);
            }}
          >
            Pesquisar
          </button>
        </div>
      </form>
    </div>
  );
}

function TestandoChamada(name) {
  return <div>{name}</div>;
}
