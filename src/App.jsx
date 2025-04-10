import React from "react";
import DefaultLayout from "./layout/DefaultLayout";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <DefaultLayout>
      <AppRoutes />
    </DefaultLayout>
  );
}

export default App;
