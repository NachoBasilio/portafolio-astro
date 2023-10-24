import "../styles/proyectos.css";

export default function Proyecto({ titulo, descripcion, imagen, link }) {
  const divStyle = {
    backgroundImage: `url(${imagen})`,
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col mt-5 border-aguara-700 dark:text-zinc-100 bg-aguara-300 dark:bg-aguara-900 rounded-2xl m-auto"
    >
      <div className="titulo-proyecto grow md:h-48 hover:h-auto">
        <h3 className="text-xl m-auto pl-4 pt-2 font-bold tracking-wider">{titulo}</h3>
        <p className="text-xl mt-2 bg-zinc-100 px-4 py-2 dark:bg-zinc-800 tracking-wider">{descripcion}</p>
      </div>
      <div className="imagen-proyectos m-auto rounded-b bg-zinc-100 h-60 dark:bg-zinc-800" style={divStyle}></div>
    </a>
  );
En 
}
