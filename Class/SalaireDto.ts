import { Salaire } from "../Interface/Salaire";

export class SalaireDto {
    data: Salaire;

    constructor(data: Salaire) {
        this.data = data;
    }

}