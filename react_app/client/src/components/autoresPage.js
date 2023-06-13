import React, { useEffect, useState } from 'react';

const AutoresPage = () => {
  const [autorData, setAutorData] = useState([]);

  async function fetchAutores() {
    const response = await fetch("http://localhost:8080/autor");
    const data = await response.json();
    return data;
  }

  useEffect(() => {
    fetchAutores().then(data => {
      setAutorData(data);
      console.log(data);
    });
  }, []);

  return (
    <div>
      <h2>Página de Autores</h2>
      {autorData.length === 0 ? (
        <div>
          <p>Carregando os dados...</p>
        </div>
      ) : (
        <div>
          Os dados foram carregados com sucesso!
          {autorData.map(autor => (
            <div key={autor.id}>
              <p>Nome: {autor.nome}</p>
              <p>Sobrenome: {autor.sobrenome}</p>
              <p>Nacionalidade: {autor.nacionalidade}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const AutorPageId = ({ id }) => {
  const [autorData, setAutorData] = useState([]);

  async function fetchAutor() {
    const response = await fetch(`http://localhost:8080/autor/${id}`);
    const data = await response.json();
    return data;
  }

  useEffect(() => {
    fetchAutor().then(data => {
      setAutorData(data);
      console.log(data);
    });
  }, [id]);

  return (
    <div>
      {autorData.length === 0 ? (
        <div>
          <p>..</p>
        </div>
      ) : (
        <div>
          <div key={autorData.id}>
          <p>{autorData.nome} {autorData.sobrenome}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export { AutoresPage, AutorPageId };
