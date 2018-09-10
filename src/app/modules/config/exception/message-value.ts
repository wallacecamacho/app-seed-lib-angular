export interface MessageValue {
  jsonResponse: string;
  erro: {
    codigoErro: number;
    mensagem: string;
    mensagemException: string;
  };
}
