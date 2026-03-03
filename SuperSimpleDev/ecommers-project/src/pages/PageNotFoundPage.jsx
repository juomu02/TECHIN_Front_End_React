import Header from "../components/Header";
import "./PageNotFoundPage.css";

function PageNotFoundPage() {
  return (
    <>
      <link
        rel="icon"
        type="image/svg+xml"
        href="./public/rip-favicon.png"
      />
      <title>Page Not Found</title>
      <Header />

      <div className="page-not-found-message">Page was not found. Error 404</div>
    </>
  );
}

export default PageNotFoundPage;
