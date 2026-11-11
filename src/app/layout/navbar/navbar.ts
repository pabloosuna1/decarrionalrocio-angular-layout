import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="main-nav" aria-label="Navegación principal">
      <div class="nav-inner">
        <a routerLink="/" [routerLinkActiveOptions]="{ exact: true }" routerLinkActive="active">Inicio</a>
        <a routerLink="/informes" routerLinkActive="active">Informes</a>
        <a routerLink="/clientes" routerLinkActive="active">Clientes</a>
        <a routerLink="/configuracion" routerLinkActive="active">Configuración</a>
      </div>
    </nav>
  `,
  styles: [`
    .main-nav { background:#fff; border-bottom:1px solid #dce3ec; box-shadow:0 2px 7px rgb(25 45 70 / 4%); }
    .nav-inner { width:min(100%, 1200px); min-height:54px; margin:0 auto; padding:0 clamp(1rem, 4vw, 3rem); display:flex; align-items:stretch; gap:.35rem; overflow-x:auto; }
    a { position:relative; display:flex; align-items:center; padding:0 1rem; color:#536276; text-decoration:none; white-space:nowrap; font-size:.9rem; font-weight:600; transition:color .18s ease, background .18s ease; }
    a:hover { color:#1769aa; background:#f5f8fc; }
    a.active { color:#1769aa; }
    a.active::after { position:absolute; right:1rem; bottom:0; left:1rem; height:3px; border-radius:3px 3px 0 0; background:#2684ce; content:''; }
  `]
})
export class NavbarComponent {}
