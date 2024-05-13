import "./Racine.css";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import Main from "../main/Main";

export default function Racine() {
  return (
    <div className="contenu">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
