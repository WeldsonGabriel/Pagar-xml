// src/modules/xml/services/xml-parser.service.ts
import { Injectable } from '@nestjs/common';
import * as xml2js from 'xml2js';

@Injectable()
export class XmlParserService {
  parseXml(xml: string): any {
    const parser = new xml2js.Parser();
    let parsedData: any = {};
    parser.parseString(xml, (err, result) => {
      if (err) {
        throw new Error('Erro ao parsear XML');
      }
      parsedData = result; // Aqui você deve extrair os dados relevantes do XML
    });
    return parsedData;
  }
}
