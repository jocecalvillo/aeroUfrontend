
export class PrecioAterrizajeMex{

    constructor(
        public aterrizaje:string,
        public match:string,
        public nacInt:string,
        public horario:string,
        public precio:number,
        public uid:string,
        public idHistorico:string,
        public usuario:string
    ){}

}

export class PrecioAterrizajeMexForm{

    constructor(
        public aterrizaje?:string,
        public match?:string,
        public nacInt?:string,
        public horario?:string,
        public precio?:number,
        public idHistorico?:string,
        public usuario?:string
    ){}

}

export interface CargaPrecioAterrizajeMex{
    total:number;
    precios: PrecioAterrizajeMex[];
}