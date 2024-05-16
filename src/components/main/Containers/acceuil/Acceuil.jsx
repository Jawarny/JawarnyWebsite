import Boutton from "../../../boutton/Boutton";
import "./Acceuil.css";

function Acceuil() {
  return (
    <div className="bodyMain">
      <div className="acceuil">
        <Boutton to="/inscription" tag="S'enregistrer" />
        <Boutton to="/connexion" tag="Se Connecter" />
      </div>
    </div>
  );
}

export default Acceuil;
