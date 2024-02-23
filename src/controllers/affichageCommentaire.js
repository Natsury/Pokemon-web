export function AfficheEtatCombat(stringAEcrire){
    let divDescription = document.getElementById('description')
    if(divDescription !== null){
        if(divDescription.childElementCount === 0){
            let label = document.createElement("label")
            label.textContent = stringAEcrire
            label.setAttribute("id", "labelInformationCombat")
            divDescription.appendChild(label)
        }else{
            let labelInformationCombat = document.getElementById('labelInformationCombat')
            if(labelInformationCombat !== null){
                labelInformationCombat.textContent = stringAEcrire
            }
        }
    }
}