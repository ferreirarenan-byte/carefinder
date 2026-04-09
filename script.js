// Dados iniciais (Cuidadores Fake com coordenadas reais de São Paulo)
const initialCaregivers = [
    {
        id: 1,
        name: "Ana Oliveira",
        rating: 4.9,
        reviews: 124,
        price: 45,
        distance: 1.2,
        estado: "SP",
        cidade: "São Paulo",
        bairro: "Jardins",
        type: "avancado",
        skills: ["Enfermagem", "Medicação", "Pós-operatório"],
        avatar: "https://images.unsplash.com/photo-1559839734-2b71f1e3c770?auto=format&fit=crop&q=80&w=150",
        lat: -23.5615,
        lng: -46.6560,
        experience: "10 anos de experiência em hospitais. Especialista em cuidados pós-operatórios e gerenciamento de medicações. Trabalho com paciência, dedicação e humanidade.",
        bio: "Enfermeira formada pela USP com especialização em gerontologia. Atendo com carinho e profissionalismo.",
        services: [
            { name: "Banho e Higiene", icon: "droplet" },
            { name: "Medicação", icon: "pill" },
            { name: "Curativos", icon: "bandage" },
            { name: "Acompanhamento Médico", icon: "stethoscope" },
            { name: "Pós-operatório", icon: "heart" },
            { name: "Monitoramento de Sinais", icon: "activity" }
        ],
        availability: [
            { day: "Segunda", hours: "08:00 - 18:00" },
            { day: "Terça", hours: "08:00 - 18:00" },
            { day: "Quarta", hours: "08:00 - 18:00" },
            { day: "Quinta", hours: "08:00 - 18:00" },
            { day: "Sexta", hours: "08:00 - 18:00" },
            { day: "Sábado", hours: "09:00 - 13:00" }
        ],
        certificates: [
            { name: "Enfermagem", year: "2012" },
            { name: "Gerontologia", year: "2015" },
            { name: "Primeiros Socorros", year: "2023" }
        ]
    },
    {
        id: 2,
        name: "Carlos Santos",
        rating: 4.7,
        reviews: 89,
        price: 35,
        distance: 2.5,
        estado: "SP",
        cidade: "São Paulo",
        bairro: "Pinheiros",
        type: "intermediario",
        skills: ["Companhia", "Alimentação", "Medicação"],
        avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=150",
        lat: -23.5505,
        lng: -46.6333,
        experience: "Especialista em cuidados com Alzheimer. 8 anos de experiência em casas de repouso e atendimento domiciliar. Paciente, dedicado e com excelente comunicação.",
        bio: "Técnico em enfermagem com foco em demência e Alzheimer. Trabalho com empatia e respeito.",
        services: [
            { name: "Companhia", icon: "users" },
            { name: "Alimentação", icon: "utensils" },
            { name: "Medicação", icon: "pill" },
            { name: "Passeios", icon: "map" },
            { name: "Limpeza", icon: "home" },
            { name: "Estimulação Cognitiva", icon: "brain" }
        ],
        availability: [
            { day: "Segunda", hours: "07:00 - 19:00" },
            { day: "Terça", hours: "07:00 - 19:00" },
            { day: "Quarta", hours: "07:00 - 19:00" },
            { day: "Quinta", hours: "07:00 - 19:00" },
            { day: "Sexta", hours: "07:00 - 19:00" },
            { day: "Sábado", hours: "08:00 - 14:00" }
        ],
        certificates: [
            { name: "Técnico em Enfermagem", year: "2014" },
            { name: "Cuidador de Alzheimer", year: "2018" }
        ]
    },
    {
        id: 3,
        name: "Mariana Costa",
        rating: 4.8,
        reviews: 56,
        price: 40,
        distance: 0.8,
        estado: "SP",
        cidade: "São Paulo",
        bairro: "Vila Mariana",
        type: "basico",
        skills: ["Companhia", "Passeios", "Higiene"],
        avatar: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=150",
        lat: -23.5881,
        lng: -46.6235,
        experience: "Formada em fisioterapia, focada em mobilidade. 6 anos de experiência com idosos. Trabalho com dinamismo, alegria e profissionalismo.",
        bio: "Fisioterapeuta com especialização em gerontologia. Minha paixão é melhorar a qualidade de vida dos idosos.",
        services: [
            { name: "Companhia", icon: "users" },
            { name: "Passeios", icon: "map" },
            { name: "Higiene", icon: "droplet" },
            { name: "Exercícios", icon: "activity" },
            { name: "Reabilitação", icon: "heart" },
            { name: "Mobilidade", icon: "move" }
        ],
        availability: [
            { day: "Segunda", hours: "09:00 - 17:00" },
            { day: "Terça", hours: "09:00 - 17:00" },
            { day: "Quarta", hours: "09:00 - 17:00" },
            { day: "Quinta", hours: "09:00 - 17:00" },
            { day: "Sexta", hours: "09:00 - 17:00" },
            { day: "Domingo", hours: "10:00 - 14:00" }
        ],
        certificates: [
            { name: "Fisioterapia", year: "2016" },
            { name: "Gerontologia", year: "2019" }
        ]
    },
    {
        id: 4,
        name: "Roberto Lima",
        rating: 4.5,
        reviews: 42,
        price: 30,
        distance: 3.2,
        estado: "SP",
        cidade: "São Paulo",
        bairro: "Moema",
        type: "basico",
        skills: ["Companhia", "Cozinha", "Leitura"],
        avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=150",
        lat: -23.6129,
        lng: -46.5900,
        experience: "Cuidado humanizado com foco em bem-estar emocional. 5 anos de experiência. Trabalho com paciência, respeito e dedicação.",
        bio: "Cuidador experiente com foco em companhia e bem-estar. Gosto de ouvir histórias e fazer novas amizades.",
        services: [
            { name: "Companhia", icon: "users" },
            { name: "Cozinha", icon: "utensils" },
            { name: "Leitura", icon: "book" },
            { name: "Conversa", icon: "message-circle" },
            { name: "Passeios", icon: "map" },
            { name: "Organização", icon: "home" }
        ],
        availability: [
            { day: "Segunda", hours: "10:00 - 18:00" },
            { day: "Terça", hours: "10:00 - 18:00" },
            { day: "Quarta", hours: "10:00 - 18:00" },
            { day: "Quinta", hours: "10:00 - 18:00" },
            { day: "Sexta", hours: "10:00 - 18:00" }
        ],
        certificates: [
            { name: "Cuidador de Idosos", year: "2019" }
        ]
    },
    {
        id: 5,
        name: "Fernanda Rocha",
        rating: 4.6,
        reviews: 67,
        price: 38,
        distance: 1.8,
        estado: "RJ",
        cidade: "Rio de Janeiro",
        bairro: "Copacabana",
        type: "intermediario",
        skills: ["Companhia", "Higiene", "Medicação"],
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
        lat: -22.9829,
        lng: -43.1899,
        experience: "Especialista em cuidados pós-cirúrgicos. 7 anos de experiência. Trabalho com responsabilidade e dedicação total.",
        bio: "Enfermeira com experiência em pós-operatório e reabilitação. Atendo com profissionalismo e humanidade.",
        services: [
            { name: "Companhia", icon: "users" },
            { name: "Higiene", icon: "droplet" },
            { name: "Medicação", icon: "pill" },
            { name: "Curativos", icon: "bandage" },
            { name: "Reabilitação", icon: "heart" },
            { name: "Monitoramento", icon: "activity" }
        ],
        availability: [
            { day: "Segunda", hours: "08:00 - 18:00" },
            { day: "Terça", hours: "08:00 - 18:00" },
            { day: "Quarta", hours: "08:00 - 18:00" },
            { day: "Quinta", hours: "08:00 - 18:00" },
            { day: "Sexta", hours: "08:00 - 18:00" }
        ],
        certificates: [
            { name: "Enfermagem", year: "2015" },
            { name: "Pós-operatório", year: "2018" }
        ]
    }
];

// Estado da Aplicacao
let caregivers = JSON.parse(localStorage.getItem('caregivers')) || initialCaregivers;
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
let googleMap = null;
let markers = [];

// Seletores DOM
const caregiversList = document.getElementById('caregivers-list');
const googleMapContainer = document.getElementById('google-map');
const drawer = document.getElementById('drawer-right');
const drawerContent = document.getElementById('drawer-content');
const drawerOverlay = document.getElementById('drawer-overlay');
const closeDrawerBtn = document.getElementById('close-drawer');
const userArea = document.getElementById('user-area');
const raioInput = document.getElementById('filter-raio');
const raioVal = document.getElementById('raio-val');
const filterEstado = document.getElementById('filter-estado');
const filterCidade = document.getElementById('filter-cidade');
const filterBairro = document.getElementById('filter-bairro');

// Inicializacao
document.addEventListener('DOMContentLoaded', () => {
    initializeGoogleMap();
    renderCaregivers(caregivers);
    updateUserUI();
    
    // Event Listeners
    raioInput.addEventListener('input', (e) => {
        raioVal.textContent = `${e.target.value} km`;
    });

    document.getElementById('btn-search').addEventListener('click', filterCaregivers);
    document.getElementById('btn-login').addEventListener('click', openLoginDrawer);
    document.getElementById('btn-be-caregiver').addEventListener('click', openBeCaregiverDrawer);
    document.getElementById('btn-my-bookings').addEventListener('click', openMyBookingsDrawer);
    
    closeDrawerBtn.addEventListener('click', closeDrawer);
    drawerOverlay.addEventListener('click', closeDrawer);
});

// Inicializar Leaflet Map
function initializeGoogleMap() {
    const defaultCenter = [-23.5505, -46.6333];
    
    googleMap = L.map(googleMapContainer).setView(defaultCenter, 13);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(googleMap);

    renderMapMarkers(caregivers);
}

// Renderizar marcadores no mapa
function renderMapMarkers(list) {
    markers.forEach(marker => googleMap.removeLayer(marker));
    markers = [];

    list.forEach(cg => {
        const customIcon = L.divIcon({
            html: `
                <div style="
                    width: 32px;
                    height: 32px;
                    background: #008080;
                    border: 3px solid white;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: bold;
                    color: white;
                    font-size: 14px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.3);
                    cursor: pointer;
                ">
                    ♥
                </div>
            `,
            iconSize: [32, 32],
            className: 'custom-marker'
        });

        const marker = L.marker([cg.lat, cg.lng], { icon: customIcon })
            .bindPopup(`
                <div style="padding: 10px; font-family: 'Plus Jakarta Sans', sans-serif; width: 200px;">
                    <h4 style="margin: 0 0 5px 0; color: #008080;">${cg.name}</h4>
                    <p style="margin: 2px 0; font-size: 0.85rem;"><strong>⭐ ${cg.rating}</strong> | R$ ${cg.price}/h</p>
                    <p style="margin: 2px 0; font-size: 0.85rem;">${cg.bairro}, ${cg.cidade}</p>
                    <p style="margin: 5px 0 0 0; font-size: 0.8rem; color: #666;">${cg.skills.slice(0,2).join(', ')}</p>
                    <button onclick="openCaregiverDetail(${cg.id})" style="margin-top: 10px; padding: 8px 12px; background: #008080; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; width: 100%;">Ver Detalhes</button>
                </div>
            `)
            .addTo(googleMap);

        markers.push(marker);
    });
}

// Funcoes de Renderizacao
function renderCaregivers(list) {
    caregiversList.innerHTML = '';
    if (list.length === 0) {
        caregiversList.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px;">Nenhum cuidador encontrado com esses filtros.</p>';
        return;
    }
    
    list.forEach(cg => {
        const card = document.createElement('div');
        card.className = 'caregiver-card glass';
        card.style.cursor = 'pointer';
        card.innerHTML = `
            <div class="card-header">
                <img src="${cg.avatar}" class="avatar" alt="${cg.name}">
                <div class="caregiver-info">
                    <h4>${cg.name}</h4>
                    <div class="rating">
                        <i data-lucide="star" style="width:14px; fill: #ff8c00;"></i>
                        <span>${cg.rating} (<a href="#" onclick="event.stopPropagation(); openReviewsDrawer(${cg.id}); return false;" style="text-decoration: underline; color: var(--teal); cursor: pointer;">${cg.reviews} avaliações</a>)</span>
                    </div>
                </div>
            </div>
            <div class="card-details">
                <p><i data-lucide="map-pin" style="width:14px"></i> ${cg.bairro}, ${cg.cidade}</p>
                <p><i data-lucide="activity" style="width:14px"></i> ${cg.type.charAt(0).toUpperCase() + cg.type.slice(1)}</p>
                <span class="price-tag">R$ ${cg.price}/hora</span>
                <div class="badges">
                    ${cg.skills.map(s => `<span class="badge">${s}</span>`).join('')}
                </div>
            </div>
            <div class="card-actions">
                <button class="btn-primary" onclick="event.stopPropagation(); openCaregiverDetail(${cg.id})" style="width: 100%; padding: 12px;">Ver Detalhes</button>
            </div>
        `;
        card.addEventListener('click', () => openCaregiverDetail(cg.id));
        caregiversList.appendChild(card);
    });
    lucide.createIcons();
}

// Abrir Tela de Detalhes do Cuidador
function openCaregiverDetail(id) {
    const cg = caregivers.find(c => c.id === id);
    if (!cg) return;

    const servicesHtml = cg.services.map(s => `
        <div class="service-item">
            <i data-lucide="${s.icon}"></i>
            <span>${s.name}</span>
        </div>
    `).join('');

    const availabilityHtml = cg.availability.map(a => `
        <div class="availability-item">
            <strong>${a.day}</strong>
            <span>${a.hours}</span>
        </div>
    `).join('');

    const certificatesHtml = cg.certificates.map(c => `
        <div class="certificate-item">
            <i data-lucide="award"></i>
            <span>${c.name} (${c.year})</span>
        </div>
    `).join('');

    const detailContent = `
        <div class="caregiver-detail-header">
            <div class="caregiver-detail-cover">
                <img src="${cg.avatar}" class="caregiver-detail-avatar" alt="${cg.name}">
                <div class="caregiver-detail-info">
                    <h2>${cg.name}</h2>
                    <div class="rating">
                        <i data-lucide="star" style="width:16px; fill: currentColor;"></i>
                        <span>${cg.rating} (${cg.reviews} avaliações)</span>
                    </div>
                    <p style="margin-top: 8px; font-size: 0.9rem;">${cg.bairro}, ${cg.cidade}</p>
                </div>
            </div>
        </div>

        <div class="detail-section">
            <h3>Sobre</h3>
            <p>${cg.bio}</p>
            <p style="font-style: italic; color: var(--teal); margin-top: 10px;">"${cg.experience}"</p>
        </div>

        <div class="detail-section">
            <h3>Estatísticas</h3>
            <div class="stats-grid">
                <div class="stat-item">
                    <strong>${cg.reviews}</strong>
                    <span>Avaliações</span>
                </div>
                <div class="stat-item">
                    <strong>⭐${cg.rating}</strong>
                    <span>Nota Média</span>
                </div>
                <div class="stat-item">
                    <strong>R$ ${cg.price}</strong>
                    <span>Por Hora</span>
                </div>
            </div>
        </div>

        <div class="detail-section">
            <h3>Serviços Oferecidos</h3>
            <div class="services-grid">
                ${servicesHtml}
            </div>
        </div>

        <div class="detail-section">
            <h3>Disponibilidade</h3>
            <div class="availability-grid">
                ${availabilityHtml}
            </div>
        </div>

        <div class="detail-section">
            <h3>Certificações e Especializações</h3>
            <div class="certificates-grid">
                ${certificatesHtml}
            </div>
        </div>

        <div class="detail-actions">
            <button class="btn-secondary" onclick="openReviewsDrawer(${cg.id})">Ver Avaliações</button>
            <button class="btn-primary" onclick="openBookingDrawer(${cg.id})">Reservar Agora</button>
        </div>
    `;

    openDrawer(detailContent);
}

// Funcoes de Drawer
function openDrawer(content) {
    drawerContent.innerHTML = content;
    drawer.classList.add('open');
    drawerOverlay.style.display = 'block';
    lucide.createIcons();
    setupDrawerClose();
}

function closeDrawer() {
    drawer.classList.remove('open');
    drawerOverlay.style.display = 'none';
    drawerContent.innerHTML = '';
}

// Fechar drawer ao clicar no overlay
function setupDrawerClose() {
    // Remover listeners antigos para evitar duplicação
    const newCloseBtn = document.getElementById('close-drawer');
    if (newCloseBtn) {
        newCloseBtn.replaceWith(newCloseBtn.cloneNode(true));
        document.getElementById('close-drawer').addEventListener('click', closeDrawer);
    }
}

// Logica de Filtros
function filterCaregivers() {
    const estado = filterEstado.value;
    const cidade = filterCidade.value.toLowerCase();
    const bairro = filterBairro.value.toLowerCase();
    const raio = parseInt(raioInput.value);
    const tipo = document.getElementById('filter-tipo').value;
    const minStars = document.querySelector('input[name="min-stars"]:checked')?.value || 0;

    const filtered = caregivers.filter(cg => {
        const matchEstado = !estado || cg.estado === estado;
        const matchCidade = !cidade || cg.cidade.toLowerCase().includes(cidade);
        const matchBairro = !bairro || cg.bairro.toLowerCase().includes(bairro);
        const matchRaio = cg.distance <= raio;
        const matchTipo = tipo === 'todos' || cg.type === tipo;
        const matchStars = cg.rating >= parseFloat(minStars);
        return matchEstado && matchCidade && matchBairro && matchRaio && matchTipo && matchStars;
    });

    renderCaregivers(filtered);
    renderMapMarkers(filtered);
    
    if (filtered.length > 0) {
        const bounds = L.latLngBounds(filtered.map(cg => [cg.lat, cg.lng]));
        googleMap.fitBounds(bounds, { padding: [50, 50] });
    }
}

// Login Demo
function openLoginDrawer() {
    openDrawer(`
        <h2>Entrar no Carefinder</h2>
        <p style="margin-bottom: 20px; color: var(--text-muted)">Acesse sua conta para gerenciar suas reservas.</p>
        <button class="btn-secondary" style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 10px; margin-bottom: 15px;" onclick="simulateGoogleLogin()">
            <svg width="18" height="18" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
            Entrar com Google
        </button>
        <div style="text-align: center; margin: 15px 0; color: #ccc;">ou</div>
        <div class="form-group">
            <label>E-mail</label>
            <input type="email" placeholder="seu@email.com">
        </div>
        <div class="form-group">
            <label>Senha</label>
            <input type="password" placeholder="••••••••">
        </div>
        <button class="btn-primary" style="width: 100%; margin-top: 10px;" onclick="simulateGoogleLogin()">Entrar</button>
    `);
}

function simulateGoogleLogin() {
    currentUser = {
        name: "Ricardo Silva",
        email: "ricardo.silva@gmail.com",
        age: 42,
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
    };
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    updateUserUI();
    closeDrawer();
}

function updateUserUI() {
    if (currentUser) {
        userArea.innerHTML = `
            <div class="user-profile">
                <img src="${currentUser.photo}" class="user-avatar">
                <div class="user-info">
                    <span>${currentUser.name}, ${currentUser.age}</span><br>
                    <button onclick="logout()" style="background:none; color:var(--orange); font-size:0.7rem; padding:0">Sair</button>
                </div>
            </div>
        `;
    } else {
        userArea.innerHTML = `<button id="btn-login" class="btn-primary" onclick="openLoginDrawer()">Entrar</button>`;
    }
}

function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateUserUI();
}

// Avaliacoes
function openReviewsDrawer(id) {
    const cg = caregivers.find(c => c.id === id);
    openDrawer(`
        <h2>Avaliações: ${cg.name}</h2>
        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px;">
            <span style="font-size: 2.5rem; font-weight: 800; color: var(--orange)">${cg.rating}</span>
            <div>
                <div class="rating">⭐⭐⭐⭐⭐</div>
                <span style="color: var(--text-muted)">Baseado em ${cg.reviews} avaliações</span>
            </div>
        </div>
        <div class="review-item">
            <div class="review-header">
                <span class="review-name">Maria Helena</span>
                <span class="rating">⭐⭐⭐⭐⭐</span>
            </div>
            <p>"Excelente profissional, muito pontual e atenciosa com minha mãe."</p>
            <div class="badges" style="margin-top: 5px">
                <span class="badge">Pontual</span> <span class="badge">Carinhosa</span>
            </div>
        </div>
        <div class="review-item">
            <div class="review-header">
                <span class="review-name">João Pedro</span>
                <span class="rating">⭐⭐⭐⭐</span>
            </div>
            <p>"Muito experiente, nos passou muita segurança."</p>
        </div>
    `);
}

// Reservas
function openBookingDrawer(id) {
    if (!currentUser) {
        openLoginDrawer();
        return;
    }
    const cg = caregivers.find(c => c.id === id);
    openDrawer(`
        <h2>Reservar: ${cg.name}</h2>
        <div class="form-group">
            <label>Data</label>
            <input type="date" id="book-date">
        </div>
        <div class="form-row" style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px">
            <div class="form-group">
                <label>Horário</label>
                <input type="time" id="book-time">
            </div>
            <div class="form-group">
                <label>Duração (horas)</label>
                <input type="number" id="book-hours" value="4" min="1">
            </div>
        </div>
        <div class="form-group">
            <label>Tipo de Cuidado</label>
            <select id="book-type">
                <option value="basico">Básico</option>
                <option value="intermediario">Intermediário</option>
                <option value="avancado">Avançado</option>
            </select>
        </div>
        <div class="form-group">
            <label>Endereço Completo</label>
            <input type="text" id="book-address" placeholder="Rua, número, complemento">
        </div>
        <div class="form-group">
            <label>Observações</label>
            <textarea id="book-obs" rows="3" placeholder="Ex: Necessário auxílio para banho..."></textarea>
        </div>
        <div style="background: var(--teal-light); padding: 15px; border-radius: 12px; margin: 20px 0;">
            <p style="display: flex; justify-content: space-between;"><strong>Total estimado:</strong> <span id="book-total">R$ ${cg.price * 4},00</span></p>
        </div>
        <h3>Pagamento</h3>
        <div class="form-group">
            <select id="book-payment">
                <option value="cartao">Cartão de Crédito</option>
                <option value="pix">PIX</option>
                <option value="carteira">Carteira Carefinder</option>
            </select>
        </div>
        <button class="btn-primary" style="width: 100%" onclick="confirmBooking(${cg.id})">Confirmar Pagamento</button>
    `);

    document.getElementById('book-hours').addEventListener('input', (e) => {
        const hours = e.target.value || 0;
        document.getElementById('book-total').textContent = `R$ ${cg.price * hours},00`;
    });
}

function confirmBooking(caregiverId) {
    const cg = caregivers.find(c => c.id === caregiverId);
    const newBooking = {
        id: Date.now(),
        caregiverId: caregiverId,
        caregiverName: cg.name,
        caregiverAvatar: cg.avatar,
        date: document.getElementById('book-date').value,
        time: document.getElementById('book-time').value,
        hours: document.getElementById('book-hours').value,
        total: cg.price * document.getElementById('book-hours').value,
        status: 'Agendado'
    };

    bookings.push(newBooking);
    localStorage.setItem('bookings', JSON.stringify(bookings));
    
    openDrawer(`
        <div style="text-align: center; padding: 40px 0;">
            <div style="background: #4caf50; color: white; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
                <i data-lucide="check" style="width: 40px; height: 40px;"></i>
            </div>
            <h2>Reserva Confirmada!</h2>
            <p>O pagamento foi processado e ${cg.name} já foi notificada.</p>
                <button class="btn-primary" style="margin-top: 20px; width: 100%;" onclick="closeDrawer(); setTimeout(() => openMyBookingsDrawer(), 300);">Ver Minha Reserva</button>
            <button class="btn-secondary" style="margin-top: 10px; width: 100%;" onclick="openChatDrawer(${caregiverId})">💬 Iniciar Chat</button>
        </div>
    `);
}

// Minhas Reservas
function openMyBookingsDrawer() {
    if (!currentUser) {
        openLoginDrawer();
        return;
    }
    
    let bookingsHtml = bookings.length === 0 
        ? '<p style="text-align:center; color:var(--text-muted); margin-top:40px;">Você ainda não tem reservas.</p>'
        : bookings.map(b => `
            <div class="glass" style="padding: 15px; margin-bottom: 15px; border-left: 4px solid ${b.isNew ? 'var(--orange)' : 'var(--teal)'}; position: relative;">
                ${b.isNew ? '<span style="position: absolute; top: 10px; right: 10px; background: var(--orange); color: white; padding: 4px 8px; border-radius: 12px; font-size: 0.65rem; font-weight: 700;">NOVA</span>' : ''}
                <div style="display: flex; gap: 10px; align-items: center; margin-bottom: 10px;">
                    <img src="${b.caregiverAvatar}" style="width:40px; height:40px; border-radius:50%">
                    <div>
                        <h4 style="font-size: 0.9rem">${b.caregiverName}</h4>
                        <span style="font-size: 0.75rem; color: var(--teal); font-weight: 700;">${b.status}</span>
                    </div>
                </div>
                <p style="font-size: 0.8rem;"><i data-lucide="calendar" style="width:12px"></i> ${b.date} às ${b.time} (${b.hours}h)</p>
                <div style="display: flex; gap: 10px; margin-top: 10px;">
                    <button class="btn-text-link" style="font-size: 0.75rem; flex: 1;" onclick="alert('Avaliação aberta!')">Avaliar Cuidador</button>
                    <button class="btn-primary" style="font-size: 0.75rem; flex: 1; padding: 6px 12px;" onclick="openChatDrawer(${b.caregiverId})">💬 Chat</button>
                </div>
            </div>
        `).join('');

    openDrawer(`
        <h2>Minhas Reservas</h2>
        ${bookingsHtml}
    `);
}

// Cadastro de Cuidador
function openBeCaregiverDrawer() {
    openDrawer(`
        <h2>Seja um Cuidador</h2>
        <p style="margin-bottom: 20px; color: var(--text-muted)">Cadastre-se para oferecer seus serviços na plataforma.</p>
        <div class="form-group">
            <label>Nome Completo</label>
            <input type="text" id="reg-name" placeholder="Como você quer ser chamado">
        </div>
        <div class="form-group">
            <label>Cuidados Praticados</label>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 5px; font-size: 0.85rem;">
                <label><input type="checkbox" value="Companhia"> Companhia</label>
                <label><input type="checkbox" value="Medicação"> Medicação</label>
                <label><input type="checkbox" value="Higiene"> Higiene</label>
                <label><input type="checkbox" value="Enfermagem"> Enfermagem</label>
            </div>
        </div>
        <div class="form-row" style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px">
            <div class="form-group">
                <label>Valor/Hora (R$)</label>
                <input type="number" id="reg-price" placeholder="40">
            </div>
            <div class="form-group">
                <label>Estado</label>
                <select id="reg-estado">
                    <option value="SP">São Paulo</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="MG">Minas Gerais</option>
                </select>
            </div>
        </div>
        <div class="form-group">
            <label>Cidade</label>
            <input type="text" id="reg-cidade" placeholder="Ex: São Paulo">
        </div>
        <div class="form-group">
            <label>Bairro Base</label>
            <input type="text" id="reg-bairro" placeholder="Ex: Centro">
        </div>
        <div class="form-group">
            <label>Documentos de Especialização</label>
            <input type="file" style="padding: 5px;">
        </div>
        <div class="form-group">
            <label>Experiência / Observações</label>
            <textarea id="reg-exp" rows="3" placeholder="Conte um pouco sobre sua trajetória..."></textarea>
        </div>
        <button class="btn-primary" style="width: 100%; margin-top: 10px;" onclick="registerCaregiver()">Enviar Cadastro</button>
    `);
}

function registerCaregiver() {
    const name = document.getElementById('reg-name').value;
    const price = document.getElementById('reg-price').value;
    const estado = document.getElementById('reg-estado').value;
    const cidade = document.getElementById('reg-cidade').value;
    const bairro = document.getElementById('reg-bairro').value;
    
    if(!name || !price || !estado || !cidade || !bairro) {
        alert("Por favor, preencha os campos obrigatórios.");
        return;
    }

    const newCaregiver = {
        id: Date.now(),
        name: name,
        rating: 5.0,
        reviews: 0,
        price: parseInt(price),
        distance: 0.1,
        estado: estado,
        cidade: cidade,
        bairro: bairro,
        type: "basico",
        skills: ["Novato"],
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
        lat: -23.5505,
        lng: -46.6333,
        experience: document.getElementById('reg-exp').value,
        bio: "Novo cuidador na plataforma.",
        services: [
            { name: "Companhia", icon: "users" },
            { name: "Higiene", icon: "droplet" }
        ],
        availability: [
            { day: "Segunda", hours: "09:00 - 17:00" },
            { day: "Terça", hours: "09:00 - 17:00" }
        ],
        certificates: [
            { name: "Cuidador", year: new Date().getFullYear().toString() }
        ]
    };

    caregivers.push(newCaregiver);
    localStorage.setItem('caregivers', JSON.stringify(caregivers));
    
    openDrawer(`
        <div style="text-align: center; padding: 40px 0;">
            <div style="background: var(--teal); color: white; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
                <i data-lucide="award" style="width: 40px; height: 40px;"></i>
            </div>
            <h2>Cadastro Enviado!</h2>
            <p>Seu perfil está em análise. Em breve você aparecerá nas buscas.</p>
            <button class="btn-primary" style="margin-top: 20px;" onclick="location.reload()">Ver Lista Atualizada</button>
        </div>
    `);
}

// Chat Functionality
let currentChatCaregiverId = null;
let chatMessages = [];

function openChatDrawer(caregiverId) {
    currentChatCaregiverId = caregiverId;
    const cg = caregivers.find(c => c.id === caregiverId);
    chatMessages = [];
    
    // Mensagem inicial da cuidadora
    chatMessages.push({
        type: 'received',
        text: `Olá! Tudo bem? Fico feliz em cuidar de você. Estou pronta para começar! 😊`,
        time: new Date()
    });
    
    renderChatDrawer(cg);
}

function renderChatDrawer(cg) {
    const messagesHtml = chatMessages.map(msg => `
        <div class="message ${msg.type}">
            <div>
                <div class="message-bubble">${msg.text}</div>
                <div class="message-time">${msg.time.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</div>
            </div>
        </div>
    `).join('');
    
    openDrawer(`
        <div class="chat-container">
            <div class="chat-header">
                <img src="${cg.avatar}" class="chat-header-avatar" alt="${cg.name}">
                <div class="chat-header-info">
                    <h3>${cg.name}</h3>
                    <div class="status">
                        <span class="status-dot"></span>
                        Online
                    </div>
                </div>
            </div>
            <div class="chat-messages" id="chat-messages">
                ${messagesHtml}
            </div>
            <div class="chat-input-area">
                <input type="text" id="chat-input" placeholder="Digite sua mensagem..." />
                <button onclick="sendChatMessage()">↑</button>
            </div>
        </div>
    `);
    
    // Scroll para a última mensagem
    setTimeout(() => {
        const chatMessagesDiv = document.getElementById('chat-messages');
        if (chatMessagesDiv) {
            chatMessagesDiv.scrollTop = chatMessagesDiv.scrollHeight;
        }
        
        // Focus no input
        const chatInput = document.getElementById('chat-input');
        if (chatInput) {
            chatInput.focus();
            chatInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') sendChatMessage();
            });
        }
    }, 100);
}

function sendChatMessage() {
    const chatInput = document.getElementById('chat-input');
    const text = chatInput.value.trim();
    
    if (!text) return;
    
    // Adicionar mensagem do usuário
    chatMessages.push({
        type: 'sent',
        text: text,
        time: new Date()
    });
    
    chatInput.value = '';
    
    // Atualizar UI
    const cg = caregivers.find(c => c.id === currentChatCaregiverId);
    renderChatDrawer(cg);
    
    // Simular resposta da cuidadora após 1 segundo
    setTimeout(() => {
        const responses = [
            "Entendi! Vou anotar isso.",
            "Tudo certo! Deixa comigo.",
            "Perfeito! Você pode contar comigo.",
            "Sem problemas! Estarei atenta.",
            "Ótimo! Vou cuidar com carinho.",
            "Combinado! Até logo!"
        ];
        
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        chatMessages.push({
            type: 'received',
            text: randomResponse,
            time: new Date()
        });
        
        renderChatDrawer(cg);
    }, 1000);
}
