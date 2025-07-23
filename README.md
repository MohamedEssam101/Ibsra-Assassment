# 👕 Clothing Store

A modern e-commerce web application built with Angular for browsing and purchasing clothing items.

## 🛠️ Tech Used

**Frontend:**
- **Angular** 
- **TypeScript** 
- **Tailwind CSS** 
- **PrimeNG** 
- **PrimeIcons** 

**Backend:**
- **Express** 
- **MongoDB** 

## 📂 Project Structure

``` CLOTHINGSTORE/
├── backend/
│   ├── controllers/         # API controllers
│   ├── models/             # Database models
│   ├── routes/             # API routes
│   ├── services/           # Business logic
│   └── seeder/             # Database seeders
│
├── frontend/
│   └── src/
│       └── app/
│           ├── core/       # Core services & guards
│           │   ├── guards/
│           │   └── services/
│           ├── pages/      # Page components
│           │   ├── home/
│           │   ├── product/
│           │   └── products/
│           └── shared/     # Shared components
│               ├── header/
│               └── interfaces/
│
└── README.md
```
## 📦 Installation

### Frontend Setup

1. Navigate to the frontend directory
   ```bash
   cd frontend
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   ng serve
   ```

4. Open your browser and navigate to `http://localhost:4200`

### Backend Setup

1. Navigate to the backend directory
   ```bash
   cd backend
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the server
   ```bash
   npm start
   ```

4. Backend will run on `http://localhost:3000`
