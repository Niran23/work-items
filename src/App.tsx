import Practice from "./pages/practice";
import { UserProvider } from "./UserContext";
import Profile from "./pages/Profile";
function App() {
  return (
    <UserProvider>
      <Practice />
    </UserProvider>
  );
}

export default App;