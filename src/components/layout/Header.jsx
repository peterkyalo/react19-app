import { Naviagation } from "./Naviagation";
import { Button } from "./ui/Button";

function Header() {
  return (
    <>
      <h1>This is Header component!</h1>
      <Naviagation />
      <Button />
      <Button label="Submit" />
    </>
  );
}

export default Header;
