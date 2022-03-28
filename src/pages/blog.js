import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";

import Navbar from "../components/navbar";
import PreFooter from "../components/prefooter";
import CentralFooter from "../components/footer-central";

import Fade from "react-reveal/Fade";

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            headline
            publishedDate(formatString: "DD/MM/YYYY")
            image {
              file {
                url
              }
            }
          }
        }
      }
    }
  `);
  if (typeof window !== "undefined") {
    if (window.fbq != null) {
      window.fbq("track", "PageView");
    }
  }
  return (
    <body className="pt-28">
      <Helmet>
        <html lang="fr" amp />
        <meta charSet="utf-8" />
        <link
          rel="canonical"
          href="https://www.lentrepreneuriatfrancais.fr/blog"
        />
        <title>Blog | L'Entrepreneuriat Français</title>
        <meta name="title" content="Blog | L'Entrepreneuriat Français" />
        <meta
          name="description"
          content="Des ressources gratuites pour vous aider à faire avancer votre projet. L’entrepreneuriat français vous accompagne pas à pas pour vous lancer."
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.lentrepreneuriatfrancais.fr/blog"
        />
        <meta property="og:title" content="Blog | L'Entrepreneuriat Français" />
        <meta
          property="og:description"
          content="Des ressources gratuites pour vous aider à faire avancer votre projet. L’entrepreneuriat français vous accompagne pas à pas pour vous lancer."
        />
        <meta
          property="og:image"
          content="https://images.ctfassets.net/e705sr8nkyoz/6aDSO7RC19760OR4yXpwP9/d256662ebfcd4e3e02d7ded33af68d53/ef-article-closing.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.lentrepreneuriatfrancais.fr/blog"
        />
        <meta
          property="twitter:title"
          content="Blog | L'Entrepreneuriat Français"
        />
        <meta
          property="twitter:description"
          content="Des ressources gratuites pour vous aider à faire avancer votre projet. L’entrepreneuriat français vous accompagne pas à pas pour vous lancer."
        />
        <meta
          property="twitter:image"
          content="https://images.ctfassets.net/e705sr8nkyoz/6aDSO7RC19760OR4yXpwP9/d256662ebfcd4e3e02d7ded33af68d53/ef-article-closing.png"
        />
      </Helmet>
      <Navbar />
      <div className="mx-auto mt-40 text-center">
        <Fade top>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="font-title text-ef-blue block uppercase xl:inline">
              Du contenu gratuit pour entreprendre
            </span>
          </h1>
        </Fade>
        <p className="text-ef-blue mx-auto mt-3 max-w-md px-10 text-base sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
          Vous trouverez dans ces articles des ressources gratuites pour vous
          aider à faire avancer votre projet. L’entrepreneuriat français vous
          accompagne pas à pas pour vous lancer.
        </p>
      </div>
      <div className="mb-20 bg-white px-4 pt-8 pb-20 sm:px-6 lg:px-8 lg:pt-8 lg:pb-28">
        <div className="relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div className="mt-6 grid gap-16 pt-10 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
            {data.allContentfulBlogPost.edges.map((edge) => (
              <div key={edge.node.title}>
                <Link to={`/blog/${edge.node.slug}`}>
                  <img className="mb-6" src={edge.node.image.file.url} alt="" />
                  <p className="text-ef-blue text-base">
                    <time dateTime={edge.node.publishedDate}>
                      {edge.node.publishedDate}
                    </time>
                  </p>
                </Link>
                <Link to={`/blog/${edge.node.slug}`} className="mt-2 block">
                  <p className="text-ef-blue text-2xl font-bold">
                    {edge.node.title}
                  </p>
                  <p className="text-ef-blue mt-3 text-base">
                    {edge.node.headline}
                  </p>
                </Link>
                <div className="mt-3">
                  <Link
                    to={`/blog/${edge.node.slug}`}
                    className="bg-ef-blue border-ef-blue || hover:text-ef-blue mt-2 inline-flex items-center justify-center rounded-md border-2 px-5 py-3 text-base font-medium text-white transition duration-500 hover:bg-white"
                  >
                    Lire l'article
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <PreFooter
        subtitle="Il est temps de changer de vie"
        title="Entreprenez et rejoignez l'excellence à la française"
        buttonTitle="Parlez à un coach"
        link=""
      />
      <CentralFooter />
    </body>
  );
};

export default BlogPage;
