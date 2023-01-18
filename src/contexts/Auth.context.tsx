import { createContext, useState } from "react";

const usuarioEstadoInicial = {
  terminal: "",
  email: "",
  password: "",
};

type UsuarioType = {
  terminal: string;
  email: string;
  password: string;
};

type AuthContextType = {
  usuario: UsuarioType;
  setUsuario: React.Dispatch<React.SetStateAction<UsuarioType>>;
  signIn: (event: any) => void;
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: any) => {
  const [usuario, setUsuario] = useState<UsuarioType>(usuarioEstadoInicial);

  async function signIn(event: any) {
    event.preventDefault();

    const response = await fetch("http://localhost:3000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    const data = await response.json();

    console.log(data);
  }

  return (
    <AuthContext.Provider value={{ usuario, setUsuario, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
