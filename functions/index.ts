import { EmployeSalaireAnnuelDto } from "../Class/EmployeSalaireAnnuelDto";
import { Employe } from "../Interface/Employe";
import { Salaire } from "../Interface/Salaire";

export function calculateEmployeSalaires(employeList: Employe[], salaireList: Salaire[]): EmployeSalaireAnnuelDto[] {

    const employeSalaireAnnuelList: EmployeSalaireAnnuelDto[] = [];

    employeList.forEach(employeData => {
        const salairesEmploye = salaireList.filter(salaire => salaire.idEmploye === employeData.idEmploye);
        const salaireAnnuel = salairesEmploye.reduce((total, salaire) => total + (salaire.salaireMensuel * 12), 0);
        salairesEmploye.forEach(salaire => {
            employeSalaireAnnuelList.push(new EmployeSalaireAnnuelDto({
                idEmploye: employeData.idEmploye,
                nom: employeData.nom,
                prenom: employeData.prenom,
                annee: salaire.annee,
                salaireAnnuel: salaire.salaireMensuel * 12
            }));
        });
    });

    return employeSalaireAnnuelList;
}

export function displayEmployeSalaireAnnuelList(employeSalaireAnnuelList: EmployeSalaireAnnuelDto[]): void {
    employeSalaireAnnuelList.forEach((employeSalaire) => {
        console.log(`idEmploye: ${employeSalaire.getIdEmploye()}`);
        console.log(`nom: ${employeSalaire.getNom()}`);
        console.log(`prenom: ${employeSalaire.getPrenom()}`);
        console.log(`annee: ${employeSalaire.getAnnee()}`);
        console.log(`salaire annuel: ${employeSalaire.getSalaireAnnuel()}`);
        console.log("**************");
    });
}


export function minSalaireAnnuel(employeSalaireAnnuelList: EmployeSalaireAnnuelDto[]): number {
    return Math.min(...employeSalaireAnnuelList.map(employeSalaire => employeSalaire.getSalaireAnnuel()));
}

export function maxSalaireAnnuel(employeSalaireAnnuelList: EmployeSalaireAnnuelDto[]): number {
    return Math.max(...employeSalaireAnnuelList.map(employeSalaire => employeSalaire.getSalaireAnnuel()));
}

export function employeSalaireAnnuel(employeSalaireAnnuelList: EmployeSalaireAnnuelDto[], salaireAnnuel: number){
    const employe = employeSalaireAnnuelList.find(employeSalaire => employeSalaire.getSalaireAnnuel() === salaireAnnuel);
    if (employe) {
        return `idEmploye: ${employe.getIdEmploye()} |  nom: ${employe.getNom()} |  prenom: ${employe.getPrenom()}`;
    } 
}


export function displaySalaireAnnuel(SalaireAnnuelMin: number, salaireAnnuelMax: number, employeSalaireMin: any, employeSalaireMax: any): void {
    console.log(`Salaire Annuel Min: ${SalaireAnnuelMin} | ${employeSalaireMin} `);
    console.log(`Salaire Annuel Max: ${salaireAnnuelMax} | ${employeSalaireMax}`);
}
