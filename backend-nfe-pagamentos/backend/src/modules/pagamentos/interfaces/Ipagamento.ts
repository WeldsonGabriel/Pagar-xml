export interface IPagamento {
    // Método para processar o pagamento
    processarPagamento(): Promise<boolean>;
  
    // Método para validar os dados do pagamento
    validarDadosPagamento(): boolean;
  
    // Método para retornar informações do pagamento (por exemplo, status ou detalhes)
    obterInformacoesPagamento(): any;
  }
  