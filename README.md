# 🏋️ Creat-In

## ⚡️ https://creat-in.vercel.app/

Creat-In is a **Next.js 13 (App Router)** based fitness supplement storefront built with **Tailwind CSS**.  
It allows users to browse products like creatine, whey protein, BCAA, glutamine, and more, with a modern, responsive UI.

---

## 🚀 Features
- 🛒 **Product Showcase**
  - View supplement products with image, price, and details
- 🌐 **Modern UI**
  - Responsive design for mobile, tablet, and desktop
  - Navigation bar & footer
- 🏢 **Company Info**
  - About and contact sections
- ⚡ Built with **Next.js 13 (App Router)**

---

## 🛠️ Tech Stack
- **Frontend:** Next.js 13, React, Tailwind CSS
- **Deployment:** Vercel
- **Assets:** Static images served from `/public`

---

## 📂 Project Structure

├── components/ # Shared UI components (Navbar, Footer, Hero, Card, etc.)<br>
├── pages/ # Next.js pages (routes)<br>
│ ├── index.js # Home page<br>
│ ├── about.js # About page<br>
│ ├── contact.js # Contact page<br>
│ └── products.js # Product listing page<br>
├── public/ # Static assets (images, icons, preview)<br>
├── styles/ # Tailwind & global CSS<br>
├── package.json # Project metadata & dependencies<br>
└── next.config.js # Next.js configuration



## ⚙️ Setup & Installation

### 1. Clone Repository
```bash
git clone https://github.com/tahsinratul/creat-in.git
cd creat-in
2. Install Dependencies
bash
Copy
Edit
npm install
# or
yarn install
3. Configure Environment Variables
Create a .env.local file in the root directory and add:

env
Copy
Edit
MONGODB_URI=your-mongodb-uri
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
4. Run Development Server
bash
Copy
Edit
npm run dev
Open http://localhost:3000 in your browser.


🚀 Deployment
This project is optimized for deployment on Vercel:

bash
Copy
Edit
vercel
📜 License
This project is licensed under the MIT License.

👨‍💻 Author
Tahsin Fahim Ratul
