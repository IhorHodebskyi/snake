import { Suspense } from "react";
import AppBar from "./AppBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={""}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </div>
  );
};

export default Layout;
