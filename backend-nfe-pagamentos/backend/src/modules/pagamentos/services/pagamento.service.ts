// src/modules/pagamentos/services/pagamento.service.ts
import { Injectable } from '@nestjs/common';
import { IPagamento } from '../interfaces/IPagamento';
import { PixPaymentService } from './pix-payment.service';
import { BoletoPaymentService } from '../services/boleto-payment.service';
import { CartaoPaymentService } from './cartao-payment.service';

@Injectable()
export class PagamentoService {
  constructor(
    private readonly pixPaymentService: PixPaymentService,
    private readonly boletoPaymentService: BoletoPaymentService,
    private readonly cartaoPaymentService: CartaoPaymentService
  ) {}

  processarPagamento(metodoPagamento: string, valor: number): boolean {
    if (metodoPagamento === 'pix') {
      return this.pixPaymentService.processarPagamento(valor);
    }
    if (metodoPagamento === 'boleto') {
      return this.boletoPaymentService.processarPagamento(valor);
    }
    if (metodoPagamento === 'cartao') {
      return this.cartaoPaymentService.processarPagamento(valor);
    }
    return false;
  }
}
