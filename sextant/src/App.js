import "./App.css";
import Banner from "./components/Banner";
import Exhibit from "./components/Exhibit";
import useCollectIp from "./hooks/useCollectIp";
function App() {
  const ipv6Address = useCollectIp("ipv6");
  const ipv4Address = useCollectIp("ipv4");
  return (
    <div className="App">
      <header>
        <Banner title={"Banner title"} />
      </header>
      <main className="Main">
        <Exhibit heading="ipv4">
          <p>{ipv4Address}</p>
        </Exhibit>
        <Exhibit heading="ipv6">
          <p>{ipv6Address}</p>
        </Exhibit>
      </main>
    </div>
  );
}

export default App;
