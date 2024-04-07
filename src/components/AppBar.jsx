import { AuthNav } from "./AuthNav";
import GameState from "./GameState";
import { Navigation } from "./Navigation";
import UserMenu from "./UserMenu";

const AppBar = () => {
  const isLoggedIn = "";
  return (
    <div className="cla">
      <header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
        <GameState />
      </header>
    </div>
  );
};
export default AppBar;
