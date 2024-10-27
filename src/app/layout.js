import "../styles/global.css";
import "../styles/homepage.css";
import "./resume/page";
import ThemeProvider from "../utils/ThemeProvider";

export const Metadata = {
  title: "Next.js Portfolio",
  description: "Sean Bass Portfolio",
  favicon: <link rel="icon" href="../..public/images/Favicon.png" sizes="anonymous" />
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://kit.fontawesome.com/ff073515b8.js" crossOrigin="anonymous"></script>
      </head>
      <body className="{bg-white dark:bg-gray-900`}">
        <ThemeProvider attribute="class" defaultTheme="systemTheme" enableSystem >     
            {children}   
        </ThemeProvider>
      </body>
    </html>
  );
}
