import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  template: `
    <main class="home-page">

      <!-- HERO / PORTADA PRINCIPAL -->
      <section class="hero">

        <div class="hero-overlay"></div>

        <div class="hero-content">
          <span class="hero-eyebrow">
            CARRIÓN DE LOS CÉSPEDES · SEVILLA
          </span>

          <div class="hero-divider">
            <span></span>
            <span class="divider-star">✦</span>
            <span></span>
          </div>

          <h1>
            Ilustre y Fervorosa
            <strong>Hermandad del Rocío</strong>
          </h1>

          <p class="hero-location">
            Carrión de los Céspedes
          </p>

          <p class="hero-description">
            Una Hermandad unida por la fe, la devoción a la
            Santísima Virgen del Rocío y el amor a nuestras tradiciones.
          </p>

          <div class="hero-actions">
            <a href="#hermandad" class="btn-primary">
              Conoce nuestra Hermandad
            </a>

            <a href="#romeria" class="btn-secondary">
              Nuestra Romería
            </a>
          </div>
        </div>

        <div class="hero-decoration" aria-hidden="true">
          <div class="decoration-outer">
            <div class="decoration-inner">
              <span class="decoration-letter">R</span>
              <span class="decoration-star">✦</span>
            </div>
          </div>
          <span class="decoration-caption">
            Carrión de los Céspedes
          </span>
        </div>

        <a href="#hermandad" class="scroll-indicator"
          aria-label="Desplazarse hacia abajo">
          <span></span>
          Descubre nuestra Hermandad
        </a>

      </section>


      <!-- PRESENTACIÓN -->
      <section class="presentation section-container" id="hermandad">

        <div class="presentation-label">
          <span class="label-line"></span>
          NUESTRA HERMANDAD
          <span class="label-line"></span>
        </div>

        <h2>
          Una devoción que nos une,
          <span>una fe que nos guía.</span>
        </h2>

        <p class="presentation-text">
          La Ilustre y Fervorosa Hermandad del Rocío de Carrión
          de los Céspedes representa el sentimiento rociero de
          nuestro pueblo y la devoción compartida hacia la
          Santísima Virgen del Rocío.

          <br><br>

          Un espacio de encuentro para los hermanos, devotos
          y todas aquellas personas que desean conocer nuestra
          historia, nuestras tradiciones y nuestra forma de vivir
          la fe rociera.
        </p>

        <a href="#historia" class="text-link">
          Descubre nuestra historia
          <span>→</span>
        </a>

      </section>


      <!-- SECCIONES DESTACADAS -->
      <section class="featured-section">

        <div class="section-container">

          <div class="section-heading">
            <div>
              <span class="section-eyebrow">CONOCE NUESTRA CORPORACIÓN</span>
              <h2>Un camino de fe y devoción</h2>
            </div>

            <p>
              Descubre los diferentes aspectos de la vida
              de nuestra Hermandad.
            </p>
          </div>

          <div class="featured-grid">

            <article class="feature-card history-card" id="historia">
              <div class="feature-number">01</div>
              <div class="feature-content">
                <span>CONÓCENOS</span>
                <h3>Nuestra historia</h3>
                <p>
                  Conoce la trayectoria, las raíces y el
                  sentimiento rociero de nuestra Hermandad.
                </p>
                <a href="#historia" class="feature-link">
                  Descubrir <span>→</span>
                </a>
              </div>
            </article>

            <article class="feature-card cults-card" id="cultos">
              <div class="feature-number">02</div>
              <div class="feature-content">
                <span>VIDA DE HERMANDAD</span>
                <h3>Cultos y actos</h3>
                <p>
                  Consulta los cultos, celebraciones y
                  actividades de nuestra corporación.
                </p>
                <a href="#cultos" class="feature-link">
                  Descubrir <span>→</span>
                </a>
              </div>
            </article>

            <article class="feature-card pilgrimage-card" id="romeria">
              <div class="feature-number">03</div>
              <div class="feature-content">
                <span>CAMINO DEL ROCÍO</span>
                <h3>Nuestra Romería</h3>
                <p>
                  Vive con nosotros el camino, la convivencia
                  y la devoción hacia la Blanca Paloma.
                </p>
                <a href="#romeria" class="feature-link">
                  Descubrir <span>→</span>
                </a>
              </div>
            </article>

          </div>

        </div>
      </section>


      <!-- ACTUALIDAD -->
      <section class="news-section" id="actualidad">

        <div class="section-container">

          <div class="section-heading news-heading">
            <div>
              <span class="section-eyebrow">MANTENTE INFORMADO</span>
              <h2>Actualidad de la Hermandad</h2>
            </div>

            <p>
              Noticias, convocatorias y acontecimientos
              de nuestra vida de Hermandad.
            </p>
          </div>

          <div class="news-grid">

            <article class="news-card">
              <div class="news-image news-image-one">
                <span class="news-category">HERMANDAD</span>
                <span class="news-placeholder">✦</span>
              </div>
              <div class="news-body">
                <span class="news-date">ACTUALIDAD</span>
                <h3>La vida de nuestra Hermandad</h3>
                <p>
                  Un espacio para compartir las noticias
                  y novedades de nuestra corporación.
                </p>
                <a href="#actualidad">Más información →</a>
              </div>
            </article>

            <article class="news-card">
              <div class="news-image news-image-two">
                <span class="news-category">CULTOS</span>
                <span class="news-placeholder">✧</span>
              </div>
              <div class="news-body">
                <span class="news-date">CONVOCATORIAS</span>
                <h3>Cultos y celebraciones</h3>
                <p>
                  Consulta las convocatorias y celebraciones
                  organizadas por la Hermandad.
                </p>
                <a href="#cultos">Más información →</a>
              </div>
            </article>

            <article class="news-card">
              <div class="news-image news-image-three">
                <span class="news-category">ROMERÍA</span>
                <span class="news-placeholder">✦</span>
              </div>
              <div class="news-body">
                <span class="news-date">TRADICIONES</span>
                <h3>El sentimiento rociero</h3>
                <p>
                  Tradición, convivencia y devoción
                  en el camino hacia la Blanca Paloma.
                </p>
                <a href="#romeria">Más información →</a>
              </div>
            </article>

          </div>

        </div>
      </section>


      <!-- BLOQUE DEVOCIONAL -->
      <section class="devotion-section">

        <div class="devotion-overlay"></div>

        <div class="devotion-content">
          <span class="devotion-symbol">✦</span>

          <span class="section-eyebrow">
            CARRIÓN DE LOS CÉSPEDES
          </span>

          <h2>
            Siempre caminando
            <span>junto a la Blanca Paloma.</span>
          </h2>

          <p>
            Que la Santísima Virgen del Rocío siga guiando
            nuestros pasos y fortaleciendo los lazos de
            unión entre todos los hermanos.
          </p>

          <span class="devotion-signature">
            Hermandad del Rocío de Carrión de los Céspedes
          </span>
        </div>

      </section>


      <!-- CONTACTO -->
      <section class="contact-section" id="contacto">
        <div class="contact-content">
          <div>
            <span class="section-eyebrow">ESTAMOS A TU DISPOSICIÓN</span>
            <h2>¿Quieres conocer nuestra Hermandad?</h2>
            <p>
              Acércate a nuestra corporación y descubre
              nuestra historia, nuestra fe y nuestras tradiciones.
            </p>
          </div>

          <a href="mailto:" class="contact-button">
            Contactar con la Hermandad
            <span>→</span>
          </a>
        </div>
      </section>

    </main>
  `,

  styles: [`
    :host {
      display: block;
      --burgundy: #650e20;
      --burgundy-dark: #420916;
      --burgundy-light: #8b2940;
      --gold: #c4a36b;
      --gold-light: #e5d4bb;
      --ivory: #faf7f1;
      --text: #3d3030;
      --muted: #756969;
    }

    * {
      box-sizing: border-box;
    }

    .home-page {
      width: 100%;
      overflow: hidden;
      background: #fff;
      color: var(--text);
    }

    .section-container {
      width: min(1200px, 100% - 3rem);
      margin: 0 auto;
    }

    /* HERO */

    .hero {
      position: relative;
      min-height: 570px;
      display: flex;
      align-items: center;
      padding: 5rem clamp(1.5rem, 8vw, 8rem);
      overflow: hidden;
      background:
        radial-gradient(ellipse at 85% 50%, #8b2940 0%, transparent 42%),
        linear-gradient(115deg, #420916 0%, #650e20 55%, #791b32 100%);
      color: #fff;
    }

    .hero::before {
      content: '';
      position: absolute;
      width: 500px;
      height: 500px;
      right: 8%;
      top: 50%;
      transform: translateY(-50%);
      border: 1px solid rgba(214,189,140,.18);
      border-radius: 50%;
    }

    .hero::after {
      content: '';
      position: absolute;
      width: 390px;
      height: 390px;
      right: calc(8% + 55px);
      top: 50%;
      transform: translateY(-50%);
      border: 1px solid rgba(214,189,140,.14);
      border-radius: 50%;
    }

    .hero-overlay {
      position: absolute;
      inset: 0;
      background-image: repeating-linear-gradient(
        135deg,
        transparent,
        transparent 60px,
        rgba(255,255,255,.015) 61px,
        transparent 62px
      );
    }

    .hero-content {
      position: relative;
      z-index: 2;
      max-width: 720px;
    }

    .hero-eyebrow,
    .section-eyebrow {
      color: var(--gold);
      font-size: .76rem;
      font-weight: 800;
      letter-spacing: .18em;
    }

    .hero-divider {
      display: flex;
      align-items: center;
      gap: .8rem;
      width: 150px;
      margin: 1.6rem 0;
      color: var(--gold);
    }

    .hero-divider span:not(.divider-star) {
      height: 1px;
      flex: 1;
      background: var(--gold);
    }

    .divider-star {
      font-size: 1rem;
    }

    .hero h1 {
      margin: 0;
      max-width: 750px;
      font-family: Georgia, 'Times New Roman', serif;
      font-size: clamp(2.5rem, 5.5vw, 4.6rem);
      font-weight: 400;
      line-height: 1.12;
      letter-spacing: -.035em;
    }

    .hero h1 strong {
      display: block;
      color: #e8d1a5;
      font-weight: 700;
    }

    .hero-location {
      margin: 1rem 0 0;
      color: var(--gold);
      font-family: Georgia, serif;
      font-size: 1.35rem;
      font-style: italic;
    }

    .hero-description {
      max-width: 530px;
      margin: 1.5rem 0 2rem;
      color: #eadde0;
      font-size: 1rem;
      line-height: 1.8;
    }

    .hero-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .btn-primary,
    .btn-secondary {
      min-height: 48px;
      padding: .85rem 1.4rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      text-decoration: none;
      font-size: .88rem;
      font-weight: 700;
      transition: .25s ease;
    }

    .btn-primary {
      background: var(--gold);
      color: var(--burgundy-dark);
    }

    .btn-primary:hover {
      background: #e3c997;
      transform: translateY(-2px);
    }

    .btn-secondary {
      border: 1px solid rgba(255,255,255,.55);
      color: #fff;
    }

    .btn-secondary:hover {
      background: rgba(255,255,255,.12);
    }

    /* Elemento ornamental del hero */

    .hero-decoration {
      position: absolute;
      z-index: 1;
      right: 13%;
      top: 50%;
      transform: translateY(-50%);
      width: 290px;
      text-align: center;
    }

    .decoration-outer {
      width: 250px;
      height: 310px;
      margin: 0 auto;
      padding: 15px;
      border: 1px solid rgba(214,189,140,.7);
      border-radius: 48% 48% 8px 8px;
      display: grid;
      place-items: center;
    }

    .decoration-inner {
      position: relative;
      width: 100%;
      height: 100%;
      border: 1px solid rgba(214,189,140,.35);
      border-radius: 48% 48% 5px 5px;
      display: grid;
      place-items: center;
      background: rgba(255,255,255,.035);
    }

    .decoration-letter {
      font-family: Georgia, serif;
      font-size: 8rem;
      font-style: italic;
      color: rgba(229,212,187,.85);
    }

    .decoration-star {
      position: absolute;
      bottom: 35px;
      color: var(--gold);
      font-size: 1.6rem;
    }

    .decoration-caption {
      display: block;
      margin-top: 1rem;
      color: var(--gold-light);
      font-family: Georgia, serif;
      font-size: .85rem;
      font-style: italic;
      letter-spacing: .08em;
    }

    .scroll-indicator {
      position: absolute;
      bottom: 1.5rem;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      align-items: center;
      gap: .7rem;
      color: #e5d4bb;
      text-decoration: none;
      font-size: .7rem;
      letter-spacing: .06em;
    }

    .scroll-indicator span {
      width: 18px;
      height: 28px;
      border: 1px solid var(--gold);
      border-radius: 12px;
      position: relative;
    }

    .scroll-indicator span::after {
      content: '';
      position: absolute;
      top: 5px;
      left: 7px;
      width: 2px;
      height: 6px;
      background: var(--gold);
      border-radius: 2px;
    }

    /* PRESENTACIÓN */

    .presentation {
      padding: 6rem 1rem;
      text-align: center;
    }

    .presentation-label {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      color: var(--burgundy);
      font-size: .73rem;
      font-weight: 800;
      letter-spacing: .16em;
    }

    .label-line {
      width: 35px;
      height: 1px;
      background: var(--gold);
    }

    .presentation h2,
    .section-heading h2,
    .contact-content h2 {
      margin: 1.3rem 0;
      font-family: Georgia, serif;
      font-size: clamp(2rem, 4vw, 2.8rem);
      font-weight: 400;
      line-height: 1.25;
      color: var(--burgundy-dark);
    }

    .presentation h2 span {
      display: block;
      color: #a17b49;
      font-style: italic;
    }

    .presentation-text {
      max-width: 760px;
      margin: 1.5rem auto;
      color: var(--muted);
      font-size: 1rem;
      line-height: 1.9;
    }

    .text-link {
      display: inline-flex;
      align-items: center;
      gap: .6rem;
      margin-top: 1rem;
      color: var(--burgundy);
      font-size: .9rem;
      font-weight: 700;
      text-decoration: none;
    }

    .text-link span {
      color: var(--gold);
      font-size: 1.3rem;
    }

    /* SECCIONES DESTACADAS */

    .featured-section {
      padding: 5rem 0;
      background: var(--ivory);
    }

    .section-heading {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      gap: 2rem;
      margin-bottom: 2.5rem;
    }

    .section-heading h2 {
      margin: .7rem 0 0;
      font-size: clamp(1.9rem, 4vw, 2.5rem);
    }

    .section-heading > p {
      max-width: 330px;
      margin: 0;
      color: var(--muted);
      font-size: .9rem;
      line-height: 1.7;
    }

    .featured-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1.3rem;
    }

    .feature-card {
      min-height: 330px;
      position: relative;
      display: flex;
      align-items: flex-end;
      overflow: hidden;
      padding: 2rem;
      border-radius: 5px;
      background: linear-gradient(145deg, #650e20, #3f0a16);
      color: white;
      transition: transform .3s ease;
    }

    .feature-card:hover {
      transform: translateY(-6px);
    }

    .feature-card::before {
      content: '✦';
      position: absolute;
      top: 25px;
      right: 25px;
      color: rgba(214,189,140,.25);
      font-size: 5rem;
    }

    .cults-card {
      background: linear-gradient(145deg, #8b2940, #570c20);
    }

    .pilgrimage-card {
      background: linear-gradient(145deg, #80613d, #4d321f);
    }

    .feature-number {
      position: absolute;
      top: 1.5rem;
      left: 2rem;
      color: rgba(255,255,255,.45);
      font-family: Georgia, serif;
      font-size: 2.5rem;
    }

    .feature-content {
      position: relative;
      z-index: 1;
    }

    .feature-content > span {
      color: var(--gold-light);
      font-size: .68rem;
      font-weight: 800;
      letter-spacing: .14em;
    }

    .feature-content h3 {
      margin: .7rem 0;
      font-family: Georgia, serif;
      font-size: 1.8rem;
      font-weight: 400;
    }

    .feature-content p {
      margin: 0 0 1.4rem;
      color: #f0e5e4;
      font-size: .87rem;
      line-height: 1.7;
    }

    .feature-link {
      display: inline-flex;
      gap: .6rem;
      align-items: center;
      color: var(--gold-light);
      font-size: .84rem;
      font-weight: 700;
      text-decoration: none;
    }

    /* ACTUALIDAD */

    .news-section {
      padding: 5.5rem 0;
      background: #fff;
    }

    .news-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1.5rem;
    }

    .news-card {
      overflow: hidden;
      border: 1px solid #eee5dc;
      border-radius: 5px;
      background: #fff;
      transition: transform .25s ease, box-shadow .25s ease;
    }

    .news-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 28px rgba(60,20,25,.09);
    }

    .news-image {
      position: relative;
      height: 190px;
      display: grid;
      place-items: center;
      overflow: hidden;
    }

    .news-image-one {
      background: linear-gradient(135deg, #650e20, #a04c5b);
    }

    .news-image-two {
      background: linear-gradient(135deg, #796044, #b69a6d);
    }

    .news-image-three {
      background: linear-gradient(135deg, #344e3f, #78906b);
    }

    .news-placeholder {
      color: rgba(255,255,255,.5);
      font-family: Georgia, serif;
      font-size: 5rem;
    }

    .news-category {
      position: absolute;
      top: 1rem;
      left: 1rem;
      padding: .4rem .7rem;
      border: 1px solid rgba(255,255,255,.45);
      background: rgba(55,10,20,.3);
      color: white;
      font-size: .65rem;
      font-weight: 700;
      letter-spacing: .1em;
    }

    .news-body {
      padding: 1.5rem;
    }

    .news-date {
      color: #a17b49;
      font-size: .68rem;
      font-weight: 800;
      letter-spacing: .12em;
    }

    .news-body h3 {
      margin: .7rem 0;
      color: var(--burgundy-dark);
      font-family: Georgia, serif;
      font-size: 1.3rem;
      font-weight: 600;
    }

    .news-body p {
      color: var(--muted);
      font-size: .86rem;
      line-height: 1.7;
    }

    .news-body a {
      display: inline-block;
      margin-top: .5rem;
      color: var(--burgundy);
      font-size: .83rem;
      font-weight: 700;
      text-decoration: none;
    }

    /* DEVOCIÓN */

    .devotion-section {
      position: relative;
      padding: 6rem 1.5rem;
      overflow: hidden;
      text-align: center;
      background:
        radial-gradient(circle at center, #84263d, transparent 75%),
        #420916;
      color: white;
    }

    .devotion-overlay {
      position: absolute;
      inset: 0;
      border-top: 1px solid rgba(214,189,140,.4);
      border-bottom: 1px solid rgba(214,189,140,.4);
      pointer-events: none;
    }

    .devotion-content {
      position: relative;
      max-width: 800px;
      margin: 0 auto;
    }

    .devotion-symbol {
      display: block;
      margin-bottom: 1.5rem;
      color: var(--gold);
      font-size: 2rem;
    }

    .devotion-content h2 {
      margin: 1.2rem 0;
      font-family: Georgia, serif;
      font-size: clamp(2rem, 5vw, 3.5rem);
      font-weight: 400;
      line-height: 1.25;
    }

    .devotion-content h2 span {
      display: block;
      color: var(--gold-light);
      font-style: italic;
    }

    .devotion-content p {
      max-width: 600px;
      margin: 1.5rem auto;
      color: #e8dadd;
      font-size: .95rem;
      line-height: 1.9;
    }

    .devotion-signature {
      display: block;
      margin-top: 2rem;
      color: var(--gold);
      font-family: Georgia, serif;
      font-size: .9rem;
      font-style: italic;
    }

    /* CONTACTO */

    .contact-section {
      padding: 4rem 1.5rem;
      background: var(--ivory);
    }

    .contact-content {
      width: min(1100px, 100%);
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
    }

    .contact-content h2 {
      margin: .8rem 0;
      font-size: clamp(1.7rem, 3vw, 2.3rem);
    }

    .contact-content p {
      max-width: 600px;
      margin: 0;
      color: var(--muted);
      font-size: .9rem;
      line-height: 1.7;
    }

    .contact-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      flex-shrink: 0;
      padding: 1rem 1.5rem;
      border-radius: 4px;
      background: var(--burgundy);
      color: white;
      text-decoration: none;
      font-size: .85rem;
      font-weight: 700;
      transition: .2s ease;
    }

    .contact-button:hover {
      background: var(--burgundy-dark);
      transform: translateY(-2px);
    }

    /* RESPONSIVE */

    @media (max-width: 1050px) {
      .hero-decoration {
        right: 5%;
        opacity: .55;
      }

      .hero-content {
        max-width: 650px;
      }
    }

    @media (max-width: 850px) {
      .hero {
        min-height: 530px;
      }

      .hero-decoration {
        display: none;
      }

      .featured-grid,
      .news-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .section-heading {
        align-items: flex-start;
        flex-direction: column;
        gap: .8rem;
      }
    }

    @media (max-width: 600px) {
      .section-container {
        width: min(100% - 2rem, 1200px);
      }

      .hero {
        min-height: 560px;
        padding: 4rem 1.4rem;
        align-items: center;
      }

      .hero h1 {
        font-size: clamp(2.3rem, 10vw, 3.2rem);
      }

      .hero-description {
        font-size: .9rem;
      }

      .hero-actions {
        align-items: stretch;
        flex-direction: column;
      }

      .btn-primary,
      .btn-secondary {
        width: 100%;
      }

      .scroll-indicator {
        display: none;
      }

      .presentation {
        padding: 4rem .5rem;
      }

      .presentation h2 {
        font-size: 2rem;
      }

      .featured-section,
      .news-section {
        padding: 4rem 0;
      }

      .featured-grid,
      .news-grid {
        grid-template-columns: 1fr;
      }

      .feature-card {
        min-height: 290px;
      }

      .devotion-section {
        padding: 4.5rem 1.5rem;
      }

      .contact-content {
        align-items: flex-start;
        flex-direction: column;
      }

      .contact-button {
        width: 100%;
      }
    }
  `]
})
export class HomePageComponent {}
