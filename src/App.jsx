import Home from "./routes/home.component";
import { Routes, Route } from "react-router";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";

const App = (props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />}></Route>
          <Route path="signIn" element={<SignIn />}></Route>
        </Route>
      </Routes>
    </>
  );
};
export default App;
