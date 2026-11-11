import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header class="site-header">
      <a class="brand" routerLink="/" aria-label="Ir al inicio">
        <span class="brand-mark">A</span>
        <span class="brand-copy">
          <strong>Angular Starter</strong>
          <small>Panel de aplicación</small>
        </span>
      </a>
      <div class="header-right">
        <span class="status-dot"></span>
        <span class="header-caption">Entorno de trabajo</span>
        <span class="avatar" aria-label="Usuario">U</span>
      </div>
    </header>
  `,
  styles: [`
    .site-header { min-height: 76px; padding: 0 clamp(1rem, 4vw, 3rem); display:flex; align-items:center; justify-content:space-between; gap:1rem; background:#17263c; color:#fff; }
    .brand { display:flex; align-items:center; gap:.8rem; color:inherit; text-decoration:none; }
    .brand-mark { width:40px; height:40px; display:grid; place-items:center; border-radius:12px; background:#65a6e8; color:#10243d; font-size:1.35rem; font-weight:800; }
    .brand-copy { display:grid; gap:2px; }
    .brand-copy strong { font-size:1rem; letter-spacing:.01em; }
    .brand-copy small, .header-caption { color:#b8c7d9; font-size:.78rem; }
    .header-right { display:flex; align-items:center; gap:.6rem; }
    .status-dot { width:8px; height:8px; border-radius:50%; background:#65d6a2; }
    .avatar { width:34px; height:34px; margin-left:.8rem; display:grid; place-items:center; border:1px solid #52647a; border-radius:50%; background:#30435d; font-size:.85rem; font-weight:700; }
    @media (max-width:520px) { .header-caption, .status-dot { display:none; } }
  `]
})
export class HeaderComponent {}
