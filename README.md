Webstore
Webstore: A vibrant React e-commerce app with Tailwind CSS, PostCSS, Redux, and Firebase Firestore. Features animated product cards, category navigation, and real-time search. Enhanced with Material Tailwind, Ant Design, Lucide icons, and React Hot Toast for a dynamic UI. (229 chars)
Features

Responsive Design: Fluid navbar, product cards, and categories for mobile and desktop.
Animated UI: Sequential letter animations for headings, card zoom-ins, button ripples, and glowing sections.
Real-Time Search: Instant product search with dropdown suggestions.
Cart Management: Add/remove items using Redux with local storage persistence.
Category Navigation: Scrollable category icons with hover scaling and glow effects.
Real-Time Data: Firebase Firestore for dynamic product data retrieval.
Modern Styling: Tailwind CSS with PostCSS for modular styles and custom animations.

Technologies

React (^18.2.0): Component-based UI with hooks.
Tailwind CSS (^3.4.17): Utility-first CSS framework for responsive styling.
PostCSS (^8.5.6): CSS processing with Autoprefixer (^10.4.21).
Redux (@reduxjs/toolkit ^2.1.0, react-redux ^9.1.0): Cart state management.
React Router (^6.30.1): Client-side routing.
React Hot Toast (^2.4.1): Toast notifications for user feedback.
Firebase Firestore (firebase ^10.8.0): Real-time product data storage.
Material Tailwind (^2.1.8): Material Design components for enhanced UI.
Ant Design (^5.14.0): Pre-built UI components for complex interfaces.
Lucide React (^0.323.0) & React Icons (^5.0.1): Icon libraries for UI elements.
React Tabs (^6.1.0): Tabbed interface management.
Vite (^5.0.8, @vitejs/plugin-react ^4.2.1): Fast build tool and dev server.
ESLint (^8.55.0, plugins: react ^7.33.2, react-hooks ^4.6.0, react-refresh ^0.4.5): Code linting.
TypeScript (@types/react ^18.2.43, @types/react-dom ^18.2.17): Type-checking.
Google Fonts (Inter): Consistent typography.

Installation

Clone the repository:git clone https://github.com/RayanPinto/Webstore.git
cd Webstore


Install dependencies:npm install


Set up Firebase:
Create a Firebase project at console.firebase.google.com.
Add Firestore configuration  in the project root:REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id
Add all these into the file -FirebaseConfig.jsx




Run the development server:npm run dev


Build for production:npm run build


Preview the build:npm run preview



Usage

Development: Run npm run dev to start the Vite dev server at http://localhost:5173.
Navigation: Use the navbar to search products, access cart, or navigate to login/signup.
Product Browsing: View bestselling products or select categories to explore items.
Cart: Add/remove items with toast notifications for feedback.
Linting: Run npm run lint to check code quality with ESLint.

