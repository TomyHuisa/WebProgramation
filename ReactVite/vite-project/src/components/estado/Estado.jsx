//Hooks -> useState
import { useEffect, useState } from "react";

//camelcase es la manera de escribir en la cual cada palabra nueva arranca con mayuscula
//Por Ejemplo: const ["nombre", set"Nombre"]

//

export const Estado = () => {
  const [contador, setContador] = useState(0);

  const handleClick = () => {
    setContador(contador + 1);
  };

  const arrayPersonajes = [
    {
      name: "Rick",
      lastName: "Sanchez",
      planet: "Earth",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    },
    {
      name: "Morty",
      lastName: "Smith",
      planet: "Earth",
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    },
  ];

  // useEffect se va a ejecutar la cantidad de veces que las dependencias se actualizen por ejemplo en este caso es el "Contador"
  // si no le pasan dependencias se ejecutara solo al principio de la app, osea en el primer render
  // si no se le pasa el array de dependencias siempre se ejecutara
  // useEffect(() => {}, []);

  useEffect(() => {
    console.log("El Contador se ha actualizado");
  }, [contador]);

  /* Implicito
    arrayPersonajes.map(() => (
                <>
                
                </>
))
  */

  return (
    <>
      <div>
        {
          //Caundo despues de la funcion flecha hay un parentesis significa que el return es implicito osea retorna lo que este en los parentesis
          arrayPersonajes.map((item, index) => (
            <>
              <div key={index}>
                <h2>
                  FullName: {item.name} {item.lastName}
                </h2>
                <p> Planet: {item.planet} </p>
                <img src={item.image} alt="description" />
              </div>
            </>
          ))
        }
      </div>
      <button onClick={handleClick}> Aumentar </button>
      <p>{contador}</p>
    </>
  );
};
