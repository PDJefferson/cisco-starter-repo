import "./App.css";
import Banner from "./components/Banner";
import Exhibit from "./components/Exhibit";
import useCollectIp from "./hooks/useCollectIp";
import DisplayLatency from "./components/DisplayLatency";
const API_DOMAIN = "ipify.org";


function App() {
  const ipv6Address = useCollectIp(`https://api6.${API_DOMAIN}?format=json`);
  const ipv4Address = useCollectIp(`https://api.${API_DOMAIN}?format=json`);
  return (
    <div className="App">
      <header>
        <Banner title={"SEXTANT"} />
      </header>
      <main className="Main">
        <Exhibit heading="ipv4">
          <p>{ipv4Address}</p>
        </Exhibit>
        <Exhibit heading="ipv6">
          <p>{ipv6Address}</p>
        </Exhibit>
        <Exhibit heading="Latency">
          <DisplayLatency />
        </Exhibit>
      </main>
    </div>
  );
}

export default App;
