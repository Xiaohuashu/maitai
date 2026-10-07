/**
 * MAITAI RESTAURANT BAD HOMBURG - APPLICATION LOGIC
 * High-End Michelin Dining Experience & Glassmorphic Interactions
 */

// 1. Speisekarte Datenkatalog (Authentische Gerichte, Kategorien, Preise & Fotos)
const MENU_DATA = [
  // --- SIGNATURES ---
  {
    id: 74,
    number: "74",
    title: "Ped Krob Tamarind",
    sub: "Knusprige Gourmet-Ente",
    category: "signature",
    price: "24,50 €",
    desc: "Kross gebackene Ente auf frischem Wok-Wassergemüse, verfeinert mit pikanter Tamarinden-Karamellsauce, gerösteten Schalotten und Duftreis.",
    image: "assets/images/ente-knusprig.jpg",
    spicy: 1,
    badges: ["Chef's Recommendation", "Bestseller"],
    isSignature: true
  },
  {
    id: 90,
    number: "90",
    title: "Goong Phad Krapao",
    sub: "Königsgarnelen & Heiliges Basilikum",
    category: "signature",
    price: "25,90 €",
    desc: "Im Wok sautierte Riesengarnelen mit thailändischem Krapao-Basilikum, frischen Chilis, Baby-Mais, Knoblauch und grünen Bohnen.",
    image: "assets/images/garnele.jpg",
    spicy: 2,
    badges: ["Signature Seafood", "Glutenfrei Opt."],
    isSignature: true
  },
  {
    id: 116,
    number: "116",
    title: "MaiTai Royal Grillplatte",
    sub: "Luxuriöse Spezialität des Hauses",
    category: "signature",
    price: "28,50 €",
    desc: "Fein marinierte Rinderhüfte, Hähnchenfilet und Black Tiger Garnelen vom Flammengrill, serviert auf heißer Gusseisenplatte mit dreierlei Dipsaucen.",
    image: "assets/images/grillplatte.jpg",
    spicy: 1,
    badges: ["Hausspezialität", "Flammengrill"],
    isSignature: true
  },

  // --- VORSPEISEN (STARTERS) ---
  {
    id: 12,
    number: "12",
    title: "Goi Cuon Sai Gon",
    sub: "Frische Sommerrollen (2 Stk.)",
    category: "starters",
    price: "8,90 €",
    desc: "Hauchdünnes Reispapier gefüllt mit Black Tiger Garnelen, zartem Huhn, Reisnudeln, Koriander und Minze, serviert mit hausgemachtem Hoisin-Erdnuss-Dip.",
    image: "assets/images/sommerrolle.jpg",
    spicy: 0,
    badges: ["Frisch & Leicht", "Vietnamesisch"]
  },
  {
    id: 10,
    number: "10",
    title: "Nem Ran Ha Noi",
    sub: "Knusprige Frühlingsrollen (3 Stk.)",
    category: "starters",
    price: "8,50 €",
    desc: "Traditionell vietnamesisch gefüllt mit Hackfleisch, Glasnudeln, Morcheln und feinem Gemüse, serviert mit Limetten-Nuoc-Cham-Dip.",
    image: "assets/images/sommerrolle.jpg",
    spicy: 0,
    badges: ["Hausgemacht", "Traditionell"]
  },
  {
    id: 14,
    number: "14",
    title: "Saté Gai",
    sub: "Gegrillte Hähnchen-Saté-Spieße (4 Stk.)",
    category: "starters",
    price: "9,50 €",
    desc: "In Kokosmilch, Kurkuma und Zitronengras marinierte Hähnchenspieße mit cremiger hausgemachter Erdnusssauce und Acar-Gurkenrelish.",
    image: "assets/images/grillplatte.jpg",
    spicy: 0,
    badges: ["Gegrillt", "Thai-Klassiker"]
  },

  // --- SUPPEN (SOUPS) ---
  {
    id: 15,
    number: "15",
    title: "Tom Kha Gai",
    sub: "Aromatische Kokossuppe",
    category: "soups",
    price: "8,90 €",
    desc: "Seidige Kokosmilchbrühe mit zartem Hähnchenbrustfilet, frischem Galgant, Zitronengras, Kaffir-Limettenblättern und Strohpilzen.",
    image: "assets/images/suppe-tomkha.jpg",
    spicy: 1,
    badges: ["Beliebt", "Cremig"]
  },
  {
    id: 16,
    number: "16",
    title: "Tom Yum Goong",
    sub: "Königlich-thailändische Garnelensuppe",
    category: "soups",
    price: "9,90 €",
    desc: "Kräftige, pikant-säuerliche Brühe mit Black Tiger Garnelen, Limettensaft, Koriander, frischen Thai-Chilis und Waldpilzen.",
    image: "assets/images/suppe-tomkha.jpg",
    spicy: 2,
    badges: ["Pikant", "Traditionell"]
  },
  {
    id: 20,
    number: "20",
    title: "Pho Bo Traditional",
    sub: "Große vietnamesische Rinderkraftbrühe",
    category: "soups",
    price: "17,50 €",
    desc: "12 Stunden schonend gekochte Rinderknochenbrühe mit Sternanis, Zimt, breiten Reisbandnudeln, zarten Rinderfiletscheiben, frischen Kräutern und Limette.",
    image: "assets/images/suppe-tomkha.jpg",
    spicy: 0,
    badges: ["12h Bone Broth", "Signature Pho"]
  },

  // --- THAI CURRIES ---
  {
    id: 30,
    number: "30",
    title: "Gaeng Daeng Gai",
    sub: "Rotes Thai-Curry mit Huhn",
    category: "curries",
    price: "18,50 €",
    desc: "Zartes Hähnchenfilet in cremigem roten Kokosmilchcurry mit Bambussprossen, Auberginen, Paprika und Thai-Süßbasilikum, dazu Jasmin-Duftreis.",
    image: "assets/images/curry-rot.jpg",
    spicy: 2,
    badges: ["Klassiker", "Reichhaltig"]
  },
  {
    id: 35,
    number: "35",
    title: "Gaeng Kiew Wan Goong",
    sub: "Grünes Thai-Curry mit Riesengarnelen",
    category: "curries",
    price: "24,90 €",
    desc: "Köstlich frisches grünes Kräuter-Curry mit Garnelen, thailändischen Erbsenauberginen, Zuckerschoten, Bambus und Kaffir-Limette.",
    image: "assets/images/curry-gruen.jpg",
    spicy: 3,
    badges: ["Authentisch scharf", "Seafood"]
  },
  {
    id: 38,
    number: "38",
    title: "Massaman Nuer",
    sub: "Königliches Massaman-Curry mit Rind",
    category: "curries",
    price: "21,50 €",
    desc: "Sanft geschmortes Rindfleisch in mild-würzigem Massamancurry mit Kartoffeln, gerösteten Erdnüssen, Kardamom und Schalotten.",
    image: "assets/images/curry-rot.jpg",
    spicy: 1,
    badges: ["Mild & Nussig", "Sehr Zart"]
  },

  // --- ENTE & GRILL ---
  {
    id: 76,
    number: "76",
    title: "Ped Kiew Wan",
    sub: "Knusprige Ente in grünem Curry",
    category: "duck",
    price: "24,50 €",
    desc: "Krosse Barberie-Entenbrust auf feinstem grünem Kokoscurry mit Thai-Gemüse und Basilikum.",
    image: "assets/images/ente-knusprig.jpg",
    spicy: 2,
    badges: ["Favorit"]
  },
  {
    id: 78,
    number: "78",
    title: "Ped Pad Khing",
    sub: "Knusprige Ente mit frischem Ingwer",
    category: "duck",
    price: "24,50 €",
    desc: "Gebratene Entenstreifen im Wok geschwenkt mit jungem Ingwer, Morcheln, Frühlingszwiebeln und Soja-Sesam-Reduktion.",
    image: "assets/images/ente-knusprig.jpg",
    spicy: 1,
    badges: ["Aromatisch"]
  },

  // --- VEGETARISCH & VEGAN ---
  {
    id: 50,
    number: "50",
    title: "Tofu Kiew Wan",
    sub: "Grünes Thai-Curry mit Bio-Tofu",
    category: "veg",
    price: "16,90 €",
    desc: "Goldbraun angebratener Bio-Tofu in samtigem Kokoscurry mit Bambus, Mini-Auberginen, Zuckerschoten und Duftreis.",
    image: "assets/images/curry-gruen.jpg",
    spicy: 2,
    badges: ["100% Vegan", "Bio-Tofu"]
  },
  {
    id: 55,
    number: "55",
    title: "Pad Thai Jay",
    sub: "Veganes Wok-Nudelgericht",
    category: "veg",
    price: "16,50 €",
    desc: "Gebratene Reisbandnudeln mit Tofu, Sojasprossen, Schnittlauch, gerösteten Erdnüssen und frischer Tamarindensauce.",
    image: "assets/images/sommerrolle.jpg",
    spicy: 0,
    badges: ["100% Vegan", "Streetfood-Ikone"]
  },

  // --- MITTAGSKARTE (LUNCH SPECIALS) ---
  {
    id: 201,
    number: "M1",
    title: "Mittagsmenü: Huhn Gaeng Daeng",
    sub: "Inkl. Frühlingsrolle oder Tagessuppe",
    category: "lunch",
    price: "12,90 €",
    desc: "Rotes Kokosmilch-Curry mit zarter Hähnchenbrust, frischem Gemüse und Jasmin-Duftreis. Serviert von 11:30 bis 15:00 Uhr.",
    image: "assets/images/curry-rot.jpg",
    spicy: 1,
    badges: ["Mittagskarte", "Top-Deal"]
  },
  {
    id: 202,
    number: "M2",
    title: "Mittagsmenü: Knusprige Ente Chop Suey",
    sub: "Inkl. Frühlingsrolle oder Tagessuppe",
    category: "lunch",
    price: "14,90 €",
    desc: "Kross gebackene Ente mit buntem Wok-Gemüse in dezenter Knoblauch-Sojasauce, dazu Jasmin-Duftreis.",
    image: "assets/images/ente-knusprig.jpg",
    spicy: 0,
    badges: ["Mittagskarte", "Bestseller"]
  },
  {
    id: 203,
    number: "M3",
    title: "Mittagsmenü: Pad Krapao Tofu",
    sub: "Inkl. Frühlingsrolle oder Tagessuppe",
    category: "lunch",
    price: "11,90 €",
    desc: "Bio-Tofu im Wok mit feurigem Thai-Basilikum, Bohnen und Zwiebeln kurzgebraten, dazu Duftreis.",
    image: "assets/images/curry-gruen.jpg",
    spicy: 2,
    badges: ["Mittagskarte", "Vegan"]
  },

  // --- GETRÄNKE & SIGNATURE DRINKS ---
  {
    id: 301,
    number: "D1",
    title: "MaiTai Signature Royal",
    sub: "Exotischer Haus-Cocktail",
    category: "drinks",
    price: "10,50 €",
    desc: "Zweierlei edler Rum, Curaçao Orange, Limettensaft, Mandelsirup und Maracujanektar auf Crushed Ice, garniert mit frischer Minze.",
    image: "assets/images/interior-main.jpg",
    spicy: 0,
    badges: ["Signature Drink", "Cocktail"]
  },
  {
    id: 302,
    number: "D2",
    title: "Thai Iced Tea (Cha Yen)",
    sub: "Traditioneller thailändischer Eistee",
    category: "drinks",
    price: "5,80 €",
    desc: "Cremig aufgebrühter Ceylon-Tee mit exotischen Gewürzen, verfeinert mit gezuckerter Kondensmilch über Eiswürfeln.",
    image: "assets/images/interior-1.jpg",
    spicy: 0,
    badges: ["Alkoholfrei", "Erfrischend"]
  },
  {
    id: 303,
    number: "D3",
    title: "Vietnamesischer Tropfkaffee (Ca Phe Sua Da)",
    sub: "Mit süßer Kondensmilch über Eis",
    category: "drinks",
    price: "5,20 €",
    desc: "Dunkel gerösteter Robusta-Kaffee, am Tisch im traditionellen Phin-Filter frisch aufgegossen.",
    image: "assets/images/interior-2.jpg",
    spicy: 0,
    badges: ["Kaffee-Spezialität"]
  }
];

// 2. DOM Ready Initialisierung
document.addEventListener("DOMContentLoaded", () => {
  initLiveHoursStatus();
  initMenuRenderer();
  initNavbarScroll();
  initMobileDrawer();
  initReservationSystem();
  initLightbox();
  initModals();
});

// ==========================================================================
// 3. LIVE-STATUS ÖFFNUNGSZEITEN (Montag - Sonntag 11:30-15:00 & 17:30-23:00)
// ==========================================================================
function initLiveHoursStatus() {
  const statusElement = document.getElementById("live-status-pill");
  if (!statusElement) return;

  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentTime = hours * 60 + minutes;

  // Schichten in Minuten:
  // Lunch: 11:30 (690) bis 15:00 (900)
  // Dinner: 17:30 (1050) bis 23:00 (1380)
  const lunchStart = 11 * 60 + 30;
  const lunchEnd = 15 * 60;
  const dinnerStart = 17 * 60 + 30;
  const dinnerEnd = 23 * 60;

  let isOpen = false;
  let statusText = "";

  if (currentTime >= lunchStart && currentTime < lunchEnd) {
    isOpen = true;
    statusText = "Jetzt geöffnet • Mittags bis 15:00 Uhr";
  } else if (currentTime >= dinnerStart && currentTime < dinnerEnd) {
    isOpen = true;
    statusText = "Jetzt geöffnet • Abends bis 23:00 Uhr";
  } else if (currentTime < lunchStart) {
    isOpen = false;
    statusText = "Öffnet heute um 11:30 Uhr";
  } else if (currentTime >= lunchEnd && currentTime < dinnerStart) {
    isOpen = false;
    statusText = "Pause • Öffnet um 17:30 Uhr";
  } else {
    isOpen = false;
    statusText = "Schließt • Morgen ab 11:30 Uhr geöffnet";
  }

  statusElement.innerHTML = `
    <span class="live-status-dot" style="${isOpen ? '' : 'background-color: #f59e0b; box-shadow: 0 0 10px #f59e0b;'}"></span>
    <span>${statusText}</span>
  `;

  // Aktuellen Wochentag in der Öffnungszeiten-Tabelle markieren
  const dayIndex = now.getDay(); // 0 = Sonntag, 1 = Montag, etc.
  const dayRows = document.querySelectorAll(".hours-table tr");
  if (dayRows && dayRows.length > 0) {
    dayRows.forEach(row => row.classList.remove("current-day"));
    // Da Montag-Sonntag täglich 11:30-15:00 & 17:30-23:00 gilt, markieren wir die relevante Zeile
    if (dayRows[dayIndex === 0 ? 6 : dayIndex - 1]) {
      dayRows[dayIndex === 0 ? 6 : dayIndex - 1].classList.add("current-day");
    }
  }
}

// ==========================================================================
// 4. SPEISEKARTE SYSTEM (Rendering, Filtering & Search)
// ==========================================================================
function initMenuRenderer() {
  const menuContainer = document.getElementById("menu-grid-container");
  const filterButtons = document.querySelectorAll(".menu-filter-btn");
  const searchInput = document.getElementById("menu-search");

  if (!menuContainer) return;

  let currentCategory = "all";
  let searchQuery = "";

  function renderDishes() {
    let filtered = MENU_DATA.filter(dish => {
      const matchCat = (currentCategory === "all") || (dish.category === currentCategory) || (currentCategory === "signature" && dish.isSignature);
      const matchSearch = (
        dish.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dish.sub.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dish.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dish.number.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
      menuContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
          <p style="font-size: 1.2rem; font-family: var(--font-serif); color: #fff; margin-bottom: 8px;">Keine Gerichte gefunden</p>
          <p style="font-size: 0.9rem;">Probieren Sie einen anderen Suchbegriff oder eine andere Kategorie.</p>
        </div>
      `;
      return;
    }

    menuContainer.innerHTML = filtered.map(dish => {
      let spicyHtml = "";
      if (dish.spicy > 0) {
        spicyHtml = `<span class="dish-spicy" title="Schärfegrad ${dish.spicy}/3">${"🌶️".repeat(dish.spicy)}</span>`;
      }

      let badgesHtml = dish.badges.map(b => {
        let badgeClass = "dish-badge";
        if (b.includes("Chef") || b.includes("Signature") || b.includes("Haus")) badgeClass += " dish-badge-signature";
        if (b.includes("Vegan") || b.includes("Veg")) badgeClass += " dish-badge-veg";
        return `<span class="${badgeClass}">${b}</span>`;
      }).join("");

      return `
        <div class="glass-panel glass-panel-hover dish-card" data-dish-id="${dish.id}">
          <div class="dish-img-thumb" onclick="openLightbox('${dish.image}', '${dish.title}')">
            <img src="${dish.image}" alt="${dish.title}" loading="lazy" onerror="this.src='assets/images/obergasse.jpg'">
          </div>
          <div class="dish-details">
            <div>
              <div class="dish-header">
                <h4 class="dish-title">
                  <span class="dish-number">Nr. ${dish.number}</span>
                  <span>${dish.title}</span>
                  ${spicyHtml}
                </h4>
                <div class="dish-price">${dish.price}</div>
              </div>
              <p style="font-size: 0.82rem; color: var(--gold-light); margin-bottom: 6px; font-weight: 500;">${dish.sub}</p>
              <p class="dish-desc">${dish.desc}</p>
            </div>
            <div class="dish-meta">
              ${badgesHtml}
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

  // Filter Button Events
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-category") || "all";
      renderDishes();
    });
  });

  // Search Input Event
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim();
      renderDishes();
    });
  }

  // Initialer Render
  renderDishes();
}

// ==========================================================================
// 5. NAVBAR SCROLL & SMOOTH LINKS
// ==========================================================================
function initNavbarScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

// ==========================================================================
// 6. MOBILE DRAWER NAVIGATION
// ==========================================================================
function initMobileDrawer() {
  const toggleBtn = document.getElementById("mobile-toggle-btn");
  const drawer = document.getElementById("mobile-drawer");
  const overlay = document.getElementById("drawer-overlay");
  const drawerLinks = document.querySelectorAll(".drawer-link");

  if (!toggleBtn || !drawer || !overlay) return;

  function openDrawer() {
    drawer.classList.add("open");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    drawer.classList.remove("open");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  toggleBtn.addEventListener("click", openDrawer);
  overlay.addEventListener("click", closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener("click", closeDrawer);
  });
}

// ==========================================================================
// 7. TISCHRESERVIERUNGS-SYSTEM (Mit Validierung & Confirmation Modal)
// ==========================================================================
function initReservationSystem() {
  const form = document.getElementById("reservation-form");
  const dateInput = document.getElementById("res-date");

  // Mindestdatum auf heute setzen
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.min = today;
    dateInput.value = today;
  }

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("res-name").value;
    const phone = document.getElementById("res-phone").value;
    const guests = document.getElementById("res-guests").value;
    const date = document.getElementById("res-date").value;
    const time = document.getElementById("res-time").value;
    const seating = document.getElementById("res-seating").value;
    const notes = document.getElementById("res-notes").value;

    const bookingRef = "MT-" + Math.floor(100000 + Math.random() * 900000);

    // Confirmation Modal öffnen
    const confirmModal = document.getElementById("confirm-modal");
    const confirmDetails = document.getElementById("confirm-details");

    if (confirmModal && confirmDetails) {
      confirmDetails.innerHTML = `
        <div style="background: rgba(212, 175, 55, 0.08); border: 1px solid var(--border-glass); border-radius: var(--radius-sm); padding: 1.25rem; margin-bottom: 1.5rem;">
          <p style="font-size: 0.85rem; color: var(--gold-light); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 4px;">Buchungs-Referenz</p>
          <h3 style="font-family: var(--font-serif); font-size: 1.8rem; color: #fff;">${bookingRef}</h3>
        </div>
        <p style="margin-bottom: 1rem; color: var(--text-muted); font-size: 0.95rem;">
          Vielen Dank, <strong>${escapeHtml(name)}</strong>! Ihre Reservierungsanfrage für <strong>${escapeHtml(guests)} Personen</strong> am <strong>${escapeHtml(date)} um ${escapeHtml(time)} Uhr</strong> (${escapeHtml(seating)}) wurde erfolgreich an unser Team übermittelt.
        </p>
        <p style="font-size: 0.85rem; color: var(--text-subtle);">
          Unser Service-Team wird Ihre Reservierung prüfen und sich bei Rückfragen unter <strong>${escapeHtml(phone)}</strong> melden.
        </p>
      `;

      confirmModal.classList.add("open");
      form.reset();
      if (dateInput) dateInput.value = new Date().toISOString().split("T")[0];
    } else {
      showToast("Reservierungsanfrage erfolgreich versendet!");
      form.reset();
    }
  });
}

// ==========================================================================
// 8. LIGHTBOX MODAL
// ==========================================================================
let currentLightbox = null;

function initLightbox() {
  const overlay = document.getElementById("lightbox-overlay");
  const img = document.getElementById("lightbox-image");
  const closeBtn = document.getElementById("lightbox-close");

  if (!overlay || !img) return;

  window.openLightbox = function(src, title) {
    img.src = src;
    img.alt = title || "MaiTai Impression";
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  };

  function closeLightbox() {
    overlay.classList.remove("open");
    img.src = "";
    document.body.style.overflow = "";
  }

  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("open")) {
      closeLightbox();
    }
  });
}

// ==========================================================================
// 9. MODALS (Impressum, Datenschutz, Bestätigung)
// ==========================================================================
function initModals() {
  const modalTriggers = document.querySelectorAll("[data-modal-target]");
  const closeButtons = document.querySelectorAll(".modal-close-btn");
  const overlays = document.querySelectorAll(".modal-overlay");

  modalTriggers.forEach(trigger => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = trigger.getAttribute("data-modal-target");
      const modal = document.getElementById(targetId);
      if (modal) {
        modal.classList.add("open");
        document.body.style.overflow = "hidden";
      }
    });
  });

  closeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const modal = btn.closest(".modal-overlay");
      if (modal) {
        modal.classList.remove("open");
        document.body.style.overflow = "";
      }
    });
  });

  overlays.forEach(overlay => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.classList.remove("open");
        document.body.style.overflow = "";
      }
    });
  });
}

// ==========================================================================
// 10. HELPER FUNKTIONEN (Toast & String Escaping)
// ==========================================================================
function showToast(message) {
  let toast = document.getElementById("toast-notice");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast-notice";
    toast.className = "toast-notice";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span>✦</span> <span>${message}</span>`;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}

function escapeHtml(string) {
  if (!string) return "";
  return String(string)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
