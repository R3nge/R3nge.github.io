import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'PHP (Laravel/Docker)',
      level: '3 Anos',
      icon: 'php',
      iconUrl: './assets/icons/php.png',
      icon2:'laravel',
      iconUrl2:'./assets/icons/laravel.png',
      icon3:'docker',
      iconUrl3:'./assets/icons/docker.png',
    },
    {
      name: 'JavaScript (Angular, TypeScript)',
      level: '1 Ano',
      icon: 'javascript',
      iconUrl: './assets/icons/javascript.png',
      icon2:'Angular',
      iconUrl2:'./assets/icons/angular.png',
      icon3:'TypeScript',
      iconUrl3:'./assets/icons/typescript.png',
    },
    {
      name: 'SQL/MYSQL',
      level: '3 Anos',
      icon: 'mysql',
      iconUrl: './assets/icons/mysql.png',
    },
    {
     name: 'WordPress',
     level: '1 Ano',
     icon: 'wordpress' , 
     iconUrl: './assets/icons/wordpress.png',
    }

  ];
  constructor() {}

  ngOnInit(): void {}
}
