import "./Inscription.css";
import Boutton from "../../../boutton/Boutton";

function Inscription() {
  return (
    <div className="bodyMain">
      <form className="horizontalForm">
        <label htmlFor="prenom">Prénom:</label>
        <input type="text" id="prenom" name="prenom" />

        <label htmlFor="nom">Nom:</label>
        <input type="text" id="nom" name="nom" />

        <label htmlFor="email">Adresse Courriel:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="username">Nom d'utilisateur:</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="password">Mot de passe:</label>
        <input type="password" id="password" name="password" />

        <label htmlFor="confirmPassword">Confirmation de mot de passe:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" />

        <Boutton type="submit" to="/connexion" tag="S'enregistrer" />
      </form>
    </div>
  );
}

export default Inscription;
