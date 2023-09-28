import { createContext,useState } from "react";
import React from 'react'


const Catcontext = createContext();

export const Categorias = ({children}) => {

    const [preguntaActual, setPreguntaActual] = useState(0);
    const [puntuacion, setPuntuacion] = useState(0);
    const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null);
    const [final, setFinal] = useState(false);
    const [disable, setDisable] = useState(false);
    const [nomCat, setNomCat] = useState([])
   

   

    const handleSeleccionarRespuesta = (index, isCorrect) => {
      // desabilitar selecccion de respuesta
      setDisable(true);
      setRespuestaSeleccionada(index);
      //puntuacion
      if (isCorrect) {
        setPuntuacion(puntuacion + 1);
      }
    };

    const handlesubmit = () => {
      if (preguntaActual === nomCat.length - 1) {
        setFinal(true);
      } else {
        setPreguntaActual(preguntaActual + 1);
        setRespuestaSeleccionada(null); // Reiniciar la respuesta seleccionada para la siguiente pregunta
        setDisable(false)
      }
    };

    const contextValue = {
        preguntaActual,
        setPreguntaActual,
        puntuacion,
        setPuntuacion,
        respuestaSeleccionada,
        handleSeleccionarRespuesta,
        final,
        handlesubmit,
        disable,
        setNomCat
    };
    
  return (
    <Catcontext.Provider value={contextValue}>
        {children}
    </Catcontext.Provider>
  )
}
export {Catcontext};