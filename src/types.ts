export type Service  = {
  id: number,
  head: number,
  name: string,
  node: number,
  price: number,
  sorthead: number,
}

export type Services = Array<Service>;

export type APIData = {
  services: Services;
}