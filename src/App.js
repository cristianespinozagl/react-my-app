import { Route, Routes } from "react-router-dom";
import Users from './components/users.component';

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
      <Route path="/" element={<TestComponent/>}/>
      <Route path="/users" element={<Users/>}/>
    </Routes>
  );

};

export default App;