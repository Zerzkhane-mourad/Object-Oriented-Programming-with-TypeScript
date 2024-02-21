import { EmployeSalaireAnnuel } from "../Interface/EmployeSalaireAnnuel";

export class EmployeSalaireAnnuelDto{
    private data: EmployeSalaireAnnuel;

    constructor(data: EmployeSalaireAnnuel) {
        this.data = data;
    }

    getIdEmploye(): number {
        return this.data.idEmploye;
    }

    getNom(): string {
        return this.data.nom;
    }

    getPrenom(): string {
        return this.data.prenom;
    }

    getAnnee(): number {
        return this.data.annee;
    }

    getSalaireAnnuel(): number {
        return this.data.salaireAnnuel;
    }
}