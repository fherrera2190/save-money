export interface Product {
  id: string;
  name: string;
  ean: string;
  images: string;
  seller: Seller;
  Price: number;
  ListPrice: number;
}

export interface Seller {
  sellerName: string;
  ofertas: Oferta[];
  sellerLogo: string;
}

export interface Oferta {
  name: string;
  conditions: Conditions;
  effects: Effects;
  __typename: string;
}

export interface Conditions {
  minimumQuantity: number;
  parameters: Parameter[];
  __typename: string;
}

export interface Parameter {
  name: string;
  value: string;
  __typename: string;
}

export interface Effects {
  parameters: Parameter[];
  __typename: string;
}
