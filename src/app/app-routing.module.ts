import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login-cliente',
    pathMatch: 'full'
  },
  {
    path: 'login-cliente',
    loadChildren: () => import('./pages/login-cliente/login-cliente.module').then( m => m.LoginClientePageModule)
  },
  {
    path: 'crear-cuenta-cliente',
    loadChildren: () => import('./pagesCliente/crear-cuenta-cliente/crear-cuenta-cliente.module').then( m => m.CrearCuentaClientePageModule)
  },
  {
    path: 'crear-cuenta-conductor',
    loadChildren: () => import('./pagesConductor/crear-cuenta-conductor/crear-cuenta-conductor.module').then( m => m.CrearCuentaConductorPageModule)
  },
  {
    path: 'recuperar-pass-cliente',
    loadChildren: () => import('./pagesCliente/recuperar-pass-cliente/recuperar-pass-cliente.module').then( m => m.RecuperarPassClientePageModule)
  },
  {
    path: 'mapa-conductor',
    loadChildren: () => import('./pages/mapa-conductor/mapa-conductor.module').then( m => m.MapaConductorPageModule)
  },
  {
    path: 'modificar-conductor',
    loadChildren: () => import('./pages/modificar-conductor/modificar-conductor.module').then( m => m.ModificarConductorPageModule)
  },
  {
    path: 'viajes-disponible',
    loadChildren: () => import('./pagesCliente/viajes-disponible/viajes-disponible.module').then( m => m.ViajesDisponiblePageModule)
  },
  {
    path: 'solicitud-viaje',
    loadChildren: () => import('./pagesConductor/solicitud-viaje/solicitud-viaje.module').then( m => m.SolicitudViajePageModule)
  },
  {
    path: 'finalizar-viaje',
    loadChildren: () => import('./pagesCliente/finalizar-viaje/finalizar-viaje.module').then( m => m.FinalizarViajePageModule)

  },
  {
    path: 'finalizar-viaje-cliente',
    loadChildren: () => import('./pagesCliente/finalizar-viaje-cliente/finalizar-viaje-cliente.module').then( m => m.FinalizarViajeClientePageModule)
  },
  {
    path: 'comentario-conductor',
    loadChildren: () => import('./pagesConductor/comentario-conductor/comentario-conductor.module').then( m => m.ComentarioConductorPageModule)
  },
  {
    path: 'inicio-cliente',
    loadChildren: () => import('./pagesCliente/inicio-cliente/inicio-cliente.module').then( m => m.InicioClientePageModule)
  },
  {
    path: 'inicio-conductor',
    loadChildren: () => import('./pagesConductor/inicio-conductor/inicio-conductor.module').then( m => m.InicioConductorPageModule)
  },
  {
    path: 'inicio-conductor',
    loadChildren: () => import('./pagesConductor/inicio-conductor/inicio-conductor.module').then( m => m.InicioConductorPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'confirmar-pass',
    loadChildren: () => import('./pages/confirmar-pass/confirmar-pass.module').then( m => m.ConfirmarPassPageModule)
  },
  {
    path: 'cambiar-pass',
    loadChildren: () => import('./pages/cambiar-pass/cambiar-pass.module').then( m => m.CambiarPassPageModule)
  },
  {
    path: 'ver-auto',
    loadChildren: () => import('./pages/ver-auto/ver-auto.module').then( m => m.VerAutoPageModule)
  },
  {
    path: 'crear-viaje',
    loadChildren: () => import('./pages/crear-viaje/crear-viaje.module').then( m => m.CrearViajePageModule)
  },
  {
    path: 'perfilcliente',
    loadChildren: () => import('./pages/perfilcliente/perfilcliente.module').then( m => m.PerfilclientePageModule)
  },
  {

    path: 'ver-viajec',
    loadChildren: () => import('./pages/ver-viajec/ver-viajec.module').then( m => m.VerViajecPageModule)
  },
  {
    path: 'modificar-cliente',
    loadChildren: () => import('./pages/modificar-cliente/modificar-cliente.module').then( m => m.ModificarClientePageModule)

  },  {
    path: 'viajeencurso',
    loadChildren: () => import('./pages/viajeencurso/viajeencurso.module').then( m => m.ViajeencursoPageModule)
  },
  {
    path: 'sacar-foto-p',
    loadChildren: () => import('./pages/sacar-foto-p/sacar-foto-p.module').then( m => m.SacarFotoPPageModule)
  },
  {
    path: 'sacar-foto-c',
    loadChildren: () => import('./pages/sacar-foto-c/sacar-foto-c.module').then( m => m.SacarFotoCPageModule)
  },
  {
    path: 'ver-viaje-conductor',
    loadChildren: () => import('./pages/ver-viaje-conductor/ver-viaje-conductor.module').then( m => m.VerViajeConductorPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
