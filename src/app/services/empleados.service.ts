import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Empleado} from '../interface/Empleado.interface';
import 'rxjs/Rx';

@Injectable()
export class EmpleadosService {
    // URL : string = "https://pruebatest-af704.firebaseio.com/empleado";
       URL :  string ="http://localhost/apiEmpleado/public/api/empleado";
  
constructor(private http:Http) { }

    nuevoEmpleado(empleado:Empleado){
        let urlNuevo = this.URL
        let body = JSON.stringify(empleado);
        let headers = new Headers({
            'Content-type' : 'application/json',
        });

        return this.http.post(urlNuevo,body,{headers})
                .map(res=>{
                return res.json();
                });
    }

    editaEmpleado(empleado:Empleado, key$:string){
        
        //let urlEdita = this.URL + '/' +  key$ + '.json';
        let urlEdita = this.URL + '/' +  key$

        let body = JSON.stringify(empleado);
        let headers = new Headers({
            'Content-type' : 'application/json'
        });
        return this.http.put(urlEdita,body,{headers})
                .map(res=>{
                return res.json();
                });
    }

    obtenEmpleado(key$:string){
    //    let url = this.URL + '/' +  key$ + '.json';
        let url = this.URL + '/' +  key$;
        return this.http.get(url).map(res=>res.json());
    }

    obtenTodos(){
        let urlTodos = this.URL;
        return this.http.get(urlTodos).map(res=>res.json());
    
    }

    eliminaEmpleado(key$){
    //let urlDel = this.URL + '/'  + key$ +'.json';
    let urlDel = this.URL + '/'  + key$;
    return this.http.delete(urlDel)
                .map(res=>{
                return res;
                });
    }
}
