import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: "IFSEMG Sudeste Minas Gerais",
      course: 'Técnico Em Informática',
      duration: '2019 - 2023',
      score: '*Teste de Software *WordPress *Montagem/Manutenção *Banco de Dados *Desenvolvimento Web *Redes ',
    },
    {
      institute: "DIO ",
      course: 'Bootcamp Angular (Powered By IFood)',
      duration: '75 Horas',
      score: '* JavaScript *AngularJS/TypeScript *Git *NodeJS ',
    },
    {
      institute :"RBM WEB By Dimensa ",
      course: 'Desenvolvimento de Software PHP',
      duration: '44 Horas',
      score: '*PHP *RADPHP *SQL *JavaScript ',
    },
    {
      institute: "DIO ",
      course: 'Santander Bootcamp 2023 - Ciência de Dados com Python',
      duration: 'Em conclusão',
      score: '*Python *Power BI *SQL/NOSQL *Machine Learning ',

    },
    
  ];
  

  constructor() {}

  ngOnInit(): void {}
}
