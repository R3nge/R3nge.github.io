// Este arquivo é necessário pelo karma.conf.js e carrega recursivamente todos os arquivos .spec e do framework.

import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): {
    <T>(id: string): T;
    keys(): string[];
  };
};

//Inicializa o ambiente de Teste Angular 
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
);

// Acha todos os Testes 
const context = require.context('./', true, /\.spec\.ts$/);
//Carrega todos os modulos.
context.keys().forEach(context);
