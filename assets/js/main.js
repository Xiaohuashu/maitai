/* ==========================================================================
   MaiTai Thai-Vietnam Restaurant — Site behaviour
   Lotus Logo Branding · German Only · No Red Elements · Stable Background
   ========================================================================== */
(function () {
  "use strict";
  const M = window.MAITAI;
  const page = document.body.dataset.page || "";

  /* ---------- Shared Header mit Original Lotus-Logo ---------- */
  const navItems = [
    ["index.html", "Start"],
    ["story.html", "Philosophie"],
    ["menu.html", "Speisekarte"],
    ["gallery.html", "Galerie"],
    ["partnerlinks.html", "Partnerlinks"],
    ["contact.html", "Kontakt &amp; Anfahrt"]
  ];
  const header = document.querySelector("[data-header]");
  if (header) {
    header.innerHTML = `
      <div class="container nav">
        <a href="index.html" class="brand" aria-label="MaiTai Startseite">
          <img src="assets/img/logo.png" alt="MaiTai Lotus Logo" class="brand__logo-img">
          <span class="brand__name">${M.name}</span>
        </a>
        <ul class="nav__links" id="nav-links">
          ${navItems.map(([href, label]) =>
            `<li><a href="${href}" ${href.startsWith(page) ? 'aria-current="page"' : ""}>${label}</a></li>`
          ).join("")}
        </ul>
        <div class="nav__right">
          <a href="tel:${M.phone}" class="nav__phone" aria-label="Telefonnummer anrufen">
            📞 ${M.phoneDisplay}
          </a>
          <button class="burger" aria-label="Menü öffnen" aria-controls="nav-links" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>`;
  }

  /* ---------- Shared Footer mit Facebook & Partnerlinks ---------- */
  const footer = document.querySelector("[data-footer]");
  if (footer) {
    footer.innerHTML = `
      <div class="container">
        <div class="footer-top">
          <div>
            <a href="index.html" class="brand" style="margin-bottom:1rem">
              <img src="assets/img/logo.png" alt="MaiTai Logo" class="brand__logo-img" style="height:42px">
              <span class="brand__name">${M.name}</span>
            </a>
            <p class="footer-motto">Exquisite thailändische &amp; vietnamesische Aromen in der Bad Homburger Altstadt.</p>
            <p style="margin-top:1.2rem">
              <a href="${M.facebookUrl}" target="_blank" rel="noopener" class="link-arrow" style="font-size:0.8rem">
                MaiTai auf Facebook ↗
              </a>
            </p>
          </div>
          <div>
            <h5>Besuch</h5>
            <p>${M.street}<br>${M.city}<br>${M.transit}</p>
            <p style="margin-top:0.8rem;color:var(--gold-soft);font-size:0.85rem">Parken: Schloss-Garage (ca. 3 Min.)</p>
          </div>
          <div>
            <h5>Öffnungszeiten</h5>
            <ul data-hours-compact></ul>
          </div>
          <div>
            <h5>Kontakt &amp; Partner</h5>
            <ul>
              <li><a href="tel:${M.phone}">📞 ${M.phoneDisplay}</a></li>
              <li><a href="mailto:${M.email}">✉ ${M.email}</a></li>
              <li><a href="partnerlinks.html">Partnerlinks &amp; Freunde</a></li>
              <li><a href="${M.partnerUrl}" target="_blank" rel="noopener">Happy Sumo Mainz (Partner) ↗</a></li>
              <li><a href="${M.mapsUrl}" target="_blank" rel="noopener">Google Maps Route ↗</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© ${new Date().getFullYear()} ${M.name} · ${M.street}, ${M.city}</span>
          <span>
            <a href="partnerlinks.html">Partnerlinks</a> · 
            <a href="impressum.html">Impressum</a> · 
            <a href="datenschutz.html">Datenschutz</a>
          </span>
        </div>
      </div>`;
  }

  /* ---------- Mobile Action Bar (Direktzugriff) ---------- */
  const bar = document.createElement("nav");
  bar.className = "action-bar";
  bar.setAttribute("aria-label", "Schnellzugriff");
  bar.innerHTML = `
    <a href="tel:${M.phone}">📞 Anrufen</a>
    <a href="menu.html">Speisekarte</a>
    <a href="contact.html">Anfahrt &amp; Karte</a>`;
  document.body.appendChild(bar);

  /* ---------- Back to Top Button ---------- */
  const backToTop = document.createElement("button");
  backToTop.className = "back-to-top";
  backToTop.setAttribute("aria-label", "Nach oben scrollen");
  backToTop.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M18 15l-6-6-6 6"/>
    </svg>`;
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  document.body.appendChild(backToTop);

  /* ---------- Dynamic Config Fill ---------- */
  document.querySelectorAll("[data-k]").forEach(el => {
    const v = M[el.dataset.k];
    if (v != null) el.textContent = v;
  });
  document.querySelectorAll("[data-tel]").forEach(el => {
    el.href = "tel:" + M.phone;
    el.textContent ||= M.phoneDisplay;
  });
  document.querySelectorAll("[data-email]").forEach(el => {
    el.href = "mailto:" + M.email;
    el.textContent ||= M.email;
  });
  document.querySelectorAll("[data-maps]").forEach(el => { el.href = M.mapsUrl; });
  document.querySelectorAll("[data-facebook]").forEach(el => { el.href = M.facebookUrl; });
  document.querySelectorAll("[data-partner]").forEach(el => { el.href = M.partnerUrl; });

  /* ---------- Öffnungszeiten & Live-Status ---------- */
  const DAYS = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
  const order = [1, 2, 3, 4, 5, 6, 0];

  function toMin(t) { const [h, m] = t.split(":").map(Number); return h * 60 + m; }
  
  function isOpenNow() {
    const now = new Date();
    const curMin = now.getHours() * 60 + now.getMinutes();
    const inLunch = curMin >= toMin("11:30") && curMin < toMin("15:00");
    const inDinner = curMin >= toMin("17:30") && curMin < toMin("23:00");
    return inLunch || inDinner;
  }

  function renderHours() {
    const today = new Date().getDay();
    document.querySelectorAll("[data-hours]").forEach(ul => {
      ul.innerHTML = order.map(d => {
        return `<li class="${d === today ? "today" : ""}"><span>${DAYS[d]}</span><span>11:30 – 15:00 &amp; 17:30 – 23:00</span></li>`;
      }).join("");
    });

    document.querySelectorAll("[data-hours-compact]").forEach(ul => {
      ul.innerHTML = `
        <li><span>Montag – Sonntag</span></li>
        <li style="margin-top:2px;color:var(--gold-soft)">11:30 – 15:00 &amp; 17:30 – 23:00</li>
        <li style="font-size:0.75rem;color:var(--text-mute);margin-top:4px">Durchgehend warme Küche</li>
      `;
    });
  }

  function updateOpenBadge() {
    const el = document.querySelector("[data-open-badge]");
    if (!el) return;
    const open = isOpenNow();
    el.className = "open-badge " + (open ? "is-open" : "");
    const label = open ? "Jetzt geöffnet (warme Küche)" : "Öffnet um 11:30 bzw. 17:30 Uhr";
    el.innerHTML = `<i></i><span>${label}</span>`;
  }

  renderHours();
  updateOpenBadge();

  /* ---------- Sticky Header & Back-To-Top Scroll Effect ---------- */
  function onScroll() {
    const y = window.scrollY || window.pageYOffset;
    if (header) header.classList.toggle("scrolled", y > 40);
    if (backToTop) backToTop.classList.toggle("visible", y > 350);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile Burger & Overlay Menu ---------- */
  function closeNav() {
    document.body.classList.remove("nav-open");
    const b = document.querySelector(".burger");
    if (b) b.setAttribute("aria-expanded", "false");
  }

  document.addEventListener("click", e => {
    const burger = e.target.closest(".burger");
    if (burger) {
      const open = document.body.classList.toggle("nav-open");
      burger.setAttribute("aria-expanded", String(open));
      return;
    }

    if (e.target.closest(".nav__close") || e.target.closest("#nav-links a")) {
      closeNav();
      return;
    }

    if (document.body.classList.contains("nav-open") && e.target.closest(".nav__links") === null && !e.target.closest(".site-header")) {
      closeNav();
    }
  });

  window.addEventListener("keydown", e => {
    if (e.key === "Escape" && document.body.classList.contains("nav-open")) {
      closeNav();
    }
  });

  /* ---------- Scroll Reveal Observer ---------- */
  const reveals = document.querySelectorAll(".reveal, .mask-img");
  if ("IntersectionObserver" in window) {
    const obs = new IntersectionObserver((entries, o) => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          o.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(el => obs.observe(el));
  } else {
    reveals.forEach(el => el.classList.add("in"));
  }

  /* ---------- Menu Filtering Chips ---------- */
  const chips = document.querySelectorAll(".menu-filters .chip");
  if (chips.length) {
    chips.forEach(chip => {
      chip.addEventListener("click", () => {
        chips.forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        const filter = chip.dataset.filter;
        
        document.querySelectorAll(".menu-cat").forEach(cat => {
          if (filter === "all") {
            cat.style.display = "";
          } else {
            const hasMatch = cat.querySelector(`[data-tags~="${filter}"]`) || cat.dataset.cat === filter;
            cat.style.display = hasMatch ? "" : "none";
          }
        });

        document.querySelectorAll(".menu-item").forEach(item => {
          if (filter === "all") {
            item.classList.remove("hidden");
          } else {
            const tags = (item.dataset.tags || "").split(" ");
            const cat = item.closest(".menu-cat")?.dataset.cat;
            if (tags.includes(filter) || cat === filter) {
              item.classList.remove("hidden");
            } else {
              item.classList.add("hidden");
            }
          }
        });
      });
    });
  }

  /* ---------- Lightbox Modal ---------- */
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.innerHTML = `
    <button class="lightbox__close" aria-label="Schließen">&times;</button>
    <img src="" alt="Großansicht">`;
  document.body.appendChild(lightbox);

  const lbImg = lightbox.querySelector("img");
  lightbox.addEventListener("click", e => {
    if (e.target === lightbox || e.target.classList.contains("lightbox__close")) {
      lightbox.classList.remove("open");
      lbImg.src = "";
    }
  });

  document.querySelectorAll(".masonry figure, [data-lightbox]").forEach(fig => {
    fig.addEventListener("click", () => {
      const img = fig.querySelector("img") || fig;
      const src = fig.dataset.full || img.src;
      lbImg.src = src;
      lbImg.alt = img.alt || "";
      lightbox.classList.add("open");
    });
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && lightbox.classList.contains("open")) {
      lightbox.classList.remove("open");
      lbImg.src = "";
    }
  });

  /* ---------- Map Consent Handler ---------- */
  const consentBtn = document.querySelector("[data-map-consent]");
  if (consentBtn) {
    consentBtn.addEventListener("click", () => {
      const wrap = consentBtn.closest(".map-wrap");
      if (wrap) {
        wrap.innerHTML = `<iframe title="Google Maps Standort MaiTai Bad Homburg" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=${M.geo.lat},${M.geo.lng}&z=16&output=embed"></iframe>`;
      }
    });
  }

  /* ---------- Schema.org Structured Data ---------- */
  if (page === "index") {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const ld = {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      name: M.name,
      image: "assets/img/obergasse.jpg",
      servesCuisine: ["Thai", "Vietnamese", "Asian"],
      telephone: M.phone,
      email: M.email,
      priceRange: "€€",
      address: {
        "@type": "PostalAddress",
        streetAddress: M.street,
        postalCode: "61348",
        addressLocality: "Bad Homburg vor der Höhe",
        addressCountry: "DE"
      },
      geo: { "@type": "GeoCoordinates", latitude: M.geo.lat, longitude: M.geo.lng },
      hasMenu: "menu.html",
      sameAs: [M.facebookUrl, M.partnerUrl],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: M.rating,
        reviewCount: M.reviewCount
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: dayNames,
          opens: "11:30",
          closes: "15:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: dayNames,
          opens: "17:30",
          closes: "23:00"
        }
      ]
    };
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.textContent = JSON.stringify(ld);
    document.head.appendChild(s);
  }
})();
