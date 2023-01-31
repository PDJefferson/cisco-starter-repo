import "./App.css";
import Banner from "./components/Banner";
import Exhibit from "./components/Exhibit";
function App() {
  return (
    <div className="App">
      <header>
        <Banner title={"Banner title"} />
      </header>
      <main className="Main">
        <Exhibit heading="template">
          <p>text</p>
        </Exhibit>
        <Exhibit heading="template">
          <p>text</p>
        </Exhibit>
        <Exhibit heading="template">
          <p>text</p>
        </Exhibit>
        <Exhibit heading="template">
          <p>text</p>
        </Exhibit>
      </main>
    </div>
  );
}

export default App;
