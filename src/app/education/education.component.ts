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
      institute: "IFSEMG Campus Rio Pomba ",
      course: 'Técnico em Informática',
      duration: '3 Anos',
      score: '* Teste de Software *PHP *Linux *Wordpress *Redes ',
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
      course: 'Santander Bootcamp 2023 - Fullstack Java+Angular',
      duration: 'Em conclusão',
      score: '*Java *Angular *SQL/NOSQL *Machine Learning *Spring Boot',

    },
    
  ];
  

  constructor() {}

  ngOnInit(): void {}
}
