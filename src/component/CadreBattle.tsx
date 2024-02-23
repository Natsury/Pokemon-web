import React from 'react';
import '../style/CadreBattle.css';
import { GetPokemonAPI } from '../Pokemon/pokemon.tsx';
import { infoHover, infoHoverOut } from '../controllers/hover.tsx';
import { onClickPrintMove } from '../controllers/affichageMove.tsx';
import { Move } from '../Interfaces/IMove.ts';
import { AfficheEtatCombat } from '../controllers/affichageCommentaire.js';

export const pokemonEnnemy = await GetPokemonAPI("muk")     //  Mettre le nom du pokemon en anglais
export const pokemonAlly = await GetPokemonAPI("rayquaza-mega")                 //  Mettre le nom du pokemon en anglais

console.log(pokemonEnnemy)
console.log(pokemonAlly)

if(pokemonAlly !== null) var hpMaxAlly = pokemonAlly.hp
if(pokemonEnnemy!== null) var hpMaxEnnemy = pokemonEnnemy.hp

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function battle(unMove:Move){
  if(pokemonAlly !== null && pokemonEnnemy !== null){
    let damageToEnnemy:number = 0;
    switch (unMove.category){
      case "physical":
        damageToEnnemy = CalculDamagePhysique(pokemonAlly, pokemonEnnemy, unMove)
        break;

      case "special":
        damageToEnnemy = CalculDamageSpe(pokemonAlly, pokemonEnnemy, unMove)
        break;

      default:
        break;
    }
    console.log(damageToEnnemy)
  
  
    let attaqueBot:Move = RandomAttaqueBot(pokemonEnnemy)
    let damageToAlly:number = 0
  
    switch (attaqueBot.category){
      case "physical":
        damageToAlly = CalculDamagePhysique(pokemonEnnemy, pokemonAlly, attaqueBot)
        break;
      case "special":
        damageToAlly = CalculDamageSpe(pokemonEnnemy, pokemonAlly, attaqueBot)
        break;
      default:
        break;
    }
    
    if(pokemonAlly.speed > pokemonEnnemy.speed){
      onClickPrintMove()            //  On réinitialise l'interface des choix de moves

      AfficheEtatCombat(pokemonAlly.nom + " utilise " + unMove.nom)
      await sleep(2000)

      if(damageToEnnemy !== 0){
        AffichageHpBar(pokemonEnnemy, damageToEnnemy)
        AfficheEtatCombat("Il inflige " + damageToEnnemy + " dégats à " + pokemonEnnemy.nom)
        await sleep(2000)
      }else{
        AfficheEtatCombat(pokemonEnnemy.nom + " n'a absolument rien senti")
        await sleep(2000)
      } 

      if(pokemonEnnemy.hp === 0){
        document.getElementById('choice').remove()
        AfficheEtatCombat(pokemonEnnemy.nom + " n'est plus en état de combatre, " + pokemonAlly.nom + " gagne le combat")
        await sleep(10000)
        document.location.href="http://localhost:3000/"   //  Relance une partie
      }else{
        AfficheEtatCombat(pokemonEnnemy.nom + " utilise " + attaqueBot.nom)
        await sleep(2000)
        if(damageToAlly !== 0){
          AffichageHpBar(pokemonAlly, damageToAlly)
          AfficheEtatCombat("Il inflige " + damageToAlly + " dégats à " + pokemonAlly.nom)
          await sleep(2000)
          if(pokemonAlly.hp === 0){
            document.getElementById('choice').remove()
            AfficheEtatCombat(pokemonAlly.nom + " n'est plus en état de combatre, " + pokemonEnnemy.nom + " gagne le combat")
            await sleep(10000)
            document.location.href="http://localhost:3000/"   //  Relance une partie
          }
        }else{
          AfficheEtatCombat(pokemonEnnemy.nom + " n'a absolument rien senti")
          await sleep(2000)
        }
      }

    } else{

      onClickPrintMove()
      AfficheEtatCombat("Le " + pokemonEnnemy.nom + " utilise " + attaqueBot.nom)
      await sleep(2000)

      if(damageToAlly !== 0){
        AffichageHpBar(pokemonAlly, damageToAlly)
        AfficheEtatCombat("Il inflige " + damageToAlly + " dégats à " + pokemonAlly.nom)
        await sleep(2000)
      }else{
        AfficheEtatCombat(pokemonAlly.nom + " n'a absolument rien senti")
        await sleep(2000)
      }

      if(pokemonAlly.hp === 0){
        document.getElementById('choice').remove()
        AfficheEtatCombat(pokemonAlly.nom + " n'est plus en état de combatre, " + pokemonEnnemy.nom + " gagne le combat")
        await sleep(10000)
        document.location.href="http://localhost:3000/"   //  Relance une partie
      }else{
        AfficheEtatCombat(pokemonAlly.nom + " utilise " + unMove.nom)
        await sleep(2000)
        if(damageToEnnemy !== 0){
          AffichageHpBar(pokemonEnnemy, damageToEnnemy)
          AfficheEtatCombat("Il inflige " + damageToEnnemy + " dégats à " + pokemonEnnemy.nom)
          await sleep(2000)
          if(pokemonEnnemy.hp === 0){
            document.getElementById('choice').remove()
            AfficheEtatCombat(pokemonEnnemy.nom + " n'est plus en état de combatre, " + pokemonAlly.nom + " gagne le combat")
            await sleep(10000)
            document.location.href="http://localhost:3000/"   //  Relance une partie
          }
        }else{
          AfficheEtatCombat(pokemonEnnemy.nom + " n'a absolument rien senti")
          await sleep(2000)
        }
      }
    }
  }
}

function CalculDamagePhysique(attaquant, defenseur, attaque){
  let attackPower:number = (attaque.power !== null) ? attaque.power : 0;
  let criticalHitChance = Math.random() > 0.8; 
  let criticalHit = criticalHitChance ? 2 : 1;
  let damage = Math.floor(((2 * attaquant.lvl / 5 + 2) * attackPower * (attaquant.atk / defenseur.def) / 50 + 2) * criticalHit);
  return damage;
}

function RandomAttaqueBot(attaquant){
  let randomIndex = Math.floor(Math.random() * 4);
  return attaquant.moves[randomIndex]
}

function CalculDamageSpe(attaquant, defenseur, attaque){
  let attackPower:number = (attaque.power !== null) ? attaque.power : 0;
  let criticalHitChance = Math.random() > 0.8;
  let criticalHit = criticalHitChance ? 2 : 1;
  let damage = Math.floor(((2 * attaquant.lvl / 5 + 2) * attackPower * (attaquant.special / defenseur.special) / 50 + 2) * criticalHit);
  return damage;
}

function AffichageHpBar(defenseur, degat:number){
  if(defenseur === pokemonAlly){
    let lblHpAlly = document.getElementById('hpAlly')
    let divHpAlly = document.getElementById('hp-bar-ally')
    if(pokemonAlly !== null && lblHpAlly !== null && divHpAlly !== null){
      pokemonAlly.hp -= degat;
      if(pokemonAlly.hp < 0)  pokemonAlly.hp = 0
      let pourcentageHp = ((pokemonAlly.hp * (100/100)) / hpMaxAlly)*100
      lblHpAlly.textContent = pokemonAlly.hp.toString() + " / " + lblHpAlly.getAttribute("for")
      divHpAlly.style.width = (pourcentageHp).toString() + "%"
      if(pourcentageHp < 25){
        divHpAlly.style.backgroundColor = "#eb2c2c"
      }else if(pourcentageHp < 50){
        divHpAlly.style.backgroundColor = "#eb862c"
      }else if(pourcentageHp < 75){
        divHpAlly.style.backgroundColor = "#ebc02c"
      }
    } 
  }else{
    let divHpEnnemy = document.getElementById("hp-bar-ennemy")
    if(pokemonEnnemy !== null && divHpEnnemy !== null){
      pokemonEnnemy.hp -= degat
      if(pokemonEnnemy.hp < 0)  pokemonEnnemy.hp = 0
      let pourcentageHp = ((pokemonEnnemy.hp * (100/100)) / hpMaxEnnemy)*100
      divHpEnnemy.style.width = (pourcentageHp).toString() + "%"
      if(pourcentageHp < 25){
        divHpEnnemy.style.backgroundColor = "#eb2c2c"
      }else if(pourcentageHp < 50){
        divHpEnnemy.style.backgroundColor = "#eb862c"
      }else if(pourcentageHp < 75){
        divHpEnnemy.style.backgroundColor = "#ebc02c"
      }
    }
  }
}

export function Attack(event){
  if(pokemonAlly !== null){
    let unMove = pokemonAlly.moves.find((unMove) => unMove.nom === event["srcElement"]["textContent"])
  
    battle(unMove)
  }
}

function CadreBattle() {
  if(pokemonAlly !== null && pokemonEnnemy !== null){
    return (
      <div className="Main-content">
        <div className="Box-fight">
              <div className="Ennemy Box-battle">
                <div className="Info-ennemy Infos">
                  <label htmlFor="name" className="name">{pokemonEnnemy.nom}</label>
                  <label htmlFor="lvl" className='lvl'>Lv{+ pokemonEnnemy.lvl}</label>
                  <div className='Hp-bar'>
                    <div className='bg-color' id='hp-bar-ennemy'>
  
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
                  <div className='Hp-bar'>
                    <div className='bg-color' id='hp-bar-ally'></div>
                </div>
                <label htmlFor={pokemonAlly.hp} className='nb-Hp' id='hpAlly'>{pokemonAlly.hp} / {pokemonAlly.hp}</label>
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
              <div className='choice' id="choice">
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
  
}

export default CadreBattle;