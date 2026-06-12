# AstroGem - Advanced Gemstone Recommendation & Astrology Intelligence Engine

<div align="center">

![AstroGem Logo](https://img.shields.io/badge/AstroGem-v1.0-gold?style=for-the-badge&logo=gem)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

**An industrial-grade full-stack simulation mapping planetary algorithms, Vedic astrology calculations, and gemstone recommendations against natal charts.**

[Live Demo](#features) • [Quick Start](#getting-started) • [Documentation](#documentation) • [Contributing](#contributing)

</div>

---

## 📖 Overview

AstroGem is a sophisticated web application that combines **Vedic astrology** with **machine learning-style recommendation algorithms** to suggest personalized gemstone recommendations based on astrological profiles. The platform features a luxury glassmorphism UI, advanced analytics dashboards, and an integrated AI assistant.

### Key Highlights
- 🔮 **Weighted Algorithmic Scoring** - Multi-layered calculations evaluating Moon Sign, Ascendant, and focal life goals
- 💎 **Comprehensive Gemstone Database** - 6+ detailed gemstone profiles with astrological and geological properties
- 📊 **Advanced Analytics Dashboard** - User telemetry, recommendation trends, and zodiac distribution analysis
- 🤖 **AI-Powered Assistant** - Real-time verification of stone combinations and astrological queries
- 📄 **PDF Report Generation** - High-fidelity export of personalized recommendations
- 🔐 **Admin Panel** - User management and custom gemstone injection capabilities
- ✨ **Premium UI Design** - Luxury glassmorphism theme with cosmic particle animations

---

## 🎯 Features

### 1. **Astrological Parameter Mapping**
- Date, time, and place of birth input
- Moon Sign (Chandra Rashi) selection
- Ascendant Vector (Lagna) configuration
- Life priority goal selection (Career, Business, Marriage, Health, Finance)

### 2. **Intelligent Recommendation Engine**
- **Weighted scoring algorithm** combining:
  - Moon Sign alignment (35 points)
  - Ascendant compatibility (25 points)
  - Life goal optimization (30 points)
  - Geological base value modifiers
- Normalized confidence scores (45-98%)
- Top 3 ranked recommendations display

### 3. **Gemstone Encyclopedia**
Detailed profiles for six premium gemstones:
- **Yellow Sapphire (Pukhraj)** - Jupiter's influence for business & career
- **Blue Sapphire (Neelam)** - Saturn's power for overcoming obstacles
- **Emerald (Panna)** - Mercury's gift for communication & intellect
- **Ruby (Manik)** - Sun's warmth for leadership & vitality
- **White Diamond (Heera)** - Venus's magnetism for relationships
- **Custom Gemstones** - Admin-injected minerals with custom properties

**Each gemstone includes:**
- High-resolution imagery (Unsplash integration)
- Mohs hardness ratings
- Geological origin data
- Wearing directives (metal type, finger, time, day)
- Safety precautions and zodiac contraindications
- Astrological benefit statements

### 4. **Synthetic Kundli Diagnostics**
Automatic calculations including:
- Sun Sign determination
- Benefic planetary track identification
- Malefic guard assignment
- Lucky number and color predictions

### 5. **Matrix Comparison Tool**
Side-by-side structural analysis comparing:
- Planetary sphere rulership
- Mohs hardness ratings
- Geological origin
- Mounting metal specifications

### 6. **User Telemetry Dashboard**
Real-time analytics featuring:
- Bar charts for recommendation trends
- Doughnut charts for zodiac distribution
- Horizontal bar charts for life goal allocation
- Line graphs for user growth tracking
- Detailed computation history logs

### 7. **AI Astrology Assistant Node**
- Context-aware query processing
- Safety verification for stone combinations
- Planetary alignment checks
- Real-time recommendation validation

### 8. **Admin Control Panel**
- User profile management
- Suspension and deletion capabilities
- Custom gemstone injection
- Matrix row entry for new minerals

### 9. **PDF Report Export**
- High-fidelity report generation
- Enterprise-grade formatting
- Includes all recommendation details
- Professional branding and layout

---

## 🛠️ Tech Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Advanced styling with CSS custom properties
- **Vanilla JavaScript** - No framework dependencies (lightweight & fast)
- **Tailwind CSS v4** - Utility-first CSS framework via CDN

### Libraries & Tools
- **Chart.js** - Professional analytics and data visualization
- **html2pdf** - PDF generation and export
- **Font Awesome 6.4** - Icon library (850+ icons)
- **Unsplash API** - High-quality gemstone imagery

### Design System
- **Glassmorphism UI** - Modern frosted glass effect design
- **Dark Theme** - Premium cosmic space aesthetic
- **Responsive Layout** - Mobile-first approach
- **CSS Animations** - Smooth transitions and cosmic effects

---

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No backend server required (client-side application)
- No build tools necessary

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Yashika-32/AstroGem.git
cd AstroGem
```

2. **Open in browser**
```bash
# Option 1: Direct file opening
open index.html

# Option 2: Using Python (local server)
python -m http.server 8000
# Then visit http://localhost:8000

# Option 3: Using Node.js (http-server)
npx http-server
# Then visit http://localhost:8080
```

3. **That's it!** The application is fully functional with no installation needed.

---

## 📋 Project Structure

```
AstroGem/
├── index.html           # Main HTML structure & layout
├── app.js              # Application logic & algorithms
├── styles.css          # Custom styling & animations
├── README.md           # Project documentation
├── AI_USAGE.md         # AI tool declaration
└── .gitignore          # Git configuration
```

### File Descriptions

**index.html** (1000+ lines)
- Navigation bar with SPA routing
- 8 distinct page sections (home, login, form, result, catalog, details, compare, dashboard, admin)
- Semantic HTML5 structure
- Tailwind CSS utility classes
- Font Awesome icon integration

**app.js** (700+ lines)
- Gemstone database (6 minerals with 15+ properties each)
- Weighted scoring algorithm
- Single Page Application (SPA) router
- Authentication simulation
- PDF generation interface
- Chart.js integration
- Admin panel functionality
- AI chat simulation

**styles.css** (400+ lines)
- CSS custom properties (theme variables)
- Glassmorphism card styling
- Cosmic particle animations
- Responsive grid layouts
- Luxury color palette
- Smooth transitions and effects

---

## 💡 How It Works

### Recommendation Algorithm

The core recommendation engine uses a **weighted multi-factor scoring system**:

```
Total Score = Moon_Sign_Match (35pts) 
            + Ascendant_Match (25pts)
            + Life_Goal_Alignment (30pts)
            + Geological_Modifier (base value)
            + Random_Range (0-8pts)

Normalized Output = MIN(MAX(score, 45), 98)%
```

**Example:**
- User's Moon Sign: Sagittarius
- User's Ascendant: Leo  
- Life Goal: Financial Prosperity
- **Best Match:** Yellow Sapphire (Jupiter - Sagittarius ruler) = **96% confidence**

### User Flow

1. **Authentication** → Login/Register (simulated JWT)
2. **Input Form** → Provide astrological parameters
3. **Calculation** → Algorithm processes inputs
4. **Results Page** → Display primary recommendation + top 3 alternatives
5. **Kundli Data** → Show synthetic chart diagnostics
6. **Ritual Guide** → Step-by-step activation instructions
7. **Export** → Download PDF report or explore further

---

## 🎨 UI/UX Features

### Design Principles
- **Luxury Aesthetic** - Premium dark theme with gold accents
- **Glassmorphism** - Frosted glass effect for depth
- **Accessibility** - High contrast, readable typography
- **Responsiveness** - Works seamlessly on mobile, tablet, desktop
- **Performance** - Zero JavaScript frameworks, lightweight & fast

### Color Palette
- **Primary Gold** - #fbbf24 (premium brand color)
- **Dark Background** - #090d16 (deep space gradient)
- **Accent Purple** - #8b5cf6 (mystical energy)
- **Text White** - #f3f4f6 (high readability)
- **Gemstone Colors** - Ruby red, Emerald green, Sapphire blue

### Animations
- Rotating zodiac wheel
- Floating gem avatar
- Cosmic particle background
- Smooth page transitions
- Glassmorphic hover effects

---

## 🔐 Security & Features

### Authentication System
- Email/password validation (mock JWT simulation)
- Session state management
- User profile tracking
- Login/Logout functionality

### Admin Capabilities
- User suspension and deletion
- Custom gemstone injection
- Matrix row entry
- Real-time user panel updates

### Safety Precautions
- Malefic defense override warnings
- Zodiac contraindication alerts
- Stone combination compatibility checks
- Chemical impact warnings

---

## 📊 Analytics & Reporting

### Dashboard Metrics
- **Total Users:** 1,200+ active profiles
- **Recommendations:** 48,900+ algorithmic passes
- **Peak Stone:** Yellow Sapphire (financial goal alignment)
- **Dominant Goal:** Financial Growth

### Charts Included
1. **Recommendation Trends** - Monthly stone assignment volume
2. **Zodiac Distribution** - User sign demographic breakdown
3. **Goal Allocation** - Life priority distribution
4. **User Growth** - Quarterly expansion timeline

### Export Features
- PDF report generation (2.5MB+ data export)
- High-quality image resolution (JPEG @ 98%)
- Professional formatting (letter size, portrait)
- Timestamped document creation

---

## 🤖 AI Assistant Features

The AI Node provides contextual verification for:
- ✅ Stone combination safety
- ✅ Planetary alignment validation
- ✅ Zodiac compatibility checks
- ✅ Ritual directive clarification
- ✅ Astrological guidance

**Example Queries:**
- "Can I safely combine Emerald with Ruby?"
- "What time should I wear my gemstone?"
- "Does my sign contradict this stone?"
- "How do I activate my crystal?"

---

## 🛒 Gemstone Database

### Pre-loaded Minerals

| Gemstone | Planet | Zodiac | Price | Mohs | Key Benefit |
|----------|--------|--------|-------|------|-------------|
| Yellow Sapphire | Jupiter | Sagittarius | Premium $$$ | 9.0 | Business Growth |
| Blue Sapphire | Saturn | Capricorn | Luxury $$$$ | 9.0 | Obstacle Removal |
| Emerald | Mercury | Gemini | High $$ | 7.5 | Communication |
| Ruby | Sun | Leo | Luxury $$$$ | 9.0 | Leadership |
| White Diamond | Venus | Libra | Elite $$$$$ | 10.0 | Relationships |

---

## 📱 Responsive Design

AstroGem is fully responsive:
- **Mobile (320px)** - Stacked layout, optimized touch targets
- **Tablet (768px)** - 2-column grids, readable typography
- **Desktop (1024px+)** - Full 3-column layouts, expanded features

---

## 🚦 Getting Help

### Common Issues

**Q: Application won't load?**
- A: Clear browser cache and reload. Check that all files are in the same directory.

**Q: PDF download fails?**
- A: Ensure pop-ups aren't blocked. Try a different browser.

**Q: Charts not displaying?**
- A: Verify Chart.js CDN is accessible. Check browser console for errors.

**Q: Recommendation seems incorrect?**
- A: Remember, this uses **simulated Vedic calculations**, not real astrological software.

---

## 🎓 Educational Value

This project demonstrates:
- **Frontend Architecture** - SPA routing, state management, component lifecycle
- **Algorithm Design** - Weighted scoring, normalization, ranking systems
- **Data Visualization** - Chart.js integration, dashboard design
- **Responsive Design** - Mobile-first CSS, Tailwind utility framework
- **User Experience** - Form handling, PDF generation, error states
- **Modern Web APIs** - Date parsing, localStorage, canvas rendering

---

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Make your changes**
4. **Commit with clear messages** (`git commit -m 'Add amazing feature'`)
5. **Push to branch** (`git push origin feature/amazing-feature`)
6. **Open a Pull Request**

### Areas for Enhancement
- [ ] Real Vedic astrology API integration
- [ ] Backend database for user profiles
- [ ] Payment integration for premium stones
- [ ] Multi-language support (Hindi, Sanskrit)
- [ ] Mobile app (React Native/Flutter)
- [ ] Real gemstone e-commerce
- [ ] Video tutorials and rituals
- [ ] Community discussion forums

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

```
MIT License

Copyright (c) 2026 AstroGem

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 🎉 Acknowledgments

- **Vedic Astrology** - Traditional knowledge system
- **Tailwind CSS** - Utility-first framework
- **Chart.js** - Data visualization library
- **Unsplash** - Stock photography
- **Font Awesome** - Icon library
- **OpenAI/ChatGPT** - AI assistance (see AI_USAGE.md)

---

## 📞 Contact & Support

- **GitHub Issues** - [Report bugs or request features](https://github.com/Yashika-32/AstroGem/issues)
- **Email** - yashika@astrogem.com (fictional)
- **Documentation** - See AI_USAGE.md for project development notes

---

## 🔮 Roadmap 2026

- Q1: Real Vedic API integration
- Q2: User authentication backend
- Q3: E-commerce gemstone marketplace
- Q4: Mobile app launch

---

<div align="center">

**Made with ✨ and astrology by [Yashika Chauhan](https://github.com/Yashika-32)**

⭐ If you find this project useful, please star the repository!

</div>
