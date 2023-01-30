import { useContext } from "react";
import "./App.css";
import { ThemeContext } from "./context/theme";
import MainRoutes from "./routes/MainRoutes";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  const [{ themeName }] = useContext(ThemeContext);
  return (
    <div id="top" className={`app ${themeName}`}>
      <Header />
      <main className="main">
        <MainRoutes />
      </main>
      <Footer />
    </div>
  );
}
export default App;
