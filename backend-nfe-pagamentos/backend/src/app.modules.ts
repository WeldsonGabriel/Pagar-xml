// src/app.module.ts
import { Module } from '@nestjs/common';
import { XmlModule } from './modules/xml/xml.module';
import { PagamentoModule } from './modules/pagamentos/pagamento.module';

@Module({
  imports: [XmlModule, PagamentoModule],
})
export class AppModule {}
