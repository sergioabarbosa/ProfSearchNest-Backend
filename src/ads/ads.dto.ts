// anuncios.dto.ts
export class CreateAnuncioDto {
  title: string;
  description: string;
  user: string; // Adicione a propriedade para associar o anúncio a um usuário
  image?: string;
  // Outros campos necessários para o anúncio
}

export class UpdateAnuncioDto {
  title?: string;
  description?: string;
  image?: string;
  user?: string; // Adicione a propriedade para associar o anúncio a um usuário na atualização
  // Outros campos necessários para atualização do anúncio
}
