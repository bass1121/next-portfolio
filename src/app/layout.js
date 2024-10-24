import "../styles/globals.css";
import "../styles/homepage.css";
import ThemeProvider from "../ThemeProvider";
import ThemeSwitcher from "../ThemeSwitcher";


export const Metadata = {
  title: "Next.js Portfolio",
  description: "Sean Bass Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://kit.fontawesome.com/ff073515b8.js" crossOrigin="anonymous"></script>
      </head>
      <body className="{bg-white dark:bg-black ${inter.className}`}">
        <ThemeProvider attribute="class" defaultTheme="systemTheme" enableSystem >     
            {children}   
        </ThemeProvider>
      </body>
    </html>
  );
}
