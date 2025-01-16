import {Route, Routes} from "react-router";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Services from "./pages/Services.tsx";
import NotFound from "./pages/NotFound.tsx";
import PageTitle from "./components/Shared/PageTitle.tsx";

function AppRoutes() {
  return (
    <Routes>
      <Route index element={
        <>
          <PageTitle title="The Chuckling Abyss"/>
          <Home/>
        </>
      }/>
      <Route path="about" element={
        <>
          <PageTitle title="About - The Chuckling Abyss"/>
          <About/>
        </>
      }/>
      <Route path="services" element={
        <>
          <PageTitle title="Services - The Chuckling Abyss"/>
          <Services/>
        </>
      }/>
      <Route path="*" element={
        <>
          <PageTitle title="Not Found - The Chuckling Abyss"/>
          <NotFound/>
        </>
      }/>
    </Routes>
  );
}

export default AppRoutes;