import { createContext } from "react";

export const ContexteDeConnexion = createContext({
  estConnecter: false,
  connexion: () => {},
  deconnexion: () => {},
});
