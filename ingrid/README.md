# Ingrid's Mediterranean Café

Welcome to the Ingrid's Mediterranean Café project! This is a Next.js application styled with Tailwind CSS, showcasing a delightful café experience through a beautifully designed homepage.

## Project Structure

The project is organized as follows:

```
ingrid
├── src
│   ├── app
│   │   ├── page.tsx                # Main entry point for the Home page
│   │   ├── components               # Contains all reusable components
│   │   │   ├── Navbar.tsx           # Navigation bar with links and mobile menu
│   │   │   ├── Hero.tsx             # Full-screen hero section with background image
│   │   │   ├── QuickIntro.tsx       # Quick introduction about the café
│   │   │   ├── FeaturedDesserts.tsx # Grid of featured dessert cards
│   │   │   ├── CTASection.tsx       # Call-to-action section with buttons
│   │   │   └── Footer.tsx           # Footer with contact info and links
│   │   └── styles
│   │       └── animations.css       # CSS for animations
│   └── types
│       └── index.ts                 # TypeScript types and interfaces
├── public
│   └── imgs
│       └── shop-from-the-outside.jpg # Background image for the Hero section
├── package.json                      # npm configuration file
├── tailwind.config.js                # Tailwind CSS configuration
├── tsconfig.json                     # TypeScript configuration
└── README.md                         # Project documentation
```

## Features

- **Responsive Design**: The application is fully responsive, ensuring a seamless experience across devices.
- **Accessibility**: All components are designed with accessibility in mind, including proper aria-labels and keyboard navigation.
- **Animations**: Smooth animations enhance user experience, making interactions more engaging.
- **Tailwind CSS**: Utilizes Tailwind CSS for utility-first styling, allowing for rapid design changes.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd ingrid
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000` to see the application in action.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.

## License

This project is open-source and available under the [MIT License](LICENSE).