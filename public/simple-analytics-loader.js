(() => {
  const productionHosts = new Set(["mietfolio.de", "www.mietfolio.de"]);

  if (!productionHosts.has(window.location.hostname)) {
    return;
  }

  const privateRoutePrefixes = [
    "/auth",
    "/passwort-zuruecksetzen",
    "/mieter",
    "/app",
    "/nebenkosten",
    "/dokumente",
    "/rauchmelder",
    "/einstellungen",
    "/properties",
    "/tenants",
    "/messages",
    "/notifications",
    "/support",
    "/onboarding",
  ];

  const isPrivateRoute = privateRoutePrefixes.some((prefix) => {
    return window.location.pathname === prefix || window.location.pathname.startsWith(`${prefix}/`);
  });

  if (isPrivateRoute) {
    return;
  }

  const ignoredPages = privateRoutePrefixes.flatMap((prefix) => [prefix, `${prefix}/*`]);

  const script = document.createElement("script");
  script.async = true;
  script.dataset.ignorePages = ignoredPages.join(",");
  script.src = "https://scripts.simpleanalyticscdn.com/latest.js";
  document.head.appendChild(script);
})();
