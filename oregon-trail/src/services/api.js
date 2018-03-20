const API_ROOT = `http://localhost:3000/`;

const headers = {
  'Content-Type': 'application/json',
  Accepts: 'application/json',
};


const getGame = () => {
  return fetch(`${API_ROOT}/paintings/`, { headers: headers }).then(res =>
    res.json()
  );
};

const postGame = () => {
  return fetch(`${API_ROOT}/games`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify("")
  }).then(res => res.json());
};

const postPlayer = (game_id, name) => {
  return fetch(`${API_ROOT}/players`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({game_id: game_id, name: name})
  }).then(res => res.json());
};

export default {
  game:{
    getGame,
    postGame
  },
  player: {
    postPlayer
  }
};
