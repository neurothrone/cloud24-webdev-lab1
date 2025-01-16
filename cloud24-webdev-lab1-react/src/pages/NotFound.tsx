import {Link} from "react-router";

function NotFound() {
  return (
    <main className="container-fluid py-4">
      <h1>Not Found</h1>
      <p>This is not the page you're looking for.</p>
      <Link to="/" className="nav-link">Go back to home</Link>
    </main>
  );
}

export default NotFound;