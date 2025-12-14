import Header from "./components/layout/Header";
import { UserCard } from "./components/feature/UserCard";
import { Button } from "./components/layout/ui/Button";

function App() {
  const firstName = "Peter Kyalo";
  const technology = "Resct";

  const user = {
    firstName: "Peter Nzingu",
    technology: "Full Stack Devseloper",
  };
  {/* Function to handle button click */  } 
  const showAlert = () => {
    alert("Alert from Parent Component!");
  };
  return (
    <>
      {/* <Header />
      <h1>This is App component!</h1> */}

      <UserCard firstname={firstName} technology={technology} />

      <UserCard firstname={user.firstName} technology={user.technology} />

      <UserCard />

      <Button clickHandler={showAlert} />
    </>
  );
}

export default App;
