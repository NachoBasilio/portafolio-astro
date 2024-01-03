import "../styles/proyectos.css";

export default function Proyecto({ titulo, imagen, link, logos  }) {
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
        className="flex flex-col border-aguara-700 dark:text-zinc-900 font-bold bg-aguara-100 dark:bg-aguara-700 rounded m-auto"
      >
      <div className="titulo-proyecto grow h-80 m-auto">
        <h3 className="text-xl m-auto pt-2  tracking-wider">{titulo}</h3>
      </div>
      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-800"/>
      <div className="imagen-proyectos m-auto rounded-b bg-zinc-100 dark:bg-zinc-800 h-20" style={divStyle}></div>
      </a>
      <div className="logos">
        {logos && Array.isArray(logos) && logos.map((logo, index) => (
          <img key={index} src={logo} alt="" className="m-2" />
        ))}
      </div>  

    </div>
  ); 
}
