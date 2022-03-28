import * as React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";

// markup
const NotFoundPage = () => {
  return (
    <main>
      <Helmet>
        <html lang="fr" amp />
        <meta charSet="utf-8" />
        <title>Page not found</title>
      </Helmet>
      <title>Not found</title>
      <h1>Page not found</h1>
      <p>
        <Link to="/">Go home</Link>.
      </p>
    </main>
  );
};

export default NotFoundPage;
