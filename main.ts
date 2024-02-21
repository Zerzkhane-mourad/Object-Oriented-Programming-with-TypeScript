import { EmployeSalaireAnnuelDto } from "./Class/EmployeSalaireAnnuelDto";
import { Employe } from "./Interface/Employe";
import { Salaire } from "./Interface/Salaire";
import { dataEmployee, dataSalaire } from "./Constants/data";
import { calculateEmployeSalaires, displayEmployeSalaireAnnuelList, displaySalaireAnnuel, employeSalaireAnnuel, maxSalaireAnnuel, minSalaireAnnuel } from "./functions";


const employeList: Employe[] = dataEmployee
const salaireList: Salaire[] = dataSalaire

const employeSalaireAnnuelList: EmployeSalaireAnnuelDto[] = calculateEmployeSalaires(employeList, salaireList);

const salaireAnnuelMax = maxSalaireAnnuel(employeSalaireAnnuelList);
const salaireAnnuelMin = minSalaireAnnuel(employeSalaireAnnuelList);

const employeSalaireMin = employeSalaireAnnuel(employeSalaireAnnuelList, salaireAnnuelMin);
const employeSalaireMax = employeSalaireAnnuel(employeSalaireAnnuelList, salaireAnnuelMax);



displayEmployeSalaireAnnuelList(employeSalaireAnnuelList)

displaySalaireAnnuel(salaireAnnuelMin, salaireAnnuelMax, employeSalaireMin, employeSalaireMax)

