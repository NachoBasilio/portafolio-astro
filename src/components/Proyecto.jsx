import "../styles/proyectos.css";

export default function Proyecto({ titulo, imagen, link }) {
  const divStyle = {
    backgroundImage: `url(${imagen})`,
  };

  const grid = ()=>{
    if(titulo == "Rubrica Pokemon"){
      return "md:col-span-4 md:row-span-4"
    }else if(titulo == "Galeria de Imagenes"){
      return "md:col-span-6"
    }else{
      return "md:col-span-2"
    }
  }

  return (
    <div className={grid(titulo) + " mt-10 md:m-0"} >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col border-aguara-700 dark:text-zinc-100 bg-aguara-300 dark:bg-aguara-900 rounded-xl m-auto"
      >
      <div className="titulo-proyecto grow">
        <h3 className="text-xl m-auto pl-4 pt-2 font-bold tracking-wider">{titulo}</h3>
      </div>
      <div className="imagen-proyectos m-auto rounded-b bg-zinc-100 h-60 dark:bg-zinc-800" style={divStyle}></div>
      </a>
    </div>
  );
En 
}
