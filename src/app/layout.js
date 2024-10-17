import "../styles/globals.css";
import "../styles/homepage.css";

export const Metadata = {
  title: "Next.js Portfolio",
  description: "Sean Bass Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
