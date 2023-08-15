import { Component, OnInit } from '@angular/core';//Importando Componentes
import { WorkExperience } from '../models/models';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: 'Desenvolvedor PHP',
      company: 'RBM WEB By Dimensa',
      duration: '3 Meses Estágio',
      description: [
        "Criação de novos sistemas e aplicativos,",
        "Atuei Desenvolvimento de CCB'S,",
        "Desenvolvimento e manutenção de sistemas já existentes,",
        "Conhecimentos: PHP / GIT / RADPHP / LARAVEL / JAVASCRIPT"
      ],
      
    }
    
    ,
    {
      role: 'Projeto de Extensão (Divulgação Científica)',
      company: 'IFSEMG Campus Rio Pomba',
      duration: '8 Meses',
      description: [
        "Projeto voltado para a disseminação de Posts interativos sobre Técnologia e Informação,de forma simples e didática na rede Social Facebook (META).",
      ],
    },
    {
      role: 'Montagem e Manutenção de Computadores / Desenvolvedor',
      company: 'Free Lancer',
      duration: 'Atualmente',
      description: [
        "Formatação e Backup",
        'Limpeza e Remoção de Vírus',
        'Montagem e Troca de Hardware',
        'Instalação de Softwares',
        'Desenvolvimento de Pequenas aplicações',
        'Serviços gerais de TI',
      ],
    },
    {
      role: 'Projeto de Extensão (Pandoo MG)',
      company: 'IFSEMG Campus Rio Pomba',
      duration: '3 Meses',
      description: [
        "Desenvolver atualizações e novas funcionalidades em um site de receitas, Utilizando PHP com o framework Laravel",
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
