import React, { useContext, useEffect, useState } from 'react';
import { Catcontext } from '../context/Catcontext';
import { tecnologiaPreguntas } from '../helpers/preguntas';

export const Programacion = () => {
  const {
    preguntaActual,
    puntuacion,
    respuestaSeleccionada,
    final,
    disable,
    handleSeleccionarRespuesta,
    handlesubmit,
    setNomCat,
  } = useContext(Catcontext);

  useEffect(() =>{
    setNomCat(tecnologiaPreguntas);
    
  },)

  
  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <section className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
        {final ? (
          <div className="text-center space-x-4">
            <p className="text-2xl font-bold mb-4">
              Obtuviste {puntuacion} de {tecnologiaPreguntas.length}
            </p>
            
              <button onClick={() => window.location.href="/"} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Volver al inicio
              </button>
           

            <button onClick={() => window.location.reload()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Volver a jugar
              </button>
          </div>
         
        ) : (
          <>
            <div className="mb-4">
              <span className="text-lg">
                Pregunta {preguntaActual + 1} de {tecnologiaPreguntas.length}
              </span>
            </div>
            <h2 className="text-2xl font-bold mb-4">{tecnologiaPreguntas[preguntaActual].titulo}</h2>
            <div>
              <div>
                {tecnologiaPreguntas[preguntaActual].opciones.map((respuesta, index) => (
                  <button
                    key={index}
                    disabled={disable}
                    onClick={() => handleSeleccionarRespuesta(index, respuesta.isCorrect)}
                    className={`${
                      respuestaSeleccionada === index
                        ? respuesta.isCorrect
                          ? 'bg-green-500'
                          : 'bg-red-500'
                        : 'bg-blue-500'
                    } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 w-full`}
                  >
                    {respuesta.textoRespuesta}
                  </button>
                ))}
              </div>
              <button
                onClick={handlesubmit}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-full"
              >
                Siguiente Pregunta
              </button>
            </div>
          </>
        )}
      </section>
    </div>
  );
};
