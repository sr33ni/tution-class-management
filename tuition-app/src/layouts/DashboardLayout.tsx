import Header from "@/layouts/Header"
import Sidebar from "@/layouts/Sidebar"
import { Outlet } from "react-router-dom";
import { useState } from "react";


const DashboardLayout = () => {
  const [opensidebar , setsidebar] = useState ({'sidebaropen' :"col-lg-10", "sidebarhide" : "d-lg-block"})

  function handlenav() {
     setsidebar((prev) => ({
    sidebaropen: prev.sidebaropen === "col-lg-10" ? "col-lg-12" : "col-lg-10",
    sidebarhide: prev.sidebarhide === "d-lg-block" ? "d-lg-none" : "d-lg-block",
  }));
  }

return (
<div className="dashboard d-flex">
<Sidebar opensidebar={opensidebar}/>
 
      <div className={`content col-12 ${opensidebar.sidebaropen}`}>
<Header onNavToggle={handlenav} />
<main>
<Outlet /> {/* Pages will load here */}
</main>
</div>
</div>
  );

}

export default DashboardLayout