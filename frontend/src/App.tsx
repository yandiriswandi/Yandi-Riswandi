import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Routing from "./Routes";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {Routing.map((prop: any, index: any) => {
          if (prop.path === "") {
            return (
              <Route
                key={`menu-${index}`}
                path="/"
                element={<Navigate to={prop.redirect} replace />}
              />
            );
          } else {
            return (
              <Route
                key={"menu-" + index}
                path={prop.path}
                element={<prop.component />}
              />
            );
          }
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
