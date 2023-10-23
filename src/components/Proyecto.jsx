import "../styles/proyectos.css";

export default function Proyecto({ titulo, descripcion, imagen, link }) {
  const divStyle = {
    backgroundImage: `url(${imagen})`
  };

  return (
    <a href={link} target="_blank"  className="flex  mt-5 dark:text-zinc-100 bg-aguara-400 
    p-2 rounded-lg  m-auto">
      <div className="titulo-proyecto grow">
        <h3 className="text-2xl font-bold">{titulo}</h3>
        <p>{descripcion}</p>
      </div>
      <div className="imagen-proyectos w-28 h-28" style={divStyle}></div>
    </a>
  );
}

