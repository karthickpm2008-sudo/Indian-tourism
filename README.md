# India Tourism - Web Technology Microproject

A clean, responsive, and modern single-page website promoting tourism across India, built purely with vanilla **HTML5**, **CSS3**, and **JavaScript (ES6)**.

---

## 🌟 Project Overview

- **Project Name:** India Tourism
- **Type:** Single-Page Web Application
- **Technologies Used:** Plain HTML5, CSS3, Vanilla JavaScript (Zero external libraries or frameworks)
- **Design Theme:** Warm Indian Tricolor Palette (Warm Saffron, India Green, White, and Ashoka Chakra Navy Blue)

---

## 📂 Project Structure

```text
webtech microproject/
├── index.html        # Semantic HTML5 markup containing all 10 sections
├── style.css         # Custom responsive CSS with CSS variables, animations, and layouts
├── script.js         # Vanilla JavaScript for smooth scrolling, validation, and interactivity
└── README.md         # Project documentation and guide
```

---

## 📋 Page Sections (in exact order)

1. **Header:** Website name "India Tourism" accompanied by an Ashoka Chakra inspired SVG logo.
2. **Navigation Bar:** Responsive sticky navigation bar with links: *Home*, *Destinations*, *Categories*, *Packages*, *Book Now*, *About Us*, and *Contact*.
3. **Main Section (Hero Banner):** Full-width welcome banner featuring an authentic scenic background, heading *"Explore the Beauty of India"*, and subheading *"Find your perfect destination"*.
4. **Tourist Destinations:** 4 popular Indian tourist destinations rendered as interactive cards (Taj Mahal, Kerala Backwaters, Rajasthan, Goa) with photos, location badges, and descriptions.
5. **Categories:** 4 holiday categories with icons (Hill Stations, Beaches, Historical Places, Adventure Tourism).
6. **Tour Packages:** 3 comprehensive vacation packages with duration badges, price breakdown, itineraries, and "Book Now" buttons.
7. **Booking Section:** Interactive booking form with input fields:
   - Full Name
   - Email Address
   - Phone Number
   - Destination (interactive dropdown)
   - Travel Date (automatically prevents selecting dates in the past)
   - Number of Persons
   - Dynamic real-time form validation and instant success confirmation summary
8. **About Us:** Information about India Tourism's mission, showcasing 15+ years of service, 50,000+ travelers, and the philosophy of *"Atithi Devo Bhava"*.
9. **Contact Section:** Clean contact cards displaying Office Address, Phone numbers (including 24/7 toll-free), and Email support.
10. **Footer:** Copyright information (`© 2025 India Tourism. All rights reserved.`) and social media links (Facebook, Instagram, Twitter).

---

## 🚀 How to Run the Website

### Method 1: Direct Browser Launch
Simply double-click the `index.html` file or right-click and choose **Open with** -> **Google Chrome** (or Edge, Firefox, Safari).

### Method 2: Using VS Code Live Server (Optional)
1. Open the project folder in VS Code.
2. Right-click on `index.html` and click **"Open with Live Server"**.
3. The website will launch automatically at `http://127.0.0.1:5500`.

---

## 🎨 Color Palette & Aesthetics

| Color Name | Hex Code | Usage |
| :--- | :--- | :--- |
| **Saffron** | `#FF9933` / `#E65100` | Primary buttons, logo accents, badges, hover highlights |
| **India Green** | `#138808` / `#2E7D32` | Pricing highlights, success alerts, underlines, card accents |
| **Ashoka Navy** | `#000080` / `#000050` | Logo Chakra, headings, contrast icons |
| **Ivory / Off-White** | `#FBF9F5` / `#FFFFFF` | Backgrounds, cards, clean canvas |

---

## ✨ Key JavaScript Features

- **Smooth Scrolling:** All anchor links smoothly glide to their respective section taking sticky header offset into account.
- **ScrollSpy:** Automatically highlights the current navigation link as you scroll down the page.
- **Pre-Fill Destinations:** Clicking "Book This" on any destination or package automatically selects it in the booking dropdown and scrolls right to the form.
- **Smart Date Guard:** The travel date picker dynamically sets its minimum date to today, preventing users from selecting past dates.
- **Form Validation & Alert:** Validates required fields, email syntax, and phone formats with friendly inline error hints and displays a confirmation box with the booking summary.
- **Mobile Menu Toggle:** Responsive hamburger menu for smaller screen sizes.

