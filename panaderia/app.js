/**
 * L'ATELIER DU PAIN — GOURMET BAKERY ENGINE
 * Modern Vanilla JS with Apple aesthetic micro-interactions,
 * responsive shopping cart & WhatsApp instant checkout.
 */

// ==========================================
// 1. PRODUCT DATABASE
// ==========================================
const PRODUCTS = [
  {
    id: 'pan-campagne',
    name: 'Hogaza Campagne Rústica',
    category: 'masa-madre',
    categoryLabel: 'Masa Madre 48h',
    price: 120,
    badge: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    description: 'Fermentación en frío de 48 horas con masa madre centenaria. Harina de centeno y trigo molido a la piedra.',
    specs: ['48h Fermentación', 'Orgánico', 'Vegano'],
    details: {
      fermentacion: '48 horas en frío',
      origen: 'Trigo y centeno de molienda artesanal',
      maridaje: 'Quesos maduros, aceite de oliva virgen y vino tinto',
      alergenos: 'Gluten (Trigo, Centeno)'
    }
  },
  {
    id: 'croissant-normandie',
    name: 'Croissant Mantequilla AOP',
    category: 'viennoiserie',
    categoryLabel: 'Viennoiserie Fina',
    price: 65,
    badge: 'Firma de la Casa',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
    description: '27 capas milimétricas de hojaldre crujiente elaborado exclusivamente con mantequilla francesa de Normandía AOP.',
    specs: ['Mantequilla AOP 84%', 'Hojaldre 27 Capas', 'Recién Horneado'],
    details: {
      fermentacion: '24 horas',
      origen: 'Mantequilla Charentes-Poitou AOP Francia',
      maridaje: 'Café Flat White o Chocolate Caliente',
      alergenos: 'Gluten, Lácteos, Huevos'
    }
  },
  {
    id: 'pain-chocolat',
    name: 'Pain au Chocolat Valrhona',
    category: 'viennoiserie',
    categoryLabel: 'Viennoiserie Fina',
    price: 75,
    badge: 'Chocolatería Francesa',
    image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=800&q=80',
    description: 'Masa de croissant caramelizada rellena con dos barras generosas de chocolate amargo 64% Valrhona.',
    specs: ['Cacao 64%', 'Mantequilla AOP', 'Crujiente'],
    details: {
      fermentacion: '24 horas',
      origen: 'Chocolate Valrhona Guanaja',
      maridaje: 'Cappuccino o Té Negro Earl Grey',
      alergenos: 'Gluten, Lácteos, Soya, Huevos'
    }
  },
  {
    id: 'baguette-tradition',
    name: 'Baguette Tradición Francesa',
    category: 'masa-madre',
    categoryLabel: 'Masa Madre',
    price: 65,
    badge: 'Clásico París',
    image: 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=800&q=80',
    description: 'Corteza cantarina y miga aperlada con grandes alvéolos. Sin levadura industrial, hidratación al 80%.',
    specs: ['80% Hidratación', 'Levain Puro', 'Sal marina de Colima'],
    details: {
      fermentacion: '36 horas',
      origen: 'Harina francesa Label Rouge T65',
      maridaje: 'Jamón serrano, mantequilla salada, patés',
      alergenos: 'Gluten'
    }
  },
  {
    id: 'focaccia-romero',
    name: 'Focaccia Genovesa al Romero',
    category: 'masa-madre',
    categoryLabel: 'Masa Madre',
    price: 110,
    badge: 'Artesanal',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80',
    description: 'Bañada en emulsión de aceite de oliva virgen extra arbequina, sal Maldon en escamas y romero fresco del huerto.',
    specs: ['Oliva Virgen Extra', 'Sal Maldon', 'Romero fresco'],
    details: {
      fermentacion: '30 horas',
      origen: 'Aceite de oliva primer prensado en frío',
      maridaje: 'Burrata fresca, tomates cherry confitados',
      alergenos: 'Gluten'
    }
  },
  {
    id: 'basque-cheesecake',
    name: 'Tarta Basque Cheesecake',
    category: 'reposteria',
    categoryLabel: 'Alta Repostería',
    price: 140,
    badge: 'Favorito Gourmet',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80',
    description: 'Inspirada en San Sebastián. Centro sedoso y fluido con superficie tostada de azúcar caramelizado al horno alto.',
    specs: ['Queso crema de rancho', 'Vainilla Papantla', 'Sin gluten base'],
    details: {
      fermentacion: 'Reposo en frío 12 horas',
      origen: 'Queso crema artesanal y crema para batir fresca',
      maridaje: 'Vino dulce Pedro Ximénez o Espresso Doble',
      alergenos: 'Lácteos, Huevos'
    }
  },
  {
    id: 'eclair-pistache',
    name: 'Éclair de Pistacho de Bronte',
    category: 'reposteria',
    categoryLabel: 'Alta Repostería',
    price: 95,
    badge: 'Edición Limitada',
    image: 'https://images.unsplash.com/photo-1612203985729-70726954388c?auto=format&fit=crop&w=800&q=80',
    description: 'Pasta choux crujiente rellena de crema diplomática de pistacho siciliano puro y frambuesas frescas.',
    specs: ['Pistacho DOP Sicilia', 'Frambuesa fresca', 'Pâte à Choux'],
    details: {
      fermentacion: 'Elaboración del día',
      origen: 'Pistacho puro de Bronte (Italia)',
      maridaje: 'Champagne o Té verde Sencha',
      alergenos: 'Gluten, Frutos secos (Pistacho), Lácteos, Huevos'
    }
  },
  {
    id: 'macarons-box',
    name: 'Cofre de 6 Macarons Finos',
    category: 'reposteria',
    categoryLabel: 'Alta Repostería',
    price: 210,
    badge: 'Para Regalo',
    image: 'https://images.unsplash.com/photo-1569864321332-965b7782b3d9?auto=format&fit=crop&w=800&q=80',
    description: 'Selección de 6 piezas: Vainilla de Madagascar, Caramelo a la flor de sal, Pistacho, Limón Meyer, Chocolate 70% y Frambuesa.',
    specs: ['Harina de almendra 100%', 'Ganache pura', 'Presentación de lujo'],
    details: {
      fermentacion: 'Maduración 24h para textura fundente',
      origen: 'Almendra californiana extra fina',
      maridaje: 'Espumoso brut o Infusión de lavanda',
      alergenos: 'Frutos secos (Almendra), Lácteos, Huevos'
    }
  },
  {
    id: 'pan-centeno-nuez',
    name: 'Hogaza Centeno, Nuez & Arándanos',
    category: 'masa-madre',
    categoryLabel: 'Masa Madre',
    price: 145,
    badge: 'De Especialidad',
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=800&q=80',
    description: 'Masa densa con nueces de castilla tostadas y arándanos macerados en infusión de flor de naranja.',
    specs: ['Nueces tostadas', 'Arándano silvestre', 'Rico en fibra'],
    details: {
      fermentacion: '40 horas',
      origen: 'Centeno alemán y nuez nacional',
      maridaje: 'Queso azul Gorgonzola, miel de abeja melipona',
      alergenos: 'Gluten, Frutos secos (Nuez)'
    }
  },
  {
    id: 'flat-white-geisha',
    name: 'Flat White Geisha Finca San Juan',
    category: 'cafe',
    categoryLabel: 'Café de Especialidad',
    price: 75,
    badge: 'Microlote 88 pts',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    description: 'Doble shot de espresso variedad Geisha con notas de jazmín y durazno, emulsionado con leche microtexturizada de rancho.',
    specs: ['Tueste Medio', '88 Puntos SCA', 'Leche cremada a 65°C'],
    details: {
      fermentacion: 'Beneficio anaeróbico 72h',
      origen: 'Finca San Juan, Chiapas (1,600 msnm)',
      maridaje: 'Croissant de mantequilla o Kouign-Amann',
      alergenos: 'Lácteos (opción leche de almendra/avena disponible)'
    }
  },
  {
    id: 'cold-brew-orange',
    name: 'Cold Brew Citrus & Lavanda',
    category: 'cafe',
    categoryLabel: 'Café de Especialidad',
    price: 85,
    badge: 'Refrescante',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80',
    description: 'Extracción lenta en frío durante 18 horas, servido sobre hielo cristal con rodaja de naranja deshidratada y toque de lavanda.',
    specs: ['18h Extracción', 'Baja acidez', 'Servido en frío'],
    details: {
      fermentacion: 'Maceración lenta a 4°C',
      origen: 'Pluma Hidalgo, Oaxaca',
      maridaje: 'Focaccia genovesa o Macarons de frambuesa',
      alergenos: 'Ninguno'
    }
  },
  {
    id: 'matcha-ceremonial',
    name: 'Matcha Latte Ceremonial Kioto',
    category: 'cafe',
    categoryLabel: 'Bebidas de Autor',
    price: 90,
    badge: 'Grado Ceremonial',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80',
    description: 'Matcha 100% puro de primera cosecha batido a mano con chasen de bambú, leche al gusto y sutil toque de miel de agave.',
    specs: ['Uji, Japón', 'Antioxidante', 'Bebida Zen'],
    details: {
      fermentacion: 'Molido fino en piedra',
      origen: 'Uji, Kioto (Japón)',
      maridaje: 'Éclair de pistacho o Basque Cheesecake',
      alergenos: 'Lácteos (o alternativas vegetales)'
    }
  }
];

// ==========================================
// 2. STATE MANAGEMENT
// ==========================================
let cart = JSON.parse(localStorage.getItem('latelier_cart')) || [];
let activeCategory = 'todos';
let searchQuery = '';

// Custom Cake Configurator State
let cakeConfig = {
  size: '12',
  sizeLabel: 'Boutique (12-15 personas)',
  sizePrice: 550,
  sponge: 'Vainilla de Papantla Orgánica',
  spongePrice: 0,
  filling: 'Ganache de Pistacho de Bronte & Maracuyá',
  fillingPrice: 90,
  finish: 'Minimalista Seda con Pétalos Comestibles',
  finishPrice: 0,
  dedication: ''
};

// ==========================================
// 3. DOM ELEMENTS
// ==========================================
const productsGrid = document.getElementById('productsGrid');
const categoryFilters = document.getElementById('categoryFilters');
const searchInput = document.getElementById('searchInput');

// Cart DOM
const cartBtn = document.getElementById('cartBtn');
const cartCount = document.getElementById('cartCount');
const cartDrawer = document.getElementById('cartDrawer');
const cartBackdrop = document.getElementById('cartBackdrop');
const cartCloseBtn = document.getElementById('cartCloseBtn');
const cartItemsList = document.getElementById('cartItemsList');
const cartSubtotal = document.getElementById('cartSubtotal');
const cartTotal = document.getElementById('cartTotal');
const trackerText = document.getElementById('trackerText');
const trackerProgress = document.getElementById('trackerProgress');
const checkoutWhatsappBtn = document.getElementById('checkoutWhatsappBtn');
const clearCartBtn = document.getElementById('clearCartBtn');
const addressBox = document.getElementById('addressBox');
const customerAddress = document.getElementById('customerAddress');

// Modal DOM
const productModal = document.getElementById('productModal');
const productModalBackdrop = document.getElementById('productModalBackdrop');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalContent = document.getElementById('modalContent');

// Cake Configurator DOM
const cakeTotalPrice = document.getElementById('cakeTotalPrice');
const cakeServings = document.getElementById('cakeServings');
const sizeOptions = document.getElementById('sizeOptions');
const spongeOptions = document.getElementById('spongeOptions');
const fillingOptions = document.getElementById('fillingOptions');
const finishOptions = document.getElementById('finishOptions');
const dedicationText = document.getElementById('dedicationText');
const orderCustomCakeBtn = document.getElementById('orderCustomCakeBtn');
const tierBaseLabel = document.getElementById('tierBaseLabel');
const tierMidLabel = document.getElementById('tierMidLabel');
const tierTopLabel = document.getElementById('tierTopLabel');

// ==========================================
// 4. RENDERING FUNCTIONS
// ==========================================

function renderProducts() {
  const filtered = PRODUCTS.filter(product => {
    const matchesCat = (activeCategory === 'todos') || (product.category === activeCategory);
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = !query || 
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.specs.some(s => s.toLowerCase().includes(query));
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    productsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--color-muted);">
        <i class="fa-solid fa-bread-slice" style="font-size: 42px; margin-bottom: 16px; opacity: 0.5;"></i>
        <h3 style="font-size: 20px; color: var(--color-primary); margin-bottom: 8px;">No encontramos coincidencias</h3>
        <p>Intenta con otra palabra como "croissant", "vainilla" o "masa madre".</p>
      </div>
    `;
    return;
  }

  productsGrid.innerHTML = filtered.map(product => `
    <article class="product-card" data-id="${product.id}">
      <div class="product-img-holder">
        <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy">
        ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
        <button class="quick-view-btn" onclick="openProductModal('${product.id}')" title="Ver detalles e ingredientes" aria-label="Vista rápida">
          <i class="fa-solid fa-eye"></i>
        </button>
      </div>
      <div class="product-body">
        <span class="product-category-tag">${product.categoryLabel}</span>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <div class="product-specs">
          ${product.specs.map(spec => `<span class="spec-chip">${spec}</span>`).join('')}
        </div>
        <div class="product-footer">
          <div class="product-price">
            <span class="price-currency">Precio artesanal</span>
            <span class="price-amount">$${product.price} <small style="font-size: 13px; font-weight: 500;">MXN</small></span>
          </div>
          <button class="add-cart-btn" onclick="addToCart('${product.id}')" aria-label="Agregar ${product.name} a la bolsa">
            <i class="fa-solid fa-plus"></i>
            <span>Agregar</span>
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

function updateCartUI() {
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalCount;

  // Save to localStorage
  localStorage.setItem('latelier_cart', JSON.stringify(cart));

  if (cart.length === 0) {
    cartItemsList.innerHTML = `
      <div class="empty-cart-state">
        <i class="fa-solid fa-bag-shopping"></i>
        <h4>Tu bolsa está vacía</h4>
        <p>Descubre nuestros panes recién horneados y bollería fina para deleitar tu día.</p>
      </div>
    `;
    cartSubtotal.textContent = '$0.00 MXN';
    cartTotal.textContent = '$0.00 MXN';
    trackerText.textContent = 'Agrega $350 para Envío Gratis';
    trackerProgress.style.width = '0%';
    return;
  }

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  // Free Shipping Calculation ($350 MXN goal)
  const freeShippingThreshold = 350;
  if (subtotal >= freeShippingThreshold) {
    trackerText.innerHTML = `🎉 <strong>¡Felicidades!</strong> Tienes Envío Gratis en esta orden.`;
    trackerProgress.style.width = '100%';
    trackerProgress.style.backgroundColor = '#34C759';
  } else {
    const diff = freeShippingThreshold - subtotal;
    const pct = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
    trackerText.innerHTML = `Faltan <strong>$${diff} MXN</strong> para conseguir <strong>Envío Gratis</strong>`;
    trackerProgress.style.width = `${pct}%`;
    trackerProgress.style.backgroundColor = 'var(--color-accent)';
  }

  cartSubtotal.textContent = `$${subtotal} MXN`;
  cartTotal.textContent = `$${subtotal} MXN`;

  cartItemsList.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-details">
        <h4 class="cart-item-name">${item.name}</h4>
        <div class="cart-item-price">$${item.price} MXN c/u</div>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="updateItemQty('${item.id}', -1)" aria-label="Disminuir">-</button>
          <span class="cart-item-qty">${item.quantity}</span>
          <button class="qty-btn" onclick="updateItemQty('${item.id}', 1)" aria-label="Aumentar">+</button>
          <button class="remove-item-btn" onclick="removeFromCart('${item.id}')" title="Eliminar" aria-label="Eliminar producto">
            <i class="fa-regular fa-trash-can"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// ==========================================
// 5. CART OPERATIONS & WHATSAPP CHECKOUT
// ==========================================

function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  }

  updateCartUI();
  showToast(`✨ Se agregó "${product.name}" a tu bolsa`);
  openCartDrawer();
}

function updateItemQty(productId, delta) {
  const itemIndex = cart.findIndex(i => i.id === productId);
  if (itemIndex > -1) {
    cart[itemIndex].quantity += delta;
    if (cart[itemIndex].quantity <= 0) {
      cart.splice(itemIndex, 1);
    }
  }
  updateCartUI();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartUI();
}

function clearCart() {
  if (cart.length === 0) return;
  if (confirm('¿Deseas vaciar tu bolsa de compra?')) {
    cart = [];
    updateCartUI();
    showToast('Bolsa vaciada');
  }
}

function openCartDrawer() {
  cartDrawer.classList.add('active');
  cartBackdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  cartDrawer.classList.remove('active');
  cartBackdrop.classList.remove('active');
  document.body.style.overflow = '';
}

function processWhatsappCheckout() {
  if (cart.length === 0) {
    showToast('Tu bolsa está vacía. Selecciona algún producto.');
    return;
  }

  const deliveryMethod = document.querySelector('input[name="deliveryMethod"]:checked').value;
  const address = customerAddress.value.trim();

  if (deliveryMethod === 'delivery' && !address) {
    alert('Por favor ingresa tu dirección para calcular tu entrega.');
    customerAddress.focus();
    return;
  }

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  let msg = `🥖 *¡HOLA L'ATELIER DU PAIN!* 🥖\n`;
  msg += `Deseo confirmar el siguiente pedido gourmet desde su sitio web:\n\n`;
  msg += `*DETALLE DE LA ORDEN:*\n`;

  cart.forEach((item, idx) => {
    msg += `• ${item.quantity}x ${item.name} — $${item.price * item.quantity} MXN\n`;
  });

  msg += `\n*TOTAL:* $${subtotal} MXN\n`;
  msg += `*MÉTODO DE ENTREGA:* ${deliveryMethod === 'delivery' ? '🛵 Envío a Domicilio' : '🏪 Recoger en Tienda (Boutique Providencia)'}\n`;

  if (deliveryMethod === 'delivery') {
    msg += `*DIRECCIÓN:* ${address}\n`;
  }

  msg += `\n¿Me confirman disponibilidad para programar la entrega/horneada? Muchas gracias.`;

  const phone = '523312345678';
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(msg)}`;
  
  window.open(whatsappUrl, '_blank');
  showToast('Abriendo WhatsApp para confirmar tu pedido...');
}

// ==========================================
// 6. PRODUCT QUICK LOOK MODAL
// ==========================================

function openProductModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  modalContent.innerHTML = `
    <div class="modal-grid">
      <div class="modal-img-wrapper">
        <img src="${product.image}" alt="${product.name}" class="modal-img">
      </div>
      <div class="modal-info">
        <span class="modal-category">${product.categoryLabel}</span>
        <h2 class="modal-title">${product.name}</h2>
        <p class="modal-desc">${product.description}</p>
        
        <div class="modal-features">
          <div class="modal-feat-row">
            <strong>Fermentación:</strong>
            <span>${product.details.fermentacion}</span>
          </div>
          <div class="modal-feat-row">
            <strong>Ingredientes Clave:</strong>
            <span>${product.details.origen}</span>
          </div>
          <div class="modal-feat-row">
            <strong>Maridaje Sugerido:</strong>
            <span>${product.details.maridaje}</span>
          </div>
          <div class="modal-feat-row">
            <strong>Alérgenos:</strong>
            <span>${product.details.alergenos}</span>
          </div>
        </div>

        <div class="modal-footer">
          <div>
            <span style="font-size: 11px; text-transform: uppercase; color: var(--color-muted); font-weight: 700; display: block;">Precio unitario</span>
            <span class="modal-price">$${product.price} MXN</span>
          </div>
          <button class="btn-apple-primary" onclick="addToCart('${product.id}'); closeProductModal();">
            <i class="fa-solid fa-bag-shopping"></i>
            <span>Agregar a la Bolsa</span>
          </button>
        </div>
      </div>
    </div>
  `;

  productModal.classList.add('active');
  productModalBackdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  productModal.classList.remove('active');
  productModalBackdrop.classList.remove('active');
  document.body.style.overflow = '';
}

// ==========================================
// 7. CUSTOM CAKE CONFIGURATOR LOGIC
// ==========================================

function updateCakeConfigurator() {
  const total = cakeConfig.sizePrice + cakeConfig.spongePrice + cakeConfig.fillingPrice + cakeConfig.finishPrice;
  cakeTotalPrice.textContent = `$${total} MXN`;
  
  if (cakeConfig.size === '12') {
    cakeServings.textContent = 'Para 12 a 15 personas • 1 Piso de 20cm';
    tierBaseLabel.textContent = cakeConfig.sponge;
    tierMidLabel.textContent = cakeConfig.filling;
    tierTopLabel.textContent = cakeConfig.finish;
  } else if (cakeConfig.size === '25') {
    cakeServings.textContent = 'Para 20 a 25 personas • 2 Pisos Esculpidos';
    tierBaseLabel.textContent = `${cakeConfig.sponge} (2 Pisos)`;
    tierMidLabel.textContent = cakeConfig.filling;
    tierTopLabel.textContent = cakeConfig.finish;
  } else {
    cakeServings.textContent = 'Para 40 a 45 personas • 3 Pisos Celebración Real';
    tierBaseLabel.textContent = `${cakeConfig.sponge} (3 Pisos)`;
    tierMidLabel.textContent = cakeConfig.filling;
    tierTopLabel.textContent = cakeConfig.finish;
  }
}

function setupConfiguratorListeners() {
  // Size selection
  sizeOptions.querySelectorAll('.pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      sizeOptions.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      cakeConfig.size = btn.dataset.size;
      cakeConfig.sizeLabel = btn.dataset.label;
      cakeConfig.sizePrice = parseInt(btn.dataset.price, 10);
      updateCakeConfigurator();
    });
  });

  // Sponge selection
  spongeOptions.querySelectorAll('.pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      spongeOptions.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      cakeConfig.sponge = btn.dataset.sponge;
      cakeConfig.spongePrice = parseInt(btn.dataset.price, 10);
      updateCakeConfigurator();
    });
  });

  // Filling selection
  fillingOptions.querySelectorAll('.pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      fillingOptions.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      cakeConfig.filling = btn.dataset.filling;
      cakeConfig.fillingPrice = parseInt(btn.dataset.price, 10);
      updateCakeConfigurator();
    });
  });

  // Finish selection
  finishOptions.querySelectorAll('.pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      finishOptions.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      cakeConfig.finish = btn.dataset.finish;
      cakeConfig.finishPrice = parseInt(btn.dataset.price, 10);
      updateCakeConfigurator();
    });
  });

  // Dedication input
  dedicationText.addEventListener('input', (e) => {
    cakeConfig.dedication = e.target.value.trim();
  });

  // Send WhatsApp Quote for Custom Cake
  orderCustomCakeBtn.addEventListener('click', () => {
    const total = cakeConfig.sizePrice + cakeConfig.spongePrice + cakeConfig.fillingPrice + cakeConfig.finishPrice;
    
    let msg = `🎂 *SOLICITUD DE PASTEL BESPOKE — L'ATELIER* 🎂\n`;
    msg += `Deseo cotizar y agendar un pastel de autor configurado a la medida:\n\n`;
    msg += `• *Tamaño:* ${cakeConfig.sizeLabel}\n`;
    msg += `• *Bizcocho:* ${cakeConfig.sponge}\n`;
    msg += `• *Relleno Gourmet:* ${cakeConfig.filling}\n`;
    msg += `• *Acabado de Diseño:* ${cakeConfig.finish}\n`;
    
    if (cakeConfig.dedication) {
      msg += `• *Dedicatoria/Mensaje:* "${cakeConfig.dedication}"\n`;
    }

    msg += `\n*Presupuesto Estimado:* $${total} MXN\n`;
    msg += `¿Podrían confirmarme la fecha y agenda de elaboración? ¡Muchas gracias!`;

    const phone = '523312345678';
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, '_blank');
    showToast('Abriendo WhatsApp con la cotización de tu pastel...');
  });
}

// ==========================================
// 8. TOAST SYSTEM
// ==========================================
function showToast(message) {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fa-solid fa-sparkles"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    if (toast && toast.parentNode) {
      toast.remove();
    }
  }, 3000);
}

// ==========================================
// 9. EVENT LISTENERS & INITIALIZATION
// ==========================================
function init() {
  // Category Filter clicks
  categoryFilters.querySelectorAll('.filter-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      categoryFilters.querySelectorAll('.filter-chip').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.category;
      renderProducts();
    });
  });

  // Search input live filter
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderProducts();
  });

  // Cart Drawer open / close
  cartBtn.addEventListener('click', openCartDrawer);
  cartCloseBtn.addEventListener('click', closeCartDrawer);
  cartBackdrop.addEventListener('click', closeCartDrawer);

  // Delivery toggle
  document.querySelectorAll('input[name="deliveryMethod"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      if (e.target.value === 'delivery') {
        addressBox.style.display = 'block';
      } else {
        addressBox.style.display = 'none';
      }
    });
  });

  // Cart Actions
  clearCartBtn.addEventListener('click', clearCart);
  checkoutWhatsappBtn.addEventListener('click', processWhatsappCheckout);

  // Modal Backdrop & Close
  modalCloseBtn.addEventListener('click', closeProductModal);
  productModalBackdrop.addEventListener('click', closeProductModal);

  // Close modals on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCartDrawer();
      closeProductModal();
    }
  });

  // Initialize Configurator & Products
  setupConfiguratorListeners();
  updateCakeConfigurator();
  renderProducts();
  updateCartUI();
}

// Start app
document.addEventListener('DOMContentLoaded', init);
