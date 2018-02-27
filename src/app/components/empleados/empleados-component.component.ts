import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../../services/empleados.service';

@Component({
  selector: 'app-empleados-component',
  templateUrl: './empleados-component.component.html',
})
export class EmpleadosComponentComponent implements OnInit {
  
  empleados:any[] =[];

  constructor(private _empleadosService:EmpleadosService) {
    this._empleadosService.obtenTodos()
    .subscribe(data=>{
    console.log(data);
    this.empleados = data;
    });
 }

  ngOnInit() {
  }
    borraEmpleado(key$:string,position:number){
    this._empleadosService.eliminaEmpleado(key$)
    .subscribe(data=>{
        if(data.status!=200){
            console.log(data);
        }else{
            delete this.empleados[position];
        }
    });
    }
}
