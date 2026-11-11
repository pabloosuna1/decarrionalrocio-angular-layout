import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="site-footer">
      <span>© {{ currentYear }} Angular Starter</span>
      <span>Plantilla base de aplicación - By Pablo Osuna Pérez</span>
    </footer>
  `,
  styles: [`
    .site-footer { min-height:58px; padding:1rem clamp(1rem, 4vw, 3rem); display:flex; align-items:center; justify-content:space-between; gap:1rem; background:#17263c; color:#b8c7d9; font-size:.78rem; }
    @media (max-width:520px) { .site-footer { align-items:flex-start; flex-direction:column; gap:.35rem; } }
  `]
})
export class FooterComponent {
  readonly currentYear = new Date().getFullYear();
}
