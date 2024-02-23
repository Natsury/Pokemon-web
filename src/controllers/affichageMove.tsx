import { pokemonAlly } from "../component/CadreBattle.tsx";
import { Attack } from "../component/CadreBattle.tsx";
/**
 * Affiche les attaques de Pokemon sur le clique du fight
 */
export function onClickPrintMove(){
    let divContent = document.getElementById("displayMoves")
    if(divContent !== null && pokemonAlly !== null){
        if(divContent.children.length !== 4){
            let lblDescription = document.getElementById("labelDescription")
            if(lblDescription !== null) lblDescription.remove()
            if(divContent !== null){
                pokemonAlly.moves.forEach(unMove =>{
                    let label = document.createElement("label")
                    label.setAttribute("name", unMove.nom)
                    label.setAttribute("class", "unMove")
                    label.style.border = "solid 5px " + unMove.type.color
                    label.onclick = Attack
                    label.textContent = unMove.nom
                    label.classList.add()
                    divContent.append(label)
                })
            } 
        }else{
            while(divContent.childNodes.length !== 0){
                divContent.childNodes.forEach(unLbl =>{
                    unLbl.remove()
                })
            }
        }
    }
}