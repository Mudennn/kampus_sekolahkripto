import { sequence } from "astro/middleware";

// Define routes with dynamic segments and child routes
const routes = [
  { path: "/", page: "HomePage", protected: false },
  { path: "/about", protected: true },
  { path: "/signup", page: "SignUpPage", protected: false },
  { path: "/login", page: "LogInPage", protected: false },
  { path: "/ama", page: "BlogPage", protected: false },
  { path: "/blog", page: "BlogPage", protected: false },
  {
    path: "/blog/:module",
    page: "BlogPage",
    protected: true,
    children: [
      { path: "module-1", page: "AuthorBooksPage", protected: true },
      { path: "module-2", page: "AuthorBooksPage", protected: false },
      { path: "module-3", page: "AuthorBooksPage", protected: false },
      { path: "module-4", page: "AuthorBooksPage", protected: false },
      { path: "module-5", page: "AuthorBooksPage", protected: false },
    ],
  },
  {
    path: "/:category",
    page: "BlogPage",
    protected: false,
    children: [
      { path: "", page: "CategoryPage", protected: false }, // Add this line to handle dynamic routes directly under /category
      { path: "fashion", page: "AuthorBooksPage", protected: false },
      { path: "art", page: "AuthorBooksPage", protected: true },
      { path: "books/:bookId", page: "AuthorBookPage", protected: false },
    ],
  },
];

// Utility function to match a URL to a route, including dynamic segments
function matchRoute(url, routes) {
  for (const route of routes) {
    const match = matchDynamicRoute(url, route.path);
    if (match) return { ...route, params: match };
    if (route.children) {
      const childMatch = matchRoute(url, route.children);
      if (childMatch)
        return { ...childMatch, params: { ...match, ...childMatch.params } };
    }
  }
  return null;
}

// Utility function to match a URL to a dynamic route
function matchDynamicRoute(url, routePath) {
  const urlSegments = url.split("/");
  const routeSegments = routePath.split("/");
  if (urlSegments.length !== routeSegments.length) return null;

  const params = {};
  for (let i = 0; i < routeSegments.length; i++) {
    if (routeSegments[i].startsWith(":")) {
      params[routeSegments[i].slice(1)] = urlSegments[i];
    } else if (routeSegments[i] !== urlSegments[i]) {
      return null;
    }
  }
  return params;
}

// Route guard middleware
async function routeGuard(context, next) {
  const { redirect, url } = context;
  const matchedRoute = matchRoute(url.pathname, routes);
  if (!matchedRoute) {
    return redirect("/404");
  }

  // Add matched route and params to context
  context.route = matchedRoute;
  context.params = matchedRoute.params;

  // If the route is protected, check for authentication
  const authenticated = isAuthenticated(context);
  console.log("authenticated: " + authenticated);
  if (matchedRoute.protected && !authenticated) {
    return redirect("/login");
  }

  return next();
}

// Place holder for authentication check
function isAuthenticated(context) {
  console.log("--------");
  console.log("is Authenticated ");
  console.log(context.cookies.get("authToken"));
  console.log(context.cookie);
  // Replace with actual authentication check
  return context.cookies.get("authToken").value !== undefined;
}

// Main middleware sequence
export const onRequest = sequence(routeGuard);
