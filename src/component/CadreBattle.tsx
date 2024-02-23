import '../style/CadreBattle.css';
import { GetPokemonAPI } from '../Pokemon/pokemon.tsx';
import { infoHover, infoHoverOut } from '../controllers/hover.tsx';
import { onClickPrintMove } from '../controllers/affichageMove.tsx';

export const pokemonEnnemy = await GetPokemonAPI("rayquaza-mega")
export const pokemonAlly = await GetPokemonAPI("muk")

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
                  <div className='Hp-bar'></div>
                <label htmlFor="nb-Hp">{pokemonAlly.hp} / {pokemonAlly.hp}</label>
              </div>
            </div>
          </div>
      </div>
      <div className='battle-choice'>
            <div className='content' id='content'>
                <div className="description" id="description">
                    <label htmlFor="Aller faut faire le combat la" id='labelDescription'>Aller faut faire le combat la </label>
                </div>
                <div className="displayMoves" id="displayMoves"></div>
            </div>
            <div className='choice'>
                <div className="option">
                    <label htmlFor="fight" onMouseEnter={infoHover} onMouseLeave={infoHoverOut} onClick={onClickPrintMove}>FIGHT</label>
                </div>
                <div className="option">
                    <label htmlFor="bag" onMouseEnter={infoHover} onMouseLeave={infoHoverOut}>BAG</label>
                </div>
                <div className="option">
                    <label htmlFor="pokemon" onMouseEnter={infoHover} onMouseLeave={infoHoverOut}>POKEMON</label>
                </div>
                <div className="option">
                    <label htmlFor="run" onMouseEnter={infoHover} onMouseLeave={infoHoverOut}>RUN</label>
                </div>
            </div>
        </div>
    </div>
  );
}

export default CadreBattle;