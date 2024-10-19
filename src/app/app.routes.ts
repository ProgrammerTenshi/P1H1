import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { EventosComponent } from './eventos/eventos.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },  // Ruta predeterminada
  { path: 'menu', component: MenuComponent },  // Ruta MENU
  { path: 'contacto', component: ContactoComponent },  // Ruta CONTACTO
  { path: 'nosotros', component: NosotrosComponent },  // Ruta CONTACTO
  { path: 'eventos', component: EventosComponent },  // Ruta CONTACTO
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirige cualquier ruta no encontrada al Home
];
