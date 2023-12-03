import "@/styles/globals.css";

import Nav from "@/components/Nav";

export const metadata = {
  title: "Eventos",
  description: "Registra eventos",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="es">
      <body>
        <main>
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
