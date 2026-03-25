// ============================================
//  Cotton Candy Clothing Store - components.js
//  Inyecta el header y footer en todas las páginas
// ============================================

// Detecta la página actual para marcar el botón activo
const paginaActual = window.location.pathname.split('/').pop();

const navLinks = [
  { href: 'index.html', label: 'Inicio' },
  { href: 'shop.html', label: 'Catálogo' },
  { href: 'carpeta.html', label: 'Carpeta' },
  { href: 'about.html', label: 'Nosotros' },
  { href: 'contact.html', label: 'Contacto' },
  { href: 'promos.html', label: 'Promos' },
  { href: 'comunidad.html', label: 'Comunidad' },
  { href: 'login.html', label: 'Iniciar sesión' },
];

const navHTML = navLinks.map(link => `
  <li>
    <button type="button"
      class="${paginaActual === link.href ? 'active' : ''}"
      onclick="window.location.href='${link.href}'">
      ${link.label}
    </button>
  </li>
`).join('');

// ── HEADER ──
document.getElementById('header').innerHTML = `
  <header>
    <div class="logo">
      <div class="logo-icon">
        <img src="Imagenes/Logo estampa-tla 1.png" alt="Logo Cotton Candy" />
      </div>
      <span>Cotton Candy Clothing Store</span>
    </div>
    <nav>
      <ul>${navHTML}</ul>
    </nav>
    <div class="icons">
      <img src="Imagenes/Iconos/Avatar.png" alt="Perfil" class="icon"
        onclick="window.location.href='Interfaz Cliente - Perfil.html'" />
      <img src="Imagenes/Iconos/Shopping cart.png" alt="Carrito" class="icon"
        onclick="window.location.href='carrito.html'" />
    </div>
  </header>
`;

// ── FOOTER ──
document.getElementById('footer').innerHTML = `
  <footer>
    <div class="left">
      <p><strong>Cotton Candy Clothing Store</strong></p>
      <p>¿Te gustaría colaborar con nosotros?</p>
      <button type="button">ÚNETE →</button>
    </div>
    <div class="center">
      <p><strong>REDES SOCIALES</strong></p>
      <ul>
        <li>
          <img src="Imagenes/Iconos/Facebook.png" alt="Facebook" class="icon" />
          <a href="#">Facebook</a>
        </li>
        <li>
          <img src="Imagenes/Iconos/Twitter.png" alt="Twitter" class="icon" />
          <a href="#">Twitter</a>
        </li>
        <li>
          <img src="Imagenes/Iconos/Instagram.png" alt="Instagram" class="icon" />
          <a href="#">Instagram</a>
        </li>
        <li>
          <img src="Imagenes/Iconos/Shopping cart.png" alt="Subastas" class="icon" />
          <a href="subastas.html">Subastas</a>
        </li>
      </ul>
    </div>
    <div class="right">
      <p><strong>Horario:</strong><br />
        Lunes a Viernes 7:00 am - 11:00 pm<br />
        Sábado y Domingo 9:00 am - 9:00 pm
      </p>
      <p><strong>Teléfono:</strong><br />(449) 3116529</p>
    </div>
    <div class="bottom-text">
      Algunas imágenes de modelos utilizadas en este sitio fueron generadas con inteligencia artificial.
      <br>Copyright © 2026 Cotton Candy Clothing Store | All Rights Reserved | Terms and Conditions | Privacy Policy
    </div>
  </footer>
`;