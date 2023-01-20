import { Route, Routes } from "react-router-dom";


const TestComponent = () => {
  return (
    <div>
      <h1>Hola desde el AppComponent</h1>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<TestComponent/>}>


      </Route>
    </Routes>
  );

};

export default App;