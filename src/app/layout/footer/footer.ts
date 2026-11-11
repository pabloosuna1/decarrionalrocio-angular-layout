import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="site-footer">

      <div class="footer-main">

        <!-- Identidad de la Hermandad -->
        <div class="footer-brand">
          <div class="footer-brand-mark">R</div>

          <div class="footer-brand-copy">
            <strong>Ilustre y Fervorosa Hermandad del Rocío</strong>
            <span>Carrión de los Céspedes</span>
          </div>

          <p class="footer-description">
            Una Hermandad unida por la fe, la devoción a la Santísima
            Virgen del Rocío y las tradiciones de nuestro pueblo.
          </p>
        </div>

        <!-- Enlaces de interés -->
        <div class="footer-links">
          <h3>Enlaces de interés</h3>

          <a routerLink="/">Inicio</a>
          <a routerLink="/hermandad">La Hermandad</a>
          <a routerLink="/historia">Nuestra historia</a>
          <a routerLink="/cultos">Cultos y actos</a>
          <a routerLink="/romeria">Romería</a>
          <a routerLink="/contacto">Contacto</a>
        </div>

        <!-- Redes sociales -->
        <div class="footer-social">
          <h3>Síguenos</h3>

          <p>
            Mantente al día de la actualidad y las noticias
            de nuestra Hermandad.
          </p>

          <div class="social-icons">

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
              class="social-link"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5"
                  fill="none" stroke="currentColor" stroke-width="2"/>
                <circle cx="12" cy="12" r="4"
                  fill="none" stroke="currentColor" stroke-width="2"/>
                <circle cx="17.5" cy="6.5" r="1.2"
                  fill="currentColor"/>
              </svg>
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="Facebook"
              class="social-link"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M13.5 21v-8h2.7l.4-3h-3.1V8.1
                  c0-.9.3-1.5 1.6-1.5h1.7V3.9
                  c-.3 0-1.3-.1-2.5-.1
                  -2.5 0-4.2 1.5-4.2 4.3V10H7.5v3h2.6v8z"
                  fill="currentColor"/>
              </svg>
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              title="YouTube"
              class="social-link"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M23 7.2a3 3 0 0 0-2.1-2.1
                  C19 4.6 12 4.6 12 4.6
                  s-7 0-8.9.5A3 3 0 0 0 1 7.2
                  C.5 9 .5 12 .5 12s0 3 .5 4.8
                  a3 3 0 0 0 2.1 2.1
                  c1.9.5 8.9.5 8.9.5s7 0 8.9-.5
                  a3 3 0 0 0 2.1-2.1
                  c.5-1.8.5-4.8.5-4.8
                  s0-3-.5-4.8z"
                  fill="currentColor"/>
                <path d="m9.5 15.5 6-3.5-6-3.5z"
                  fill="#650e20"/>
              </svg>
            </a>

          </div>
        </div>

      </div>

      <!-- Franja inferior -->
      <div class="footer-bottom">

        <span>
          © {{ currentYear }} Ilustre y Fervorosa Hermandad
          del Rocío de Carrión de los Céspedes.
        </span>

        <div class="legal-links">
          <a routerLink="/aviso-legal">Aviso legal</a>
          <a routerLink="/privacidad">Privacidad</a>
          <a routerLink="/cookies">Cookies</a>
        </div>

      </div>

    </footer>
  `,

  styles: [`
    :host {
      display: block;
      width: 100%;
    }

    .site-footer {
      background: #650e20;
      color: #fff;
      border-top: 3px solid #d6bd8c;
    }

    /* Zona principal */

    .footer-main {
      max-width: 1450px;
      margin: 0 auto;
      padding: 3.5rem clamp(1.5rem, 5vw, 4rem);
      display: grid;
      grid-template-columns: 1.6fr 1fr 1fr;
      gap: 4rem;
    }

    /* Identidad */

    .footer-brand-mark {
      width: 48px;
      height: 48px;
      margin-bottom: 1.2rem;
      display: grid;
      place-items: center;
      border: 2px solid #d6bd8c;
      border-radius: 50%;
      background: #fff;
      color: #650e20;
      font-family: Georgia, serif;
      font-size: 1.6rem;
      font-weight: 700;
    }

    .footer-brand-copy {
      display: grid;
      gap: .35rem;
    }

    .footer-brand-copy strong {
      font-family: Georgia, 'Times New Roman', serif;
      font-size: 1.05rem;
      line-height: 1.5;
    }

    .footer-brand-copy span {
      color: #d6bd8c;
      font-size: .82rem;
      letter-spacing: .08em;
      text-transform: uppercase;
    }

    .footer-description {
      max-width: 380px;
      margin-top: 1.2rem;
      color: #e5d4bb;
      font-size: .88rem;
      line-height: 1.8;
    }

    /* Enlaces */

    .footer-links h3,
    .footer-social h3 {
      margin: 0 0 1.3rem;
      color: #d6bd8c;
      font-family: Georgia, serif;
      font-size: 1.05rem;
    }

    .footer-links {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: .8rem;
    }

    .footer-links a,
    .legal-links a {
      color: #f2e9df;
      text-decoration: none;
      font-size: .86rem;
      transition: color .2s ease;
    }

    .footer-links a:hover,
    .legal-links a:hover {
      color: #d6bd8c;
    }

    /* Redes sociales */

    .footer-social p {
      max-width: 260px;
      margin: 0;
      color: #e5d4bb;
      font-size: .86rem;
      line-height: 1.7;
    }

    .social-icons {
      display: flex;
      align-items: center;
      gap: .8rem;
      margin-top: 1.4rem;
    }

    .social-link {
      width: 42px;
      height: 42px;
      display: grid;
      place-items: center;
      border: 1px solid rgba(214, 189, 140, .65);
      border-radius: 50%;
      color: #fff;
      transition: all .25s ease;
    }

    .social-link svg {
      width: 19px;
      height: 19px;
    }

    .social-link:hover {
      background: #d6bd8c;
      color: #650e20;
      border-color: #d6bd8c;
      transform: translateY(-3px);
    }

    /* Franja inferior */

    .footer-bottom {
      min-height: 65px;
      padding: 1.2rem clamp(1.5rem, 5vw, 4rem);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1.5rem;
      border-top: 1px solid rgba(255, 255, 255, .16);
      background: #520b1a;
      color: #e5d4bb;
      font-size: .76rem;
    }

    .legal-links {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 1.4rem;
    }

    .legal-links a {
      font-size: .76rem;
      color: #e5d4bb;
    }

    /* Tablets */

    @media (max-width: 900px) {
      .footer-main {
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
      }

      .footer-brand {
        grid-column: 1 / -1;
      }
    }

    /* Móviles */

    @media (max-width: 600px) {
      .footer-main {
        grid-template-columns: 1fr;
        gap: 2.5rem;
        padding: 2.5rem 1.5rem;
      }

      .footer-brand {
        grid-column: auto;
      }

      .footer-bottom {
        align-items: flex-start;
        flex-direction: column;
        gap: 1rem;
        padding: 1.5rem;
        line-height: 1.6;
      }

      .legal-links {
        gap: 1rem;
      }
    }
  `]
})
export class FooterComponent {
  readonly currentYear = new Date().getFullYear();
}
