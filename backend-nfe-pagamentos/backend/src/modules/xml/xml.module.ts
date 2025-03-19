import { Module } from '@nestjs/common';
import { XmlValidatorService } from './services/xml-validator.service';
import { XmlParserService } from './services/xml-parser.service';
import { EmpresaIdentificadorService } from './services/empresa-identificador.service';

@Module({
  imports: [],
  providers: [
    XmlValidatorService,       // Serviço para validar o XML
    XmlParserService,          // Serviço para parsear o XML e extrair dados
    EmpresaIdentificadorService,  // Serviço para identificar a empresa do XML
  ],
  exports: [
    XmlValidatorService,       // Expondo os serviços para serem usados em outros módulos
    XmlParserService,
    EmpresaIdentificadorService,
  ],
})
export class XmlModule {}
