import React from "react";
import { NAVBAR_HEIGHT } from "@/lib/constants";
import NavBar from "@/components/ui/NavBar";
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full">
      <NavBar />
      <main
        className={`h-full flex w-full flex-col pt-[${NAVBAR_HEIGHT}px]`}
        style={{ paddingTop: `${NAVBAR_HEIGHT}px` }}
      >
        {children}
      </main>
    </div>
  );
};

export default layout;
