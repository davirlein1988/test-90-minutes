import Link from "next/link";
export default () => {
  const links = [{ label: "Home", href: "/" }]
      .filter((linkConfig) => linkConfig)
      .map(({ label, href }) => {
        return (
          <li key={href} className="nav-item">
            <Link href={href}>
              <a className="nav-link">{label}</a>
            </Link>
          </li>
        );
      }),
    home =
      typeof window !== "undefined" &&
      window.location.pathname !== "/" &&
      "Back";
  return (
    <nav className="navbar navbar-default navbar-dark bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-4 justify-content-center">
            <Link href="/">
              <a className="navbar-brand">{home}</a>
            </Link>
          </div>
          <div className="col-8 justify-content-center">
            <div className="">
              <ul className="nav d-flex align-items-right">{links}</ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
