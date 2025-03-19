// src/modules/xml/services/empresa-identificador.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmpresaIdentificadorService {
  identificarEmpresa(xmlData: any): string {
    // Lógica para identificar a empresa com base no XML
    if (xmlData['empresa'] === 'empresa1') {
      return 'Empresa 1';
    }
    if (xmlData['empresa'] === 'empresa2') {
      return 'Empresa 2';
    }
    return 'Desconhecida';
  }
}
