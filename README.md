# Soar Dashboard

A modern and responsive dashboard built with React and Vite. This dashboard visualizes balance history, credit card details, expense statistics, quick transfers, and more, with a smooth and clean UI.

## 🚀 Live Demo

👉 [View on Vercel](https://your-vercel-demo-link.vercel.app)  
_Replace with your actual Vercel deployment URL._

## 🛠️ Local Setup Instructions

Follow these steps to run the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/haseeb-shahid534/soar-dashboard.git
cd soar-dashboard
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment

Create a `.env` file and add the following variable:

```env
VITE_BASE_URL="https://67e7b18b20e3af747c3f4517.mockapi.io/api/v1/"
```

### 4. Run the development server

```bash
npm run dev
```

The application should now be running at [http://localhost:5173](http://localhost:5173)

## 📦 Build for production

```bash
npm run build
```

## ⚙️ Tech Stack

- **React + Vite** – Frontend framework and dev environment
- **Tailwind CSS** – Utility-first styling
- **Redux Toolkit** – State management
  - A single slice is used to fetch:
    - Dashboard user data
    - Profile data
  - Data is fetched from two mock endpoints on [MockAPI](https://mockapi.io):
    - Dashboard Data: `dashboard?userId=1`
    - Profile Data: `users/1`
- **Charting Libraries**
  - `react-chartjs-2`, `chart.js`, `chartjs-plugin-datalabels` – For rendering charts and data labels
- **Form Validation**
  - `formik` with `yup` – For form state management and schema-based validation

## 💡 Assumptions

- This project assumes no backend integration; all data visualizations are based on mocked data.
- Node.js (v16 or higher) and npm must be installed.
- Mock data is locally updated and stored in Redux state.
