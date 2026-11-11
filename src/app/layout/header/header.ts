import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header class="site-header">
      <a class="brand" routerLink="/" aria-label="Ir al inicio">
        <span class="brand-mark">R</span>

        <span class="brand-copy">
          <strong>De Carrión al Rocío</strong>
          <small>Hermandad del Rocío de Carrión de los Céspedes</small>
        </span>
      </a>
    </header>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
      position: relative;
      z-index: 100;
    }

    .site-header {
      min-height: 88px;
      padding: .8rem clamp(1rem, 5vw, 4rem);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
      background: #650e20;
      color: #fff;
      border-bottom: 3px solid #c4a36b;
      box-shadow: 0 3px 12px rgba(0, 0, 0, .12);
    }

    /* Identidad de la Hermandad */

    .brand {
      display: flex;
      align-items: center;
      gap: .9rem;
      color: inherit;
      text-decoration: none;
      flex-shrink: 0;
    }

    .brand-mark {
      width: 54px;
      height: 54px;
      display: grid;
      place-items: center;
      border: 2px solid #d6bd8c;
      border-radius: 50%;
      background: #fff;
      color: #650e20;
      font-family: Georgia, serif;
      font-size: 1.8rem;
      font-weight: 700;
    }

    .brand-copy {
      display: grid;
      gap: 4px;
    }

    .brand-copy strong {
      font-family: Georgia, 'Times New Roman', serif;
      font-size: 1.12rem;
      letter-spacing: .015em;
      font-weight: 700;
    }

    .brand-copy small {
      color: #e5d4bb;
      font-size: .8rem;
      letter-spacing: .07em;
      text-transform: uppercase;
    }

    /* Lema institucional */

    .header-right {
      display: flex;
      align-items: center;
      flex-shrink: 0;
    }

    .header-caption {
      display: flex;
      align-items: center;
      gap: .5rem;
      color: #e5d4bb;
      font-family: Georgia, serif;
      font-size: .85rem;
      font-style: italic;
      white-space: nowrap;
    }

    .status-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #d6bd8c;
    }

    /* Adaptación a móviles */

    @media (max-width: 600px) {
      .site-header {
        padding: 1rem;
        gap: 1rem;
      }

      .brand-mark {
        width: 46px;
        height: 46px;
        font-size: 1.5rem;
      }

      .brand-copy strong {
        font-size: .9rem;
      }

      .brand-copy small {
        font-size: .68rem;
      }

    }
  `]
})
export class HeaderComponent {}
