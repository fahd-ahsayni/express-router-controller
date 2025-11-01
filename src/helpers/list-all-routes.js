// Helper function to list all routes
export default function listAllRoutes(app) {
  // ANSI color codes
  const colors = {
    reset: "\x1b[0m",
    yellow: "\x1b[33m",
    green: "\x1b[32m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    red: "\x1b[31m",
  };

  const port = app.get("port") || 3000;
  const colorList = [
    colors.blue,
    colors.magenta,
    colors.cyan,
    colors.green,
    colors.yellow,
  ];
  const methodOrder = { GET: 1, POST: 2, PUT: 3, PATCH: 4, DELETE: 5 };

  // Get registered routers from app settings
  const routersConfig = app.get("routers") || [];
  const allRoutes = [];

  // Function to extract routes from a router
  function extractRoutesFromRouter(router, basePath = "") {
    const routes = [];
    if (!router || !router.stack) {
      return routes;
    }
    router.stack.forEach((layer) => {
      if (layer.route) {
        const methods = Object.keys(layer.route.methods).map((m) =>
          m.toUpperCase()
        );
        const path = basePath + layer.route.path;
        routes.push({
          path: path,
          methods: methods,
        });
      }
    });
    return routes;
  }

  // Extract routes from all configured routers
  routersConfig.forEach((config, index) => {
    const { router, path: basePath, name } = config;
    const color = colorList[index % colorList.length];

    const routes = extractRoutesFromRouter(router, basePath);
    routes.forEach((r) => {
      allRoutes.push({
        ...r,
        color: color,
        router: name || basePath.replace("/", "") || "root",
      });
    });
  });

  if (allRoutes.length === 0) {
    console.log("No routes found.");
    return;
  }

  // Sort by router first, then by method
  allRoutes.sort((a, b) => {
    if (a.router !== b.router) {
      return a.router.localeCompare(b.router);
    }
    const methodA = methodOrder[a.methods[0]] || 999;
    const methodB = methodOrder[b.methods[0]] || 999;
    if (methodA !== methodB) {
      return methodA - methodB;
    }
    return a.path.localeCompare(b.path);
  });

  // Build routes table with router name column
  const tableData = {};
  allRoutes.forEach((r) => {
    const methods = r.methods.join(", ");
    const url = `http://localhost:${port}${r.path}`;
    const color = r.color;

    // Create unique key with color
    let uniqueKey = `${color}${methods}${colors.reset}`;
    let counter = 0;
    while (tableData[uniqueKey] !== undefined) {
      counter++;
      uniqueKey = `${color}${methods}${colors.reset}${" ".repeat(counter)}`;
    }

    tableData[uniqueKey] = {
      Router: r.router.toUpperCase(),
      URL: url,
    };
  });

  console.log("\nRegistered Routes:");
  console.table(tableData);
}
