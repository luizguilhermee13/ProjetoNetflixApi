export default function HomePage() {
  return (
    <div className="imgfundo max-w-screen-xl h-svh  my-2 text-white text-border flex flex-col ">
      <Header />
      <Main />
    </div>
  );
}

function Header() {
  return (
    <div className=" w-full h-[14%] flex justify-between px-6">
      {/* Div logo*/}
      <div className="p-1">
        <img
          className="w-40 h-full"
          src="public/assets/netflix-logo.png"
          alt="logo"
        />
      </div>
      {/* Div idiomas*/}
      <div className="flex gap-6 items-center">
        <div>
          <select
            name="linguagem"
            id="idiomas"
            className="bg-transparent border border-white rounded-sm p-1"
          >
            <option>Português</option>
            <option>Inglês</option>
          </select>
        </div>
        {/* Div Entrar/Login */}
        <div>
          <button className="bg-red-600 p-1.5  px-3 rounded-lg">Entrar</button>
        </div>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className=" w-full h-full flex justify-center items-center leading-relaxed ">
      <div className="bg-transparent shadow-xl shadow-black p-2 h-80 rounded-md ">
        <div className="flex flex-col  justify-around h-full ">
          <p className="text-[3em]">
            Filmes, séries e muito mais. Sem limites.
          </p>
          <p className="text-[2em]">
            Assista onde quiser. Cancele quando quiser.
          </p>
          <p className="text-xl">
            Pronto para assistir? Informe seu email para criar ou reiniciar sua
            assinatura.
          </p>
          <form className="flex justify-center text-[2.6em]">
            <input type="text" placeholder="Digite seu E-mail" />
            <input
              className="bg-red-600 px-1 rounded-r-md"
              type="button"
              value="Vamos la"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
