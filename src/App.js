import "./App.css";
import {
  Navbar,
  Header,
  Features,
  Download,
  Subscribe,
  Faq,
  Footer,
} from "./components";
import { useGlobalContext } from "./store/context";

function App() {
  const { setShowMenu } = useGlobalContext();
  return (
    <div>
      <Navbar />
      <div className="w-full flex self-start flex-col mt-16">
        <div
          className="w-full overflow-hidden flex flex-col"
          onClick={() => setShowMenu(false)}
        >
          <Header />
          <Features />
          <Download />
          <Subscribe />
          <Faq />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
