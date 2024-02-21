import { Employe } from "../Interface/Employe";

export class EmployeDto {
    data: Employe;

    constructor(data: Employe) {
        this.data = data;
    }

}