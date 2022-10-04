import { useState } from "react";
import Header from "./Header";

export default function Layout({ children }: any) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>{children}</main>
    </div>
  );
}
