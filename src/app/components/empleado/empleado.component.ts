import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Empleado } from '../../interface/Empleado.interface';
import { EmpleadosService } from '../../services/empleados.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['app.component.css'],
})
export class EmpleadoComponent implements OnInit {
   empleado:Empleado = {
      nombre:"",
      email:"",
      puesto:"",
      fecha_nacimiento:"",
      domicilio:"",
      latitud: 19.3665903,
      longitud: -99.1810675,
      skill:[],
  };

    esNuevo : boolean = false;
    id : string = "";
    zoom: number = 16;

  constructor(private _empleadoService: EmpleadosService, 
              private router:Router,
              private activatedRoute:ActivatedRoute) { 
              
    this.activatedRoute.params.subscribe(parametros=>{ 
        this.id = parametros['id'];

        if(this.id !=='new'){
            this._empleadoService.obtenEmpleado(this.id)
            .subscribe(empleado=>this.empleado = empleado);
        }
    }); 
    
}

  ngOnInit() {
  }

    guardar(){
    
    console.log(this.empleado);
    if(this.id=='new'){
        this._empleadoService.nuevoEmpleado(this.empleado)
        .subscribe(data =>{
         this.router.navigate(['/empleados']);
         }),error=> console.log(error);
         
    }else{
        this._empleadoService.editaEmpleado(this.empleado,this.id)
        .subscribe(data =>{
         this.router.navigate(['/empleados']);
         }),error=> console.log(error);
         }
    }
}
