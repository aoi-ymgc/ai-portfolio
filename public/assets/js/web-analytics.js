(() => {
  if (
    location.protocol !== "https:" ||
    location.hostname !== "ai-portfolio.aoiroymgc.workers.dev" ||
    document.querySelector('script[src="https://static.cloudflareinsights.com/beacon.min.js"]')
  ) {
    return;
  }

  // The token is a public site identifier from Cloudflare's installation snippet.
  const beacon = document.createElement("script");
  beacon.type = "module";
  beacon.src = "https://static.cloudflareinsights.com/beacon.min.js";
  beacon.dataset.cfBeacon = JSON.stringify({ token: "fde027c934df471596a68b37c55b6e92" });
  document.body.appendChild(beacon);
})();
