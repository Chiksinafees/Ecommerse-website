import "./App.css";
import NavBar from "./component/NavBar";
import Items from "./component/Items";

function App() {
  return (
    <div >
      <NavBar />
      <h1 class="text-center p-5  bg-secondary text-white">The Generics</h1>
      <Items/>
    </div>
  );
}

export default App;
