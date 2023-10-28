import React, { useEffect, useState } from 'react';

function GitHub() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    // Faz a solicitação à API do GitHub usando a função fetch
    fetch('https://api.github.com/users/nerigleston/repos')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro na solicitação');
        }
        return response.json();
      })
      .then(data => {
        // Atualiza o estado com os dados da resposta
        setRepos(data);
      })
      .catch(error => {
        console.error('Ocorreu um erro ao buscar os repositórios:', error);
      });
  }, []);

  return (
    <div>
      <h1>Repositórios do usuário nerigleston:</h1>
      <ul>
        {repos.map(repo => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default GitHub;
