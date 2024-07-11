export default class Cl_empleados{
    constructor(nombre, sex){
        this.nombre=nombre;
        this.sex=sex;
    }
    set nombre(n){
        this._nombre=n;
    }
    get nombre(){
        return this._nombre;
    }
    set sex(s){
        this._sex=s;
    }
    get sex(){
        return this._sex;
    }

}