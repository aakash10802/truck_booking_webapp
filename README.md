
---

# Truck.in - Truck Booking App

Welcome to **Truck.in**, a modern truck booking application built with Next.js, Tailwind CSS, and Clerk for authentication. This app provides a seamless user experience for booking trucks and managing logistics.



---

## Features

- **User Authentication**: Secure login and sign-out functionality powered by Clerk.
- **Responsive Design**: Built with Tailwind CSS for a mobile-first, responsive design.
- **Easy Navigation**: Simple and intuitive user interface.

---

## Technologies Used

- **Next.js**: A React framework for server-side rendering and static site generation.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Clerk**: Authentication and user management.
- **React**: A JavaScript library for building user interfaces.

---

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or bun (package manager)
- A Clerk account (for authentication)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/truck-booking-app.git
   cd truck-booking-app
   ```

2. **Install dependencies**:

   Using npm:

   ```bash
   npm install
   ```

   Using yarn:

   ```bash
   yarn install
   ```

   Using bun:

   ```bash
   bun install
   ```

3. **Set up Clerk**:
   - Sign up for a free account at [Clerk](https://clerk.dev/).
   - Create a new application and get your API keys.
   - Add your Clerk environment variables to a `.env.local` file:

     ```env
     NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-publishable-key
     CLERK_SECRET_KEY=your-secret-key
     ```

4. **Run the development server**:

   Using npm:

   ```bash
   npm run dev
   ```

   Using yarn:

   ```bash
   yarn dev
   ```

   Using bun:

   ```bash
   bun run dev
   ```

5. **Open the app**:
   Visit `http://localhost:3000` in your browser to see the app in action.

---

## Project Structure

```
truck-booking-app/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main page component
│   ├── components/           # Reusable components
│   ├── styles/               # Global styles
├── public/                   # Static assets
├── tailwind.config.ts        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
├── package.json              # Project dependencies
├── README.md                 # Project documentation
```

---

## Code Overview

The main page (`page.tsx`) renders a welcome message, a user authentication button, and a sign-in component.

```typescript
import { UserButton, SignIn } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-lef min-h-screen">
      <h2 className="text-2xl font-bold">Welcome to Truck.in</h2>
      <UserButton appearance={{ elements: { afterSignOutUrl: "/" } }} />
      <SignIn routing="hash" />
    </div>
  );
}
```

---

## Contributing

We welcome contributions! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- [Clerk](https://clerk.dev/) for authentication.
- [Tailwind CSS](https://tailwindcss.com/) for styling.
- [Next.js](https://nextjs.org/) for the framework.

---

## Contact

For questions or feedback, please reach out:

- **Your Name** - [your-email@example.com](mailto:aakashpc123@gmail.com)
- **GitHub** - [your-username](https://github.com/aakash10802)

---

Thank you for checking out **Truck.in**! 🚚

---

