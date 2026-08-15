# AtlasLogix — Shipment Compliance & Operations Console

[![Angular Version](https://img.shields.io/badge/Angular-21.2.8-dd0031.svg?style=flat-square&logo=angular)](https://angular.io/)
[![RxJS](https://img.shields.io/badge/RxJS-7.8.0-b7178c.svg?style=flat-square&logo=reactivex)](https://rxjs.dev/)
[![PrimeNG](https://img.shields.io/badge/PrimeNG-21.0.0-06b6d4.svg?style=flat-square)](https://primeng.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.0.0-38bdf8.svg?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

> **AtlasLogix** is a multi-tenant logistics compliance and tracking platform built with Angular 21, NgRx SignalStore, and PrimeNG. It provides operational visibility into active shipments, environmental sensor thresholds, compliance approvals, audit history, and real-time Server-Sent Events (SSE) telemetry streaming.

🚀 **Live Production Demo**: [https://atlas-logix-delta.vercel.app/auth/login](https://atlas-logix-delta.vercel.app/auth/login)

---

## 🛠️ Technology Stack

* **Core Framework**: Angular `21.2.8` (Standalone Components, Signals, Control Flow `@if`/`@for`)
* **State Management**: `@ngrx/signals` (`SignalStore` with computed signals and `rxMethod`)
* **UI & Components**: [PrimeNG 21](https://primeng.org/) (Tables, Dialogs, Tabs, Selects, Toast Notifications)
* **Styling**: TailwindCSS 4, Custom SCSS CSS Variables (Dark/Light token system)
* **Data Visualization**: [ApexCharts](https://apexcharts.com/) (`ng-apexcharts`)
* **Localization**: `@ngx-translate/core` (English `en` & Arabic `ar`, with dynamic LTR/RTL support)
* **HTTP & SSE**: Native Angular `HttpClient`, RxJS, and `ReadableStream` reader for real-time SSE telemetry streams

---

## 📋 System Prerequisites

Before running the application locally, ensure you have **Node.js** (v18.x LTS or higher) and **npm** (v9.x or higher) installed on your system.

### Installing Node.js & npm

#### 🪟 Windows
1. Download the latest LTS installer from [nodejs.org](https://nodejs.org/).
2. Run the `.msi` file and follow the installation wizard (ensure **npm package manager** is checked).
3. Alternatively, install via **winget**:
   ```cmd
   winget install OpenJS.NodeJS.LTS
   ```
4. Verify installation in Command Prompt / PowerShell:
   ```cmd
   node -v
   npm -v
   ```

#### 🍏 macOS
- **Option A (Homebrew)**:
  ```bash
  brew install node
  ```
- **Option B (Installer)**:
  Download the macOS `.pkg` installer from [nodejs.org](https://nodejs.org/) and follow the setup wizard.
- Verify installation:
  ```bash
  node -v
  npm -v
  ```

#### 🐧 Linux (Ubuntu / Debian)
Using NodeSource Node.js 20.x repository:
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```
Verify installation:
```bash
node -v
npm -v
```

---

## 🚀 Getting Started (Local Setup)

Follow these steps to clone and run AtlasLogix locally:

### 1. Clone the Repository
```bash
git clone https://github.com/mostafa201272/atlas-logix.git
cd atlas-logix
```

### 2. Install Project Dependencies
```bash
npm install
```

### 3. Start the Local Development Server
```bash
npm start
```
*Or using Angular CLI directly:*
```bash
npx ng serve
```

### 4. Open in Browser
Navigate to **`http://localhost:4200/`** in your browser. The application will reload automatically when source files are modified.

---

## 🔐 Test Credentials & Permission Matrix

You can test different user permissions using the following credentials:

| Role | Email | Password | Allowed Capabilities |
| :--- | :--- | :--- | :--- |
| **Tenant Administrator** | `admin.mostafa-elsherbiniy@atlaslogix.test` | `tq0N94TaMbZXZO8z` | Tenant/User Admin, Audit Logs, Live Stream |
| **Compliance Auditor** | `frontend.mostafa.elsherbiniy@atlaslogix.test` | `Nus0ohQ2gCNDwYpK` | Compliance Approval, Audit Logs, Live Stream |
| **Operations Manager** | `operations.mostafa-elsherbiniy@atlaslogix.test` | `GEm6vEXV713KhXRv` | Audit Logs, Live Stream |
| **Warehouse Supervisor** | `warehouse.mostafa-elsherbiniy@atlaslogix.test` | `J2yb0MSOT2_NdUei` | Live Stream Only |
| **Viewer** | `viewer.mostafa-elsherbiniy@atlaslogix.test` | `hGurs9DFo2SPEsU6` | Audit Logs Only |

---

## 🏢 Multi-Tenant Support

AtlasLogix provides dynamic context switching between assigned tenants:
- **Primary Tenant**: `TENANT-MOSTAFA-ELSHERBINIY`
- **Secondary Tenant**: `TENANT-MOSTAFA-ELSHERBINIY-MENA`

Use the tenant selector dropdown in the top header to switch between primary and secondary tenants seamlessly.

---

## 🏗️ Production Build

To build the project for production, run:

```bash
npm run build
```

The build artifacts will be stored in the `dist/atlas-logix/` directory.

---

## 📄 Documentation

For full architectural details, sequence diagrams, and component relationships, refer to the [Technical Architecture Report](ATLAS_LOGIX_TECHNICAL_ARCHITECTURE.md).

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).
