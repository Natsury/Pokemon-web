export interface type{
    nom: string                 //  Nom du type 
    color: string               //  Couleur correspondant au type
    weakness: Array<type>       //  Faiblesses liés à ce type
    imunities: Array<type>      //  Imunisé contre 
    category: string            //  Dégats Spécial ou physique
}