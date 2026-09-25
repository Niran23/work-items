import { createContext, useContext } from "react";

type UserContextType = {
  username: string;
  role: string;

};

const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export function UserProvider({
  children,
}: {  
  children: React.ReactNode;
}) {
  const username = "Niranjani";
  const role = "Student";
  return (
    <UserContext.Provider value={{ username,role}}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used inside UserProvider");
  }

  return context;
}