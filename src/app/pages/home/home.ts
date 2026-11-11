import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  template: `
    <section class="welcome">
      <span class="eyebrow">ÁREA DE TRABAJO</span>
      <h1>Bienvenido a tu aplicación</h1>
      <p class="intro">Esta es la página de inicio. El encabezado, el menú y el pie permanecen fijos mientras cambia el contenido central al navegar.</p>
    </section>
    <div class="cards">
      <article class="card"><span class="card-icon">01</span><h2>Navegación</h2><p>Utiliza el menú superior para acceder a las distintas secciones de la aplicación.</p></article>
      <article class="card"><span class="card-icon">02</span><h2>Componentes</h2><p>Cada página es un componente independiente que puedes ampliar según tus necesidades.</p></article>
      <article class="card"><span class="card-icon">03</span><h2>Diseño adaptable</h2><p>La estructura se adapta a pantallas de escritorio, tabletas y móviles.</p></article>
    </div>
  `,
  styles: [`
    .welcome { margin: .5rem 0 2rem; }
    .eyebrow { color:#2479bb; font-size:.72rem; font-weight:800; letter-spacing:.12em; }
    h1 { margin:.65rem 0 .7rem; color:#192b43; font-size:clamp(1.8rem, 4vw, 2.5rem); letter-spacing:-.04em; }
    .intro { max-width:720px; color:#617086; line-height:1.7; }
    .cards { display:grid; grid-template-columns:repeat(3, minmax(0, 1fr)); gap:1rem; }
    .card { padding:1.4rem; border:1px solid #e0e7ef; border-radius:14px; background:#fff; box-shadow:0 5px 18px rgb(27 50 78 / 4%); }
    .card-icon { display:grid; width:38px; height:38px; place-items:center; border-radius:10px; background:#e8f3fc; color:#1769aa; font-size:.78rem; font-weight:800; }
    h2 { margin:1rem 0 .5rem; color:#233750; font-size:1.05rem; }
    .card p { margin:0; color:#68788d; font-size:.9rem; line-height:1.6; }
    @media (max-width:760px) { .cards { grid-template-columns:1fr; } }
  `]
})
export class HomePageComponent {}
