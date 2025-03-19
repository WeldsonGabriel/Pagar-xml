// src/modules/pagamentos/pagamento.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { PagamentoFactory } from './services/pagamento.factory';

@Controller('pagamento')
export class PagamentoController {
  constructor(private readonly pagamentoFactory: PagamentoFactory) {}

  @Post()
  async processarPagamento(@Body() pagamentoDto: { metodoPagamento: string; valor: number }): Promise<boolean> {
    const { metodoPagamento, valor } = pagamentoDto;
    return this.pagamentoFactory.escolherPagamento(metodoPagamento, valor);
  }
}
