// src/modules/pagamentos/pagamento.module.ts
import { Module } from '@nestjs/common';
import { PagamentoController } from './pagamento.controller';
import { PagamentoService } from './services/pagamento.service';
import { PagamentoFactory } from './services/pagamento.factory';
import { IPagamento } from '../interfaces/IPagamento';
import { PixPaymentService } from './services/pix-payment.service';
import { BoletoPaymentService } from './services/boleto-payment.service';
import { CartaoPaymentService } from './services/cartao-payment.service';

@Module({
  imports: [],
  controllers: [PagamentoController],
  providers: [
    PagamentoService,
    PagamentoFactory,
    PixPaymentService,
    BoletoPaymentService,
    CartaoPaymentService,
  ],
})
export class PagamentoModule {}
