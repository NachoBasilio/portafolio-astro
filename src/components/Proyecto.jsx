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
      className="flex flex-col mt-5 dark:text-zinc-100 bg-aguara-300 rounded-lg m-auto"
    >
      <div className="titulo-proyecto p-2 grow">
        <h3 className="text-3xl m-auto font-bold">{titulo}</h3>
        <p className="text-xl mt-2">{descripcion}</p>
      </div>
      <div className="imagen-proyectos m-auto w-32 h-32" style={divStyle}></div>
    </a>
  );
}
