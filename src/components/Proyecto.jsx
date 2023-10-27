import "../styles/proyectos.css";

export default function Proyecto({ titulo, imagen, link }) {
  const divStyle = {
    backgroundImage: `url(${imagen})`,
  };

  const grid = ()=>{
    if(titulo == "Rubrica Pokemon"){
      return "md:col-span-6 "
    }else if(titulo == "Galeria de Imagenes"){
      return "md:col-span-9"
    }else{
      return "md:col-span-3"
    }
  }

  return (
    <div className={grid(titulo) + " mt-10 md:m-0 proyecto-container transition contenedorCard"} >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col border-aguara-700 dark:text-zinc-100 bg-aguara-300 dark:bg-aguara-900 rounded m-auto"
      >
      <div className="titulo-proyecto grow h-80 m-auto">
        <h3 className="text-xl m-auto pt-2 font-bold tracking-wider">{titulo}</h3>
      </div>
      <div className="imagen-proyectos m-auto rounded-b bg-zinc-100 dark:bg-zinc-800 h-20" style={divStyle}></div>
      </a>
      <div className="logos">
      <img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" alt="" />
      <img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" alt="" />
      <img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" alt="" />
      </div>
    </div>
  ); 
}
