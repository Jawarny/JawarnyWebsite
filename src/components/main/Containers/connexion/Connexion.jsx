import "./connexion.css";
import Boutton from "../../../boutton/Boutton";

function Connexion() {
  return (
    <div className="bodyMain">
      <form className="horizontalForm">
        <label htmlFor="inputConnexion">
          Adresse Courriel ou Nom d'utilisateur:
        </label>
        <input type="text" id="inputConnexion" name="inputConnexion" />

        <label htmlFor="password">Mot de passe:</label>
        <input type="password" id="password" name="password" />

        <Boutton type="submit" to="/connexion" tag="Se Connecter" />
      </form>
    </div>
  );
}

export default Connexion;
