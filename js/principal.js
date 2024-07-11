import Cl_ingreso from "./Cl_empresa.js"
import Cl_empleados from "./Cl_empleados.js"
import Cl_empresa from "./Cl_empresa.js";

let e1 = new Cl_empleados("Mary", "F");
let e2 = new Cl_empleados("Jose", "M");
let e3 = new Cl_empleados("Carlos", "M");
let e4 = new Cl_empleados("Pedro", "M");

let empresa= new Cl_empresa();

empresa.procesarEmpleados(e1);
empresa.procesarEmpleados(e2);
empresa.procesarEmpleados(e3);
empresa.procesarEmpleados(e4);

let salida = document.getElementById("salida");

salida.innerHTML=`
Cantidad de Hombres que trabajan en la empresa: ${empresa.contM}<br>
Porcentaje de mujeres que trabajan en la empresa: ${empresa.calcPorcF()}%
`