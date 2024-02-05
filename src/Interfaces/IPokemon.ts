import { type } from "./IType"
import { Move } from "./IMove"

export interface Pokemon{
    nom: string
    atk: number
    def: number
    hp: number
    speed: number
    types: Array<type>
    lvl: number
    special: number
    moves: Array<Move>
}