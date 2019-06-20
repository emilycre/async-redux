import defaultImg from '../assets/default.png';

export const getCharacters = () => {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to return characters...';

      return json;
    })
    .then(json => json.map(character => ({
      id: character._id,
      name: character.name,
      img: character.photoUrl || defaultImg
    })));
};
