<div align="center">

# 🎓 FullstackSchool

### *Master Modern Web Development Through Interactive Learning*

A cutting-edge, interactive learning platform that transforms how developers learn technology stacks. Visualize learning paths with beautiful tech trees, explore technologies through interactive flip cards, and follow curated roadmaps from frontend to infrastructure.

<br/>

## 🚀 Built With Modern Technologies

<p align="center">
  <img alt="React" src="https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img alt="Framer Motion" src="https://img.shields.io/badge/Framer_Motion-10-0055FF?style=for-the-badge&logo=framer&logoColor=white" />
  <img alt="React Flow" src="https://img.shields.io/badge/React_Flow-11-FF0072?style=for-the-badge&logo=react&logoColor=white" />
  <img alt="Express" src="https://img.shields.io/badge/Express-4.18-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white" />
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" />
  <img alt="Status" src="https://img.shields.io/badge/Status-Active-success?style=for-the-badge" />
  <img alt="Contributions" src="https://img.shields.io/badge/Contributions-Welcome-blueviolet?style=for-the-badge" />
</p>

</div>

---

## 📋 Table of Contents
- [✨ Features](#-features)
- [🎯 Demo](#-demo)
- [🛠️ Tech Stack](#-tech-stack)
- [📁 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
- [📜 Available Scripts](#-available-scripts)
- [📊 Data Model](#-data-model)
- [🌐 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## ✨ Features

<div align="center">

### 🌳 **Interactive Tech Tree Visualization**
Explore technology dependencies through stunning visual graphs powered by React Flow

### 📚 **Category-Based Learning Paths**
Navigate through curated categories: **Frontend** • **Backend** • **Database** • **Infrastructure**

### 🎨 **Modern, Animated Landing Page**
Engaging hero section with smooth animations, previews, and social proof elements

### 🎴 **Flip-Card Technology Details**
Interactive cards that reveal in-depth descriptions, resources, and learning materials

### 🎭 **Smooth Animations & Transitions**
Beautiful page transitions and micro-interactions powered by Framer Motion

### 📱 **Responsive Design**
Mobile-first UI that works seamlessly across all devices

</div>

## 🎯 Demo

🌐 **Local Development:** `http://localhost:3000`  
📦 **Production Build:** Served by Express from the optimized build directory

> 💡 The application features a stunning visual interface with interactive tech trees, animated cards, and smooth transitions that make learning engaging and fun!

---

## 🛠️ Tech Stack

<table align="center">
<tr>
<td align="center" width="50%">

### 🎨 Frontend

<img src="https://img.shields.io/badge/React-18.2-61DAFB?style=flat-square&logo=react&logoColor=white" />
<img src="https://img.shields.io/badge/Framer_Motion-10-0055FF?style=flat-square&logo=framer&logoColor=white" />
<img src="https://img.shields.io/badge/React_Flow-11-FF0072?style=flat-square&logo=react&logoColor=white" />
<img src="https://img.shields.io/badge/AOS-2.3-blue?style=flat-square" />
<img src="https://img.shields.io/badge/React_Router-6.3-CA4245?style=flat-square&logo=react-router&logoColor=white" />

**Visual Magic:** Framer Motion animations, React Flow graphs  
**Styling:** Component-scoped CSS with responsive design  
**Routing:** React Router DOM for seamless navigation

</td>
<td align="center" width="50%">

### ⚙️ Backend & Build

<img src="https://img.shields.io/badge/Express-4.18-000000?style=flat-square&logo=express&logoColor=white" />
<img src="https://img.shields.io/badge/Node.js-18+-339933?style=flat-square&logo=node.js&logoColor=white" />
<img src="https://img.shields.io/badge/Create_React_App-5.0-09D3AC?style=flat-square&logo=create-react-app&logoColor=white" />

**Server:** Express.js static file server  
**Runtime:** Node.js 18+  
**Build Tools:** Create React App (react-scripts)  
**Package Manager:** npm 8+

</td>
</tr>
</table>

## 📁 Project Structure

```
📦 FullstackSchool
┣ 📂 public/
┃ ┣ 📄 index.html              # Main HTML template
┃ ┗ 📄 manifest.json           # PWA manifest
┣ 📂 src/
┃ ┣ 📄 App.jsx                 # Main application component
┃ ┣ 📄 index.js                # Application entry point
┃ ┣ 📂 styles/
┃ ┃ ┗ 📄 globals.css           # Global styles
┃ ┣ 📂 data/
┃ ┃ ┣ 📄 techlist.json         # Technology catalog with metadata
┃ ┃ ┗ 📄 techtree.json         # Dependency graph structure
┃ ┣ 📂 components/
┃ ┃ ┣ 🧩 Navbar                # Top navigation with mobile menu
┃ ┃ ┣ 🎨 HeroSection           # Animated hero landing
┃ ┃ ┣ 📄 LandingPage           # Main landing page composition
┃ ┃ ┣ 🌳 TechTree              # Interactive dependency graph (React Flow)
┃ ┃ ┣ 🎴 TechGrid & TechCard   # Flip-card technology display
┃ ┃ ┣ 🔍 SearchBar             # Technology search functionality
┃ ┃ ┣ 📑 CategorySelector      # Category filtering
┃ ┃ ┗ 👣 Footer                # Page footer
┃ ┗ 📂 pages/
┃   ┣ 📄 Frontend.jsx          # Frontend learning path
┃   ┣ 📄 Backend.jsx           # Backend learning path
┃   ┣ 📄 Database.jsx          # Database technologies
┃   ┗ 📄 Infrastructure.jsx    # DevOps & Infrastructure
┣ 🚀 server.js                 # Express production server
┣ 📦 package.json              # Project dependencies
┗ 📖 README.md                 # This file
```

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

<img src="https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white" />
<img src="https://img.shields.io/badge/npm-8+-CB3837?style=for-the-badge&logo=npm&logoColor=white" />

### 📥 Installation

**1️⃣ Clone the repository**
```bash
git clone https://github.com/MallamTeja/FullstackSchool.git
cd FullstackSchool
```

**2️⃣ Install dependencies**
```bash
npm install
```

### 🎮 Running the Application

**🔥 Development Mode** (with hot reload)
```bash
npm run dev
```
Opens at `http://localhost:3000` with live reloading for instant feedback!

**🏗️ Build for Production**
```bash
npm run build
```
Creates an optimized production bundle in the `build/` directory.

**🚀 Serve Production Build**
```bash
npm start
```
Runs Express server serving the production build at `http://localhost:3000`.

## 📜 Available Scripts

| Command | Description | Use Case |
|---------|-------------|----------|
| `npm run dev` | 🔥 Start CRA dev server | Development with hot reload |
| `npm run build` | 🏗️ Build for production | Creates optimized bundle |
| `npm start` | 🚀 Serve production build | Production deployment |
| `npm test` | 🧪 Run test suite | Execute CRA test runner |
| `npm run eject` | ⚙️ Eject CRA config | ⚠️ One-way operation! |

---

## 📊 Data Model

The application uses a dual-data structure for flexible visualization:

### 📄 `src/data/techtree.json`
Graph-based structure defining:
- **Nodes:** Technology items with positions
- **Edges:** Dependency relationships
- Powers the interactive React Flow visualization

### 📄 `src/data/techlist.json`
Flat array of technologies containing:
- Technology metadata (name, category, description)
- Learning resources and documentation links
- Icon URLs and visual assets
- Used by TechGrid and TechCard components

---

## 🧩 Key Components

<table>
<tr>
<td width="33%">

### 🧭 Navigation
**Navbar**  
Responsive top navigation with category links and mobile hamburger menu

</td>
<td width="33%">

### 🎨 Landing Page
**LandingPage**  
Hero section, About, How It Works, Preview, Features, Social Proof, CTA

</td>
<td width="33%">

### 🌳 Tech Tree
**TechTree**  
Interactive dependency graph visualization using React Flow

</td>
</tr>
<tr>
<td width="33%">

### 🎴 Tech Cards
**TechGrid + TechCard**  
Flip-card animations revealing tech details and resources

</td>
<td width="33%">

### 🔍 Filtering
**SearchBar**  
Real-time technology search functionality

</td>
<td width="33%">

### 📑 Categories
**CategorySelector**  
Quick category filtering and navigation

</td>
</tr>
</table>

## 🌐 Deployment

### Deployment Options

<table>
<tr>
<td width="50%">

#### 📦 Static Hosting
Perfect for platforms like **Vercel**, **Netlify**, **GitHub Pages**

```bash
npm run build
# Upload build/ directory to your host
```

**Supported Platforms:**
- ▲ Vercel
- 🟩 Netlify  
- 📄 GitHub Pages
- ☁️ AWS S3 + CloudFront
- 🔷 Azure Static Web Apps

</td>
<td width="50%">

#### 🚀 Node.js Server
For traditional hosting with **Express**

```bash
npm start
# Serves at http://localhost:3000
```

**Supported Platforms:**
- 🟢 Heroku
- ☁️ AWS EC2 / ECS
- 🔷 Azure App Service
- 🌊 DigitalOcean
- ⚡ Railway

</td>
</tr>
</table>

### 🐳 Docker Deployment

Multi-stage Dockerfile for optimized production builds:

```dockerfile
# syntax=docker/dockerfile:1
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=build /app/build ./build
COPY server.js package*.json ./
RUN npm ci --omit=dev
EXPOSE 3000
CMD ["npm", "start"]
```

**Build and Run:**
```bash
docker build -t fullstackschool .
docker run -p 3000:3000 fullstackschool
```

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help make FullstackSchool even better:

### 🌟 How to Contribute

1. **🍴 Fork the repository**
   ```bash
   # Click the Fork button on GitHub
   ```

2. **🌿 Create your feature branch**
   ```bash
   git checkout -b feat/amazing-feature
   ```

3. **💻 Make your changes**
   - Follow existing code style (functional components, CSS modules)
   - Write meaningful commit messages
   - Test your changes thoroughly

4. **✅ Commit your changes**
   ```bash
   git commit -m "Add some amazing feature"
   ```

5. **📤 Push to your branch**
   ```bash
   git push origin feat/amazing-feature
   ```

6. **🎯 Open a Pull Request**
   - Provide a clear description of changes
   - Include screenshots/GIFs for UI changes
   - Reference any related issues

### 📝 Contribution Guidelines

- Use **functional React components** with hooks
- Follow the existing **CSS module pattern** (one CSS file per component)
- Ensure **responsive design** for all new features
- Add **meaningful comments** for complex logic
- Update **documentation** for new features

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

### 💖 Made with Love by Developers, for Developers

<p align="center">
  <img alt="Status" src="https://img.shields.io/badge/Status-Active_Development-success?style=for-the-badge&logo=statuspal&logoColor=white" />
  <img alt="Contributions" src="https://img.shields.io/badge/Contributions-Welcome-blueviolet?style=for-the-badge&logo=github&logoColor=white" />
  <img alt="Made with Love" src="https://img.shields.io/badge/Made_with-❤️_and_☕-red?style=for-the-badge" />
</p>

### ⭐ Star this repo if you find it helpful!

**[Report Bug](https://github.com/MallamTeja/FullstackSchool/issues)** • **[Request Feature](https://github.com/MallamTeja/FullstackSchool/issues)** • **[Discuss](https://github.com/MallamTeja/FullstackSchool/discussions)**

---

<sub>Built with React ⚛️ • Powered by Express 🚂 • Visualized with React Flow 🌊</sub>

</div>
