// src/modules/pagamentos/services/pagamento.factory.ts
import { Injectable } from '@nestjs/common';
import { PagamentoService } from './pagamento.service';

@Injectable()
export class PagamentoFactory {
  constructor(private readonly pagamentoService: PagamentoService) {}

  escolherPagamento(metodo: string, valor: number): boolean {
    return this.pagamentoService.processarPagamento(metodo, valor);
  }
}
