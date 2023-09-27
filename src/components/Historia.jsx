import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Asumiendo que estás utilizando react-router-dom
import { Catcontext } from '../context/Catcontext';
import {  historiaPreguntas } from '../helpers/preguntas';

export const Historia = () => {
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
    setNomCat(historiaPreguntas);
  })

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <section className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
        {final ? (
          <div className="text-center">
            <p className="text-2xl font-bold mb-4">
              Obtuviste {puntuacion} de {historiaPreguntas.length}
            </p>
            <Link to="/">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Volver a jugar
              </button>
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-4">
              <span className="text-lg">
                Pregunta {preguntaActual + 1} de {historiaPreguntas.length}
              </span>
            </div>
            <h2 className="text-2xl font-bold mb-4">{historiaPreguntas[preguntaActual].titulo}</h2>
            <div>
              <div>
                {historiaPreguntas[preguntaActual].opciones.map((respuesta, index) => (
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
