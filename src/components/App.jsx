import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { useCallback, useState } from "react";
import { ContexteDeConnexion } from "../components/context/ContexteDeConnexion";

import Racine from "../components/racine/Racine";
import Acceuil from "../components/main/Containers/acceuil/Acceuil";
import Inscription from "../components/main/Containers/inscription/Inscription";
import Connexion from "../components/main/Containers/connexion/Connexion";
import Jeux from "../components/main/Containers/jeux/Jeux";
import Erreur from "./erreur/Erreur";

import MonProfil from "../components/main/Containers/monProfil/MonProfil";
import EditProfil from "../components/main/Containers/editProfil/EditProfil";
import AjoutJeu from "../components/main/Containers/ajoutJeu/AjoutJeu";
import Utilisateurs from "../components/main/Containers/utilisateurs/Utilisateurs";

const routesDeconnecte = [
  {
    path: "/",
    element: <Racine />,
    errorElement: <Erreur />,
    children: [
      { path: "/", element: <Navigate to="/acceuil" replace /> },
      { path: "/acceuil", element: <Acceuil /> },
      { path: "/monProfil", element: <Navigate to="/connexion" replace /> },
      { path: "/inscription", element: <Inscription /> },
      { path: "/connexion", element: <Connexion /> },
      { path: "/jeux/:titreJeux", element: <Jeux /> },
      { path: "/jeux", element: <Jeux /> },
    ],
  },
];

const routesConnecte = [
  {
    path: "/",
    element: <Racine />,
    errorElement: <Erreur />,
    children: [
      { path: "/", element: <Navigate to="/acceuil" replace /> },
      { path: "/monProfil", element: <MonProfil /> },
      { path: "/editProfil", element: <EditProfil /> },
      { path: "/ajoutJeu", element: <AjoutJeu /> },
      { path: "/utilisateurs/:username", element: <Utilisateurs /> },
    ],
  },
];

const App = () => {
  const [estConnecter, setEstConnecter] = useState(false);

  const connecter = useCallback(() => setEstConnecter(true), []);
  const deconnecter = useCallback(() => setEstConnecter(false), []);

  const router = createBrowserRouter(
    estConnecter ? routesConnecte : routesDeconnecte
  );

  return (
    <ContexteDeConnexion.Provider
      value={{
        estConnecter: estConnecter,
        connecter: connecter,
        deconnecter: deconnecter,
      }}
    >
      <RouterProvider router={router} />
    </ContexteDeConnexion.Provider>
  );
};

export default App;
