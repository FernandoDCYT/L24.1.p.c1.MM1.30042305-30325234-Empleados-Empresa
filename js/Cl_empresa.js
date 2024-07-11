export default class Cl_empresa{
    constructor(){
        this.contEmp=0;
        this.contM=0;
        this.contF=0;
    }
    procesarEmpleados(e){
        this.contEmp++
        if(e.sex == "M"){
            this.contM++
        }
        if(e.sex == "F"){
        this.contF++
        }
    }
    calcPorcF(){
        return this.contF/this.contEmp*100;
    }
} 