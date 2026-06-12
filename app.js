/**
 * AstroGem Application Framework Logic Core
 * Systems: Multi-Weighted Selection Math, Contextual Chat Simulation, Chart Tracking Elements.
 */

// Global System Mineral Database Context Array (Now with Unsplash High-Res URLs)
let systemGemstones = [
    { 
        id: "yellow_sapphire", 
        name: "Yellow Sapphire (Pukhraj)", 
        planet: "Jupiter", 
        zodiac: "Sagittarius", 
        color: "Golden Imperial Yellow", 
        hardness: "9.0 Mohs", 
        origin: "Ceylon, Sri Lanka", 
        compatibility: 96, 
        priceRange: "Premium $$$", 
        imgUrl: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=600&auto=format&fit=crop",
        benefits: "Drives clean business breakthroughs, professional scaling track acceleration, academic wisdom multipliers, and safeguards marriage harmony configurations.", 
        wearDay: "Thursday", 
        wearTime: "06:00 AM - 08:00 AM", 
        wearMetal: "24k Yellow Gold", 
        wearFinger: "Index Finger", 
        badFor: "Taurus, Libra", 
        precautions: "Do not wear concurrently alongside Emerald or Diamond elements unless chart override locks match perfectly." 
    },
    { 
        id: "blue_sapphire", 
        name: "Blue Sapphire (Neelam)", 
        planet: "Saturn", 
        zodiac: "Capricorn", 
        color: "Deep Velvet Blue", 
        hardness: "9.0 Mohs", 
        origin: "Kashmir, India", 
        compatibility: 89, 
        priceRange: "Luxury $$$$", 
        imgUrl: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=600&auto=format&fit=crop",
        benefits: "Clears severe career stagnation tracks instantly, offsets sudden debt issues, shifts focus blocks, and grounds spiritual awareness channels.", 
        wearDay: "Saturday", 
        wearTime: "05:30 PM - 07:00 PM", 
        wearMetal: "White Gold or Sterling Platinum", 
        wearFinger: "Middle Finger", 
        badFor: "Aries, Leo", 
        precautions: "Highly reactive compound grid. Must execute pillow testing parameters for 72 hours prior to formal finger mounting." 
    },
    { 
        id: "emerald", 
        name: "Emerald (Panna)", 
        planet: "Mercury", 
        zodiac: "Gemini", 
        color: "Vibrant Intense Green", 
        hardness: "7.5 Mohs", 
        origin: "Muzo, Colombia", 
        compatibility: 94, 
        priceRange: "High-Tier $$$", 
        imgUrl: "https://static.wixstatic.com/media/19ea52_82e97806ad2e4512bbb16cd2513597de~mv2.png/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/19ea52_82e97806ad2e4512bbb16cd2513597de~mv2.png",
        benefits: "Amplifies logical analysis data parsing, speed-reads communication tone errors, unlocks audit blocks, and shields business trade assets.", 
        wearDay: "Wednesday", 
        wearTime: "07:15 AM - 09:00 AM", 
        wearMetal: "Punchdhatu or Green Gold", 
        wearFinger: "Little Finger", 
        badFor: "Scorpio", 
        precautions: "Fragile micro-fissure geology layout. Keep safe from heavy mechanical impact or extreme heating vectors." 
    },
    { 
        id: "ruby", 
        name: "Ruby (Manik)", 
        planet: "Sun", 
        zodiac: "Leo", 
        color: "Pigeon Blood Crimson", 
        hardness: "9.0 Mohs", 
        origin: "Mogok, Burma", 
        compatibility: 92, 
        priceRange: "Luxury $$$$", 
        imgUrl: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=600&auto=format&fit=crop",
        benefits: "Commands managerial leadership respect, fires up internal self-esteem blocks, raises social status tags, and triggers organic physical vitality.", 
        wearDay: "Sunday", 
        wearTime: "Sunrise Window Hours", 
        wearMetal: "Rose Gold or Pure Copper", 
        wearFinger: "Ring Finger", 
        badFor: "Saturn Sign Outliers", 
        precautions: "Can elevate thermal blood metrics. Skip usage if your system runs high Pitta metabolic cycles." 
    },
    { 
        id: "diamond", 
        name: "White Diamond (Heera)", 
        planet: "Venus", 
        zodiac: "Libra", 
        color: "Flawless Clear White", 
        hardness: "10.0 Mohs", 
        origin: "Jwaneng, Botswana", 
        compatibility: 95, 
        priceRange: "Elite $$$$$", 
        imgUrl: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=600&auto=format&fit=crop",
        benefits: "Activates highly magnetic personal aura waves, unlocks premium lifestyle design options, and brings relationship structural balance.", 
        wearDay: "Friday", 
        wearTime: "06:00 AM - 07:30 AM", 
        wearMetal: "Platinum Wire Frame", 
        wearFinger: "Middle Finger", 
        badFor: "Leo, Sagittarius", 
        precautions: "Ensure diamond core is clean from visible black carbon inclusions which twist incoming benefic planet arrays." 
    }
];

let computedHistory = [
    { timestamp: "2026-06-11 10:22", zodiac: "Leo", goal: "Career Success", gem: "Ruby (Manik)", confidence: "94%" },
    { timestamp: "2026-06-12 08:45", zodiac: "Sagittarius", goal: "Financial Prosperity", gem: "Yellow Sapphire (Pukhraj)", confidence: "96%" }
];

let liveUsersSim = [
    { name: "Aravind Sharma", status: "Active System Profile", rank: "User Core" },
    { name: "Elena Rostova", status: "Active System Profile", rank: "VIP Tier" },
    { name: "Marcus Sterling", status: "Suspended", rank: "User Core" }
];

let globalCharts = {};

// SPA Engine Navigation Router Controller
function switchPage(pageId) {
    document.querySelectorAll('.page-section').forEach(sec => sec.classList.remove('active'));
    document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));

    const targetSection = document.getElementById(`page-${pageId}`);
    if (targetSection) targetSection.classList.add('active');

    const activeNav = Array.from(document.querySelectorAll('.nav-links a')).find(a => a.getAttribute('onclick').includes(`'${pageId}'`));
    if (activeNav) activeNav.classList.add('active');

    if (pageId === 'catalog') renderCatalog();
    if (pageId === 'compare') populateCompareOptions();
    if (pageId === 'dashboard') initializeChartsAndLogs();
    if (pageId === 'admin') initializeAdminPanel();

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// User Portal Session Auth Simulation
let isLoggedIn = false;
function handleAuth(e) {
    e.preventDefault();
    isLoggedIn = !isLoggedIn;
    const email = document.getElementById('authEmail').value;
    const authNav = document.getElementById('authNav');
    
    if (isLoggedIn) {
        authNav.innerHTML = `<a href="#" onclick="handleAuth(event)"><i class="fa-solid fa-unlock-keyhole"></i> Logout (${email.split('@')[0]})</a>`;
        alert("Authentication node encrypted via local mock JWT array. Profile synchronized.");
        switchPage('home');
    } else {
        authNav.innerHTML = `<a href="#" onclick="switchPage('login')"><i class="fa-solid fa-user-shield"></i> Login</a>`;
        alert("Session unmounted.");
    }
}

function toggleAuthMode() {
    const title = document.getElementById('authTitle');
    title.innerText = title.innerText.includes("Sign In") ? "Register New Account Node" : "Sign In to Your Cosmic Portal";
}

// Advanced Weighted Score Engine Matrix Calculations
function generateRecommendation(e) {
    e.preventDefault();
    
    const moonSign = document.getElementById('moonSign').value;
    const ascendant = document.getElementById('ascendant').value;
    const focusGoal = document.getElementById('focusGoal').value;

    // Build Weight Scoring Calculation Loop Map
    let scoringProfiles = systemGemstones.map(gem => {
        let currentWeightScore = 0;
        
        // 1. Evaluate Moon Sign Match parameters (Base match gives 35pts)
        if (gem.zodiac === moonSign) currentWeightScore += 35;
        
        // 2. Evaluate Ascendant alignment parameters (Ascendant gives 25pts)
        if (gem.zodiac === ascendant) currentWeightScore += 25;
        
        // 3. Evaluate Life Target Priorities (Goal alignments match give 30pts)
        if (focusGoal === "Career Success" && gem.id === "ruby") currentWeightScore += 30;
        if (focusGoal === "Business Growth" && gem.id === "emerald") currentWeightScore += 30;
        if (focusGoal === "Financial Prosperity" && gem.id === "yellow_sapphire") currentWeightScore += 30;
        if (focusGoal === "Marriage & Relationship" && gem.id === "diamond") currentWeightScore += 30;
        if (focusGoal === "Health & Wellness" && gem.id === "blue_sapphire") currentWeightScore += 30;

        // 4. Inherent Geological Base Value modifier
        currentWeightScore += (gem.compatibility % 10);

        // Standardize output score maximum normalization to 98% cap
        let calibratedPercentage = Math.min(Math.max(currentWeightScore, 45), 98);
        return { gem, score: calibratedPercentage };
    });

    // Sort outputs descending based on weight calculation score outcomes
    scoringProfiles.sort((x, y) => y.score - x.score);
    
    let primaryMatch = scoringProfiles[0].gem;

    // Inject Kundli Simulated Outputs
    document.getElementById('resSunSign').innerText = ascendant; 
    document.getElementById('resLuckyPlanet').innerText = primaryMatch.planet;
    document.getElementById('resMaleficPlanet').innerText = primaryMatch.planet === "Saturn" ? "Sun Matrix" : "Rahu Node Track";
    document.getElementById('resLuckyMetrics').innerText = `#${(primaryMatch.compatibility % 9) + 1} / ${primaryMatch.color.split(' ')[0]}`;

    // Inject Primary Match Content Data Elements
    document.getElementById('resGemName').innerText = primaryMatch.name;
    document.getElementById('resGemMeta').innerText = `SPHERE: ${primaryMatch.planet.toUpperCase()} | ASSIGNED MATCH VALUE: ${scoringProfiles[0].score}% ACCURACY | CRITERIA: ${primaryMatch.hardness}`;
    document.getElementById('resGemBenefits').innerText = `${primaryMatch.benefits} Computation targeted your active focus: [${focusGoal}].`;
    document.getElementById('resGemMetalType').innerText = primaryMatch.wearMetal;
    document.getElementById('resGemTime').innerText = `${primaryMatch.wearDay} @ ${primaryMatch.wearTime}`;
    document.getElementById('resPrecautions').innerText = primaryMatch.precautions;

    // Inject Ranked Top 3 Output Block list UI
    const scoresListBox = document.getElementById('topRecommendationsScoresList');
    scoresListBox.innerHTML = "";
    scoringProfiles.slice(0, 3).forEach((item, index) => {
        let colorTag = index === 0 ? 'text-amber-400' : index === 1 ? 'text-purple-400' : 'text-blue-400';
        scoresListBox.innerHTML += `
            <div class="p-3 bg-white/5 rounded-xl flex justify-between items-center text-xs border border-white/5">
                <div>
                    <span class="block text-white font-bold">${index + 1}. ${item.gem.name}</span>
                    <span class="text-gray-400">Ruler: ${item.gem.planet}</span>
                </div>
                <span class="${colorTag} font-mono font-bold">${item.score}% match</span>
            </div>
        `;
    });

    // Handle Ritual Grid Loading
    document.getElementById('ritualGuideContent').innerHTML = `
        <div class="p-4 bg-white/5 rounded-xl border border-white/5">
            <span class="block font-bold text-amber-400 mb-1">Step 1: Chemical Purification</span>
            <p class="text-gray-400 leading-normal">Submerge the crystal matrix in pure water mixed with raw honey for 25 minutes during sunrise hour tracks to strip residual extraction energy spikes.</p>
        </div>
        <div class="p-4 bg-white/5 rounded-xl border border-white/5">
            <span class="block font-bold text-purple-400 mb-1">Step 2: Harmonic Mantra Induction</span>
            <p class="text-gray-400 leading-normal">Face East coordinates cleanly, holding the ring cluster in right hand space. Chant your specific planetary node root mantra exactly 108 times to engage baseline resonance.</p>
        </div>
        <div class="p-4 bg-white/5 rounded-xl border border-white/5">
            <span class="block font-bold text-blue-400 mb-1">Step 3: Secure Body Mounting</span>
            <p class="text-gray-400 leading-normal">Carefully anchor the mounting setup ring directly onto your calculated <strong>${primaryMatch.wearFinger}</strong> during the active time window: ${primaryMatch.wearTime}.</p>
        </div>
    `;

    // Append calculation action parameters into log histories data arrays
    computedHistory.unshift({
        timestamp: new Date().toISOString().substring(0, 16).replace('T', ' '),
        zodiac: moonSign,
        goal: focusGoal,
        gem: primaryMatch.name,
        confidence: `${scoringProfiles[0].score}%`
    });

    switchPage('result');
}

// Industry Grade High Fidelity PDF Generator Engine Call
function downloadPDFReport() {
    const docNode = document.getElementById('pdf-report-content');
    html2pdf().set({
        margin: 0.4,
        filename: 'AstroGem-Enterprise-Report-2026.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, backgroundColor: '#090d16' },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    }).from(docNode).save();
}

// Image Catalog Grid Compiler Rendering Loop
function renderCatalog() {
    const grid = document.getElementById('catalogGrid');
    grid.innerHTML = "";

    systemGemstones.forEach(gem => {
        const wrapEl = document.createElement('div');
        wrapEl.className = "catalog-item-wrapper dynamic-card p-4 flex flex-col justify-between";
        wrapEl.setAttribute('data-gem-type', gem.id);

        wrapEl.innerHTML = `
            <div>
                <img src="${gem.imgUrl}" alt="${gem.name}" class="gem-photo-frame">
                <div class="flex justify-between items-start mb-1">
                    <h3 class="text-base font-bold text-white">${gem.name}</h3>
                    <span class="px-2 py-0.5 bg-amber-400/10 text-amber-400 text-xxs font-mono rounded">${gem.priceRange}</span>
                </div>
                <p class="text-xxs text-amber-400 uppercase tracking-widest font-bold mb-3">Ruling Planet: ${gem.planet}</p>
                <p class="text-xs text-gray-400 line-clamp-3 leading-normal">${gem.benefits}</p>
            </div>
            <button class="btn-secondary w-full py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg mt-4" onclick="viewDetailedGem('${gem.id}')">
                Analyze Properties <i class="fa-solid fa-angles-right ml-1 text-xxs"></i>
            </button>
        `;
        grid.appendChild(wrapEl);
    });
}

function filterCatalog() {
    const txt = document.getElementById('searchCatalog').value.toLowerCase();
    const planet = document.getElementById('filterPlanet').value;

    document.querySelectorAll('#catalogGrid > div').forEach((card, i) => {
        const item = systemGemstones[i];
        if (!item) return;
        const matchTxt = item.name.toLowerCase().includes(txt) || item.benefits.toLowerCase().includes(txt);
        const matchPlanet = planet === "All" || item.planet === planet;
        card.style.display = (matchTxt && matchPlanet) ? "flex" : "none";
    });
}

function viewDetailedGem(id) {
    const item = systemGemstones.find(g => g.id === id);
    if (!item) return;

    document.getElementById('detailsContent').innerHTML = `
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div class="dynamic-card p-6 text-center flex flex-col items-center justify-center">
                <img src="${item.imgUrl}" class="w-40 h-40 rounded-full object-cover border-2 border-amber-500/30 shadow-xl mb-4">
                <h2 class="text-2xl font-black text-white">${item.name}</h2>
                <span class="text-xs font-mono text-amber-400 tracking-wider mt-1">PLANETARY RULER: ${item.planet.toUpperCase()}</span>
            </div>
            <div class="lg:col-span-2 space-y-4 text-xs">
                <div class="dynamic-card p-5"><h4 class="font-bold text-white mb-2 text-sm">Astrological Overview</h4><p class="text-gray-300 leading-relaxed text-xs">${item.benefits}</p></div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="p-4 bg-emerald-950/20 border border-emerald-500/20 rounded-xl"><h5 class="font-bold text-green-400 mb-1">Wearing Directives</h5><p class="text-gray-400">Mount on ${item.wearFinger} using ${item.wearMetal} settings during ${item.wearDay} operational windows.</p></div>
                    <div class="p-4 bg-red-950/20 border border-red-500/20 rounded-xl"><h5 class="font-bold text-red-400 mb-1">Strict System Precaution</h5><p class="text-gray-400">${item.precautions} Negative targets: ${item.badFor}.</p></div>
                </div>
            </div>
        </div>
    `;
    switchPage('details');
}

// Dual Option Box Populator Matrix
function populateCompareOptions() {
    const s1 = document.getElementById('compareG1');
    const s2 = document.getElementById('compareG2');
    s1.innerHTML = ""; s2.innerHTML = "";
    systemGemstones.forEach((g, idx) => {
        s1.innerHTML += `<option value="${g.id}" ${idx===0?'selected':''}>${g.name}</option>`;
        s2.innerHTML += `<option value="${g.id}" ${idx===1?'selected':''}>${g.name}</option>`;
    });
    executeComparison();
}

function executeComparison() {
    const o1 = systemGemstones.find(g => g.id === document.getElementById('compareG1').value);
    const o2 = systemGemstones.find(g => g.id === document.getElementById('compareG2').value);
    if (!o1 || !o2) return;

    document.getElementById('compareResultContainer').innerHTML = `
        <table class="w-full text-left text-xs text-gray-300">
            <thead>
                <tr class="border-b border-white/10 text-amber-400 uppercase font-mono bg-black/20">
                    <th class="p-3">Physical & Astro Matrix Targets</th>
                    <th class="p-3">${o1.name}</th>
                    <th class="p-3">${o2.name}</th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-b border-white/5">
                    <td class="p-3 font-bold text-white text-xxs uppercase tracking-wider">Ruling Planet Sphere</td>
                    <td class="p-3 text-amber-300 font-semibold">${o1.planet}</td>
                    <td class="p-3 text-amber-300 font-semibold">${o2.planet}</td>
                </tr>
                <tr class="border-b border-white/5">
                    <td class="p-3 font-bold text-white text-xxs uppercase tracking-wider">Mohs Scale Hardness</td>
                    <td class="p-3">${o1.hardness}</td>
                    <td class="p-3">${o2.hardness}</td>
                </tr>
                <tr class="border-b border-white/5">
                    <td class="p-3 font-bold text-white text-xxs uppercase tracking-wider">Geological Origin Log</td>
                    <td class="p-3 text-gray-400">${o1.origin}</td>
                    <td class="p-3 text-gray-400">${o2.origin}</td>
                </tr>
                <tr class="border-b border-white/5">
                    <td class="p-3 font-bold text-white text-xxs uppercase tracking-wider">Structural Mounting Metal</td>
                    <td class="p-3">${o1.wearMetal}</td>
                    <td class="p-3">${o2.wearMetal}</td>
                </tr>
            </tbody>
        </table>
    `;
}

// Integrated AI Assistant Query Pipeline (Resume Booster)
function executeAiChat() {
    const inputField = document.getElementById('chatInput');
    const logsBox = document.getElementById('chatLogs');
    const queryTxt = inputField.value.trim();
    if (!queryTxt) return;

    logsBox.innerHTML += `<div class="text-gray-300 mt-2"><strong>User:</strong> ${queryTxt}</div>`;
    inputField.value = "";

    // Simulated local Gemini/OpenAI prompt assessment parser wrapper
    setTimeout(() => {
        let answerStr = "Based on traditional Vedic chart configurations, your request array needs verification. Ensure conflicting planetary fields like Saturn (Blue Sapphire) and the Sun (Ruby) do not share adjacent houses to prevent alignment distortion.";
        if (queryTxt.toLowerCase().includes("emerald") && queryTxt.toLowerCase().includes("ruby")) {
            answerStr = "<strong>AI Analysis Node:</strong> Emerald (Mercury) and Ruby (Sun) represent friendly planetary spheres. They can be safely combined under Budhaditya yoga setups, provided they are mounted on non-conflicting fingers (Little and Ring fingers respectively).";
        }
        logsBox.innerHTML += `<div class="text-purple-300 mt-1"><strong>AI Node:</strong> ${answerStr}</div>`;
        logsBox.scrollTop = logsBox.scrollHeight;
    }, 650);
}

// Multi-Chart Dashboard Analytics Engine Hydration
function initializeChartsAndLogs() {
    if (globalCharts.stones) globalCharts.stones.destroy();
    if (globalCharts.zodiac) globalCharts.zodiac.destroy();
    if (globalCharts.goals) globalCharts.goals.destroy();
    if (globalCharts.activity) globalCharts.activity.destroy();

    const chartConfigOptions = {
        responsive: true,
        plugins: { legend: { labels: { color: '#fff', font: { size: 10 } } } },
        scales: {
            x: { grid: { display: false }, ticks: { color: '#9ca3af' } },
            y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#9ca3af' } }
        }
    };

    // Chart 1: Recommendation Trends (Bar Chart)
    globalCharts.stones = new Chart(document.getElementById('chartStones'), {
        type: 'bar',
        data: { labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], datasets: [{ label: 'Assigned Metrics', data: [310, 420, 590, 680, 810, 940], backgroundColor: '#fbbf24' }] },
        options: chartConfigOptions
    });

    // Chart 2: Zodiac Distribution Mix (Pie/Doughnut)
    globalCharts.zodiac = new Chart(document.getElementById('chartZodiac'), {
        type: 'doughnut',
        data: { labels: ['Leo', 'Sagittarius', 'Gemini', 'Other'], datasets: [{ data: [40, 25, 20, 15], backgroundColor: ['#ef4444', '#fbbf24', '#10b981', '#8b5cf6'] }] },
        options: { responsive: true, plugins: { legend: { position: 'bottom', labels: { color: '#fff' } } } }
    });

    // Chart 3: Most Selected Goals (Horizontal Bar)
    globalCharts.goals = new Chart(document.getElementById('chartGoals'), {
        type: 'border' || 'bar',
        data: { labels: ['Career', 'Wealth', 'Marriage', 'Health'], datasets: [{ label: 'User Allocation Counts', data: [1200, 950, 700, 450], backgroundColor: '#8b5cf6' }] },
        options: { indexAxis: 'y', responsive: true, plugins: { legend: { display: false } } }
    });

    // Chart 4: User Growth Line Plot
    globalCharts.activity = new Chart(document.getElementById('chartActivity'), {
        type: 'line',
        data: { labels: ['Q1', 'Q2', 'Q3', 'Q4'], datasets: [{ label: 'Total User Profiles Injected', data: [240, 580, 890, 1204], borderColor: '#3b82f6', fill: false, tension: 0.2 }] },
        options: chartConfigOptions
    });

    // Populate Historical Log Tables
    const tbody = document.getElementById('historyTableBody');
    tbody.innerHTML = "";
    computedHistory.forEach(log => {
        tbody.innerHTML += `
            <tr class="border-b border-white/5 hover:bg-white/5">
                <td class="p-3 text-gray-500 font-mono">${log.timestamp}</td>
                <td class="p-3 font-semibold text-white">${log.zodiac}</td>
                <td class="p-3 text-gray-400">${log.goal}</td>
                <td class="p-3 text-amber-400 font-medium">${log.gem}</td>
                <td class="p-3 text-right"><span class="px-2 py-0.5 bg-green-500/10 text-green-400 rounded text-xxs font-mono">${log.confidence}</span></td>
            </tr>
        `;
    });
}

// Admin Operations Management Framework Panel Elements
function initializeAdminPanel() {
    const listWrap = document.getElementById('adminUserList');
    listWrap.innerHTML = "";
    liveUsersSim.forEach((usr, index) => {
        listWrap.innerHTML += `
            <div class="flex justify-between items-center p-3 bg-white/5 rounded-xl text-xs border border-white/5">
                <div>
                    <span class="block text-white font-bold">${usr.name}</span>
                    <span class="text-gray-400 text-xxs font-mono">${usr.rank} • <span class="${usr.status==='Suspended'?'text-red-400':'text-green-400'}">${usr.status}</span></span>
                </div>
                <div class="flex gap-2">
                    <button class="btn-secondary px-3 py-1 rounded text-xxs text-yellow-400" onclick="adminBlockUser(${index})">Suspend</button>
                    <button class="btn-secondary px-3 py-1 rounded text-xxs text-red-400" onclick="adminDeleteUser(${index})"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
        `;
    });
}

function adminBlockUser(idx) {
    liveUsersSim[idx].status = "Suspended";
    initializeAdminPanel();
    alert("Target profile validation token suspended across memory arrays.");
}

function adminDeleteUser(idx) {
    liveUsersSim.splice(idx, 1);
    initializeAdminPanel();
}

function adminInjectGemstone(e) {
    e.preventDefault();
    const name = document.getElementById('admName').value;
    const planet = document.getElementById('admPlanet').value;
    const zodiac = document.getElementById('admZodiac').value;
    const color = document.getElementById('admColor').value;
    const benefits = document.getElementById('admBenefits').value;

    systemGemstones.push({
        id: name.toLowerCase().replace(/ /g, '_'), name, planet, zodiac, color,
        hardness: "7.0 Mohs", origin: "Synthesized Mineral Matrix", compatibility: 90, priceRange: "Standard $$",
        imgUrl: "https://images.unsplash.com/photo-1615655404745-a10c241f14b8?q=80&w=600&auto=format&fit=crop",
        benefits, wearDay: "Monday", wearTime: "Morning hours", wearMetal: "Silver", wearFinger: "Ring Finger", badFor: "None", precautions: "None"
    });

    alert(`Successfully injected runtime configuration data row entry for: ${name}`);
    document.getElementById('adminAddGemForm').reset();
}

// System Init Trigger Hook
window.addEventListener('DOMContentLoaded', () => {
    switchPage('home');
});