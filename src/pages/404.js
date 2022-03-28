import * as React from "react";
import { Link } from "gatsby";

// markup
const NotFoundPage = () => {
  return (
    <main>
      <Helmet>
        <html lang="fr" amp />
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://www.lentrepreneuriatfrancais.fr/404" />
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
