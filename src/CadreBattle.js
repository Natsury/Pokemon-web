import './CadreBattle.css';
import {GetPokemonAPI} from './Pokemon/pokemon.tsx';

//  Données de métamorphe
/*
const urlMetamorphe = "https://pokeapi.co/api/v2/pokemon/rayquaza-mega"
const request = new Request(urlMetamorphe)
const reponse = await fetch(request)
const json = await reponse.json()
*/
const pokemonEnnemy = await GetPokemonAPI("rayquaza-mega")
const pokemonAlly = await GetPokemonAPI("muk")

function CadreBattle() {
  return (
    <div className="Main-content">
        <div className="Box-fight">
            <div className="Ennemy Box-battle">
              <div className="Info-ennemy Infos">
                <label htmlFor="name" className="name">{pokemonEnnemy.nom}</label>
                <label htmlFor="lvl" className='lvl'>Lv{+ pokemonEnnemy.lvl}</label>
                <div className='Hp-bar'>
                  <div className='bg-color'>

                  </div>
                </div>
              </div>
              <img className="Img-ennemy" src={pokemonEnnemy.sprites[0]} alt="Pokemon adverse"/>
            </div>
            <div className="Box-battle Player">
              <img className="Img-pokemon-player" src={pokemonAlly.sprites[1]} alt="Pokemon du joueur"/>
              <div className='Info-ally Infos'>
                <label htmlFor="Player" className="name">{pokemonAlly.nom}</label>
                <label htmlFor="lvl" className='lvl'>Lv{+ pokemonAlly.lvl}</label>
                <div className='HP'>
                  <div className='Hp-bar'>
                  </div>
                  <label htmlFor="nb-Hp">{pokemonAlly.hp} / {pokemonAlly.hp}</label>
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
