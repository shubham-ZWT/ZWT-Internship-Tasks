import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();

  const pathnames = location.pathname
    .split("/")
    .filter(Boolean);

  return (
    <nav style={{ marginBottom: "1rem" }}>
      <Link to="/">Home</Link>

      {pathnames.map((segment, index) => {
        const path = "/" + pathnames.slice(0, index + 1).join("/");
        const isLast = index === pathnames.length - 1;

        return (
          <span key={path}>
            {" / "}
            {isLast ? (
              <span style={{ fontWeight: "bold" }}>
                {decodeURIComponent(segment)}
              </span>
            ) : (
              <Link to={path}>{segment}</Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
