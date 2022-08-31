import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/elements/Header/Header";
import routesConfig from "./routesConfig";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {routesConfig.map(({ path, element }, index) => (
          <Route
            key={index}
            path={path}
            element={element}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
