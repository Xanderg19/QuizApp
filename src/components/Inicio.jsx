import React from 'react';
import { Link } from 'react-router-dom';

const Inicio = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Quiz App</h1>
      <p className="text-lg text-center mb-6">
        
      </p>
      <section className="text-center">
        <h3 className="text-xl font-semibold mb-2">Selecciona una categoría</h3>
        <div className="flex space-x-4">
          <Link to="/deporte">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Deporte
            </button>
          </Link>
          <Link to="/historia">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Historia
            </button>
          </Link>
          <Link to="/programacion">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Tecnologia
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Inicio;
