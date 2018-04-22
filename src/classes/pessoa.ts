export class Pessoa{
    private _Codigo:number;
    private _Nome: String;

    constructor(){
        }
        get nome() : String{
            return this._Nome;
        }
        get codigo() : number {
            return this._Codigo
        }

        set nome(p:String)
        {
            this._Nome = p;
        }

        set codigo(p:number)
        {
            this._Codigo = p;
        }
    
}