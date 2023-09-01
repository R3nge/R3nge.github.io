import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Nome', 'Rodrigo Gomes Malaquias'],
    ['Experiência', 'Desenvolvimento PHP'],
    ['Educação', 'Técnico em Informática (IFSEMG Rio Pomba/MG)'],
    ['Interesses', 'Estágio/PJ'],
  ];

  aboutMe: string[] = [
    'Estudante do IFSEMG, comecei minha jornada de programador a 3 anos com a paixão por Back-End e desde então venho apurando meus conhecimentos, Atualmente trabalho como Desenvolvedor Fullstack Freelancer estudando e realizando projetos para conhecidos e pequenos negócios afim de aumentar meu portifólio, tenho conhecimentos em PHP com o Framework Laravel, JavaScript com Angular e Banco de dados MySQL, SQL.',
   
  ];

  constructor() {}

  ngOnInit(): void {}
}
