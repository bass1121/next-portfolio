import "../styles/globals.css";
import "../styles/homepage.css";

export const Metadata = {
  title: "Next.js Portfolio",
  description: "Sean Bass Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://kit.fontawesome.com/ff073515b8.js" crossorigin="anonymous"></script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
