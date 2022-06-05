import { Link } from "react-router-dom";

export const Navbar = () => {
  const links = [
    { to: "/", title: "Home" },
    { to: "/products", title: "Products" },
  ];
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "teal",
          color: "#fff",
        }}
      >
        <h1>Logo</h1>
        {links.map((el) => {
          return (
            <Link
              key={el.to}
              style={{
                padding: "10px",
                display: "flex",
                justifyContent: "center",
                color: "#fff",
                textDecoration: "none",
              }}
              to={el.to}
            >
              {el.title}
            </Link>
          );
        })}
      </div>
    </>
  );
};
