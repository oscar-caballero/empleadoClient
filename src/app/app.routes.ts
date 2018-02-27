import {RouterModule,Routes} from '@angular/router';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { EmpleadosComponentComponent } from './components/empleados/empleados-component.component';

const APP_ROUTES:Routes=[
    {path:'empleados', component: EmpleadosComponentComponent},
    {path:'empleado/:id', component:EmpleadoComponent},
    {path:'**', pathMatch:'full', redirectTo:'empleados'},
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);