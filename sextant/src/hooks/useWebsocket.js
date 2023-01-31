import { useEffect, useState } from "react";
import { w3cwebsocket as W3cwebsocket } from "websocket";

export default function useWebsocket(url) {
  const [data, setData] = useState("");
  useEffect(() => {
    const client = new W3cwebsocket(url);
    client.onopen = (event) => {
      console.log("websocket client connected");
    };

    client.onmessage = (message) => {
      const date = JSON.parse(message.data);
      setData(date);
    };

    return () => client.close();
  }, [url]);

  return data;
}
