import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";

export function Root() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      <Outlet />
    </div>
  );
}
