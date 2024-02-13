import { explication } from "../Interfaces/IExplication.ts"
import { getExplication } from "../Tools/toolBox.tsx"

/**
 * Remplace le label de descritpion par la descrition du bouton hover
 * @param component Le bouton qui est hover
 */
export async function infoHover(component:HTMLElement){
    let lblDescription:HTMLElement = document.getElementById("labelDescription")!     //  Le '!' permet de dire que l'attribut ne doit pas être nul
    let temp:string = component["target"]["htmlFor"]
    let description:explication = getExplication(temp)
    lblDescription.textContent = description.descritpion
}


/**
 * Réinitialise la description à son état d'origine
 * @param component Le label de description
 */
export async function infoHoverOut(component:any){
    let lblDescription:HTMLElement = document.getElementById("labelDescription")!     //  Le '!' permet de dire que l'attribut ne doit pas être nul
    lblDescription.textContent = lblDescription.getAttribute("for")!
}