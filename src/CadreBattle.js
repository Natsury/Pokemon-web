import './CadreBattle.css';
import {GetPokemon, GetPokemonAPI} from './Pokemon/pokemon.tsx';

//  Données de métamorphe
/*
const urlMetamorphe = "https://pokeapi.co/api/v2/pokemon/rayquaza-mega"
const request = new Request(urlMetamorphe)
const reponse = await fetch(request)
const json = await reponse.json()
*/
const json = await GetPokemonAPI("rayquaza-mega")

//  Données de Gros tas de morve
const urlTasDeMorve = "https://pokeapi.co/api/v2/pokemon/muk"
const request1 = new Request(urlTasDeMorve)
const reponse1 = await fetch(request1)
const json1 = await reponse1.json()

function CadreBattle() {
  return (
    <div className="Main-content">
        <div className="Box-fight">
            <div className="Ennemy Box-battle">
              <div className="Info-ennemy Infos">
                <label htmlFor="name" className="name">{json["name"].toUpperCase()}</label>
                <label htmlFor="lvl" className='lvl'>Lv5</label>
                <div className='Hp-bar'>
                  <div className='bg-color'>

                  </div>
                </div>
              </div>
              <img className="Img-ennemy" src={json["sprites"]["front_shiny"]} alt="Image du Pokemon adverse"/>
            </div>
            <div className="Box-battle Player">
              <img className="Img-pokemon-player" src={json1["sprites"]["back_shiny"]} alt="Image du Pokemon du joueur"/>
              <div className='Info-ally Infos'>
                <label htmlFor="Player" className="name">{json1["name"].toUpperCase()}</label>
                <label htmlFor="lvl" className='lvl'>Lv12</label>
                <div className='HP'>
                  <div className='Hp-bar'>
                  </div>
                  <label htmlFor="nb-Hp">80 / 80</label>
                </div>
              </div>
            </div>
        </div>

        <div className='battle-choice'>
          <div className='content'>
            <label htmlFor="blabla">Un truc cool d'écrit</label>
          </div>
          <div className='choice'>
            <div className="option">
              <label htmlFor="FIGHT">FIGHT</label>
              </div>
            <div className="option">
              <label htmlFor="BAG">BAG</label>
            </div>
            <div className="option">
              <label htmlFor="POKÉMON">POKEMON</label>
            </div>
            <div className="option">
              <label htmlFor="RUN">RUN</label>
            </div>
          </div>
        </div>
    </div>
  );
}

export default CadreBattle;
