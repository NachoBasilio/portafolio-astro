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
      className="flex flex-col mt-5 dark:text-zinc-100 bg-aguara-300 dark:bg-zinc-900 rounded-lg m-auto"
    >
      <div className="titulo-proyecto grow">
        <h3 className="text-3xl m-auto pl-2 pt-2 font-bold dark:bg-zinc-900">{titulo}</h3>
        <p className="text-xl mt-2 bg-zinc-100 p-2 dark:bg-zinc-900">{descripcion}</p>
      </div>
      <div className="imagen-proyectos m-auto bg-zinc-100 h-60 dark:bg-zinc-900" style={divStyle}></div>
    </a>
  );
}
