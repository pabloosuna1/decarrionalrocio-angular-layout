import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="main-nav" aria-label="Navegación principal">

      <div class="nav-inner">

        <!-- Botón menú móvil -->
        <button
          class="menu-toggle"
          type="button"
          [class.open]="menuOpen"
          [attr.aria-expanded]="menuOpen"
          aria-label="Abrir o cerrar menú"
          (click)="menuOpen = !menuOpen"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <!-- Navegación -->
        <div class="nav-links" [class.open]="menuOpen">

          <a
            routerLink="/"
            [routerLinkActiveOptions]="{ exact: true }"
            routerLinkActive="active"
            (click)="closeMenu()"
          >
            Inicio
          </a>

          <a
            routerLink="/hermandad"
            routerLinkActive="active"
            (click)="closeMenu()"
          >
            Hermandad
          </a>

          <a
            routerLink="/informes"
            routerLinkActive="active"
            (click)="closeMenu()"
          >
            Informes
          </a>

          <a
            routerLink="/clientes"
            routerLinkActive="active"
            (click)="closeMenu()"
          >
            Clientes
          </a>

          <a
            routerLink="/configuracion"
            routerLinkActive="active"
            (click)="closeMenu()"
          >
            Configuración
          </a>

        </div>

      </div>
    </nav>
  `,

  styles: [`
    :host {
      display: block;
      position: relative;
      z-index: 90;
    }

    .main-nav {
      background: #faf7f1;
      border-bottom: 1px solid #e6ddcf;
      box-shadow: 0 3px 10px rgba(70, 30, 30, .06);
    }

    .nav-inner {
      width: min(100%, 1450px);
      min-height: 58px;
      margin: 0 auto;
      padding: 0 clamp(1rem, 5vw, 4rem);
      display: flex;
      align-items: stretch;
      justify-content: center;
    }

    /* Enlaces de navegación */

    .nav-links {
      display: flex;
      align-items: stretch;
      justify-content: center;
      gap: .5rem;
    }

    .nav-links a {
      position: relative;
      display: flex;
      align-items: center;
      padding: 0 1.4rem;
      color: #650e20;
      text-decoration: none;
      white-space: nowrap;
      font-family: Georgia, 'Times New Roman', serif;
      font-size: .95rem;
      font-weight: 600;
      transition: color .2s ease, background .2s ease;
    }

    .nav-links a:hover {
      color: #a32b43;
      background: rgba(214, 189, 140, .12);
    }

    /* Elemento activo */

    .nav-links a.active {
      color: #650e20;
      background: rgba(214, 189, 140, .13);
    }

    .nav-links a.active::after {
      position: absolute;
      right: 1.4rem;
      bottom: 0;
      left: 1.4rem;
      height: 3px;
      border-radius: 3px 3px 0 0;
      background: #b9955b;
      content: '';
    }

    /* Botón hamburguesa */

    .menu-toggle {
      display: none;
      width: 42px;
      height: 42px;
      padding: 9px;
      border: 1px solid #e1d2bd;
      border-radius: 6px;
      background: transparent;
      cursor: pointer;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 5px;
    }

    .menu-toggle span {
      display: block;
      width: 20px;
      height: 2px;
      border-radius: 2px;
      background: #650e20;
      transition: transform .2s ease, opacity .2s ease;
    }

    .menu-toggle.open span:nth-child(1) {
      transform: translateY(7px) rotate(45deg);
    }

    .menu-toggle.open span:nth-child(2) {
      opacity: 0;
    }

    .menu-toggle.open span:nth-child(3) {
      transform: translateY(-7px) rotate(-45deg);
    }

    /* Tablets y móviles */

    @media (max-width: 700px) {

      .nav-inner {
        min-height: 58px;
        padding: .5rem 1rem;
        justify-content: flex-end;
      }

      .menu-toggle {
        display: flex;
      }

      .nav-links {
        position: absolute;
        top: 100%;
        right: 0;
        left: 0;
        display: none;
        flex-direction: column;
        align-items: stretch;
        gap: 0;
        background: #faf7f1;
        border-top: 1px solid #e6ddcf;
        border-bottom: 2px solid #d6bd8c;
        box-shadow: 0 8px 15px rgba(0, 0, 0, .10);
      }

      .nav-links.open {
        display: flex;
      }

      .nav-links a {
        min-height: 50px;
        padding: 0 1.5rem;
        border-bottom: 1px solid #eee6da;
      }

      .nav-links a.active {
        background: rgba(214, 189, 140, .18);
      }

      .nav-links a.active::after {
        top: 10px;
        bottom: 10px;
        left: 0;
        right: auto;
        width: 3px;
        height: auto;
        border-radius: 0 3px 3px 0;
      }

      .nav-links a:last-child {
        border-bottom: none;
      }
    }
  `]
})
export class NavbarComponent {

  menuOpen = false;

  closeMenu(): void {
    this.menuOpen = false;
  }

}
