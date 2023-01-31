import { useState } from "react";
import { useEffect } from "react";

const API_DOMAIN = ".ipify.org";
export default function useCollectIp(request) {
  const [ip, setIp] = useState("");
  useEffect(() => {
    const abort = new AbortController();
    console.count(request);
    fetch(
      `https://${request === "ipv4" ? "api" : "api6"}${API_DOMAIN}?format=json`,
      { signal: abort.signal }
    )
      .then((response) => response.json())
      .then((data) => {
        setIp(data.ip);
      })
      .catch((error) => setIp(error.message));

    return () => {
      abort.abort();
    };
  }, [request]);

  return ip;
}
