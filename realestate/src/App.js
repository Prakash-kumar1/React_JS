import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import { Property } from "./components/Property/Property";
import { Header } from "./components/Header/Header";
import { Page } from "./components/Page/Page";

import "./App.css";

export const App = () => {
  const [favProperty, setFavProperty] = useState([]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Header favProperty={favProperty} setFavProperty={setFavProperty} />
        }
      >
        <Route
          index
          element={
            <Property
              favProperty={favProperty}
              setFavProperty={setFavProperty}
            />
          }
        />
        <Route
          path="page"
          element={
            <Page favProperty={favProperty} setFavProperty={setFavProperty} />
          }
        />
      </Route>
    </Routes>
  );
};
