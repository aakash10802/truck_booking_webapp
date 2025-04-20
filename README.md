---

# 🚚 Truck Trip Booking Web App



A Full Stack Truck Trip Booking Platform built with **Next.js 13**, **React.js**, **Tailwind CSS**, **Google Maps API**, and **Stripe** for payments.

---

## ✨ Features

- 🔵 **Truck Trip Search** — Find and book truck trips easily.
- 📍 **Google Places Autocomplete** — Smooth pickup and destination selection.
- 🗺️ **Map Integration** — View routes and trip details on Google Maps.
- 💳 **Stripe Payment Gateway** — Secure and simple trip payment processing.
- 🖥️ **Responsive UI** — Works seamlessly on mobile, tablet, and desktop.
- 🔒 **Authentication (Coming Soon)** — User sign-up, login, and trip history.

---

## 🛠️ Tech Stack

- **Frontend**:

  - [Next.js 13 (App Router)](https://nextjs.org/docs)
  - [React.js](https://reactjs.org/)
  - [Tailwind CSS](https://tailwindcss.com/)

- **Maps and Location Services**:

  - [Google Maps API](https://developers.google.com/maps/documentation/javascript/overview)
  - [react-google-places-autocomplete](https://github.com/Tintef/react-google-places-autocomplete)

- **Payments**:

  - [Stripe](https://stripe.com/docs)

- **Hosting**:

  - [Vercel](https://vercel.com/) (Recommended)

---

## 📸 Screenshots

| Home Page | Booking Page | Payment Page |
| --------- | ------------ | ------------ |
|           |              |              |

*(Add your screenshots after you deploy or during development!)*

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/aakash10802/truck_booking_webapp.git
cd truck_booking_webapp
```

### 2. Install dependencies

```bash
bun install
# or
npm install
```

### 3. Setup Environment Variables

Create a `.env.local` file in the root folder and add:

```env
NEXT_PUBLIC_GOOGLE_API_KEY=your_google_api_key
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your_stripe_public_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

> ⚡ Make sure your Google Cloud project has Maps JavaScript API and Places API enabled!

### 4. Run the development server

```bash
bun run dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

---

## 📚 Folder Structure

```bash
/components   # Reusable UI components
/app          # Next.js 13 App Directory (Routing, Pages)
/public       # Static files like images
/styles       # Tailwind and custom CSS
/utils        # Helper functions
```

---

## 🛡️ License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Stripe Documentation](https://stripe.com/docs)
- [Google Maps Platform](https://developers.google.com/maps)

---

## 📞 Contact

Made with ❤️ by [Aakash](https://github.com/aakash10802)

