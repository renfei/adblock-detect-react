import { useEffect, useState } from "react";

export const useDetectAdBlock = () => {
  const [adBlockDetected, setAdBlockDetected] = useState(false);

  useEffect(() => {
    // grab a domain from https://github1s.com/gorhill/uBlock/blob/master/docs/tests/hostname-pool.js
    const url = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    fetch(url, {
      method: "GET",
      mode: "no-cors",
      cache: "no-store",
    }).catch(() => {
      setAdBlockDetected(true);
    });
  }, []);

  return adBlockDetected;
};
