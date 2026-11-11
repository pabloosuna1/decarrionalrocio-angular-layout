import { Component } from '@angular/core';

@Component({
  selector: 'app-reports-page',
  standalone: true,
  template: `
    <span class="eyebrow">SECCIÓN</span>
    <h1>Informes</h1>
    <p>Esta es una página de ejemplo independiente. Sustituye este contenido por tus informes, gráficas o indicadores.</p>
    <div class="placeholder"><strong>Zona de informes</strong><span>Añade aquí los componentes que necesites.</span></div>
  `,
  styles: [`
    :host { display:block; } .eyebrow { color:#2479bb; font-size:.72rem; font-weight:800; letter-spacing:.12em; }
    h1 { margin:.65rem 0 .7rem; color:#192b43; font-size:2rem; } p { color:#617086; line-height:1.7; }
    .placeholder { min-height:180px; margin-top:1.5rem; padding:2rem; display:grid; align-content:center; gap:.5rem; border:1px dashed #b8c8d9; border-radius:14px; background:#f8fbfe; color:#30445d; }
    .placeholder span { color:#738196; font-size:.9rem; }
  `]
})
export class ReportsPageComponent {}
