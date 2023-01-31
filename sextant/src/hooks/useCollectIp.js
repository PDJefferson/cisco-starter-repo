import { useState } from "react";
import { useEffect } from "react";

export default function useCollectIp(url) {
  const [ip, setIp] = useState("");
  useEffect(() => {
    const abort = new AbortController();
    fetch(url, { signal: abort.signal })
      .then((response) => response.json())
      .then((data) => {
        setIp(data.ip);
      })
      .catch((error) => setIp(error.message));
    return () => {
      abort.abort();
    };
  }, [url]);

  return ip;
}
