import "./styles.css";
import LeftMenu from "./components/LeftMenu";
import Canvas from "./components/Canvas";
import Header from "./components/Header";
export default function App() {
  return (
    <div className="App">
      <LeftMenu />
      <div className="right-area">
        <Header />
        <Canvas />
      </div>
    </div>
  );
}
