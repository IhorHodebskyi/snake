import { AuthNav } from "./AuthNav";
import { Navigation } from "./Navigation";
import UserMenu from "./UserMenu";

const AppBar = () => {
  const isLoggedIn = "";
  return (
    <div className="cla">
      <header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
    </div>
  );
};
export default AppBar;
