import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Este Portifólio',
      technologies: 'HTML/CSS, Angular, Typescript,JavaScript ',
      projectulr:'https://github.com/R3nge/Rodrigo-Portifolio',
      description: [
        'Portifólio feito para testar meus conhecimentos sobre Angular.',
        '',
        '',
      ],
    },
    {
      title: 'Agenda PHP',
      technologies: 'PHP / Laravel',
      projectulr:'https://github.com/R3nge/AgendaPHP.git',
      description: [
        'Em Andamento',
        '',
        '',
      ],
    },
    {
      title: 'Em breve',
      technologies: '',
      projectulr:'',
      description: [
        '',
        '',
        '',
      ],
    },

  ];
  constructor() {}

  ngOnInit(): void {}
}
