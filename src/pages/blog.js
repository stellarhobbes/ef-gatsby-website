import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

import Navbar from "../components/navbar";
import PreFooter from "../components/prefooter";
import Footer from "../components/footer";

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
            publishedDate(formatString: "DD MMMM YYYY")
          }
        }
      }
    }
  `);

  return (
    <body className="pt-28">
      <Navbar />
      <div className="mt-40 text-center mx-auto">
      <Fade top>
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block font-title uppercase text-ef-blue xl:inline">
            Les articles du blog
          </span>
        </h1>
      </Fade>
      <p className="mt-3 px-10 max-w-md mx-auto text-base text-ef-blue sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
      </p>
      </div>
      <div className="bg-white pt-8 pb-20 px-4 sm:px-6 lg:pt-8 lg:pb-28 lg:px-8">
        <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
            {data.allContentfulBlogPost.edges.map((edge) => (
              <div key={edge.node.title}>
                <p className="text-sm text-gray-500">
                  <time dateTime={edge.node.publishedDate}>
                    {edge.node.publishedDate}
                  </time>
                </p>
                <Link to={`/blog/${edge.node.slug}`} className="mt-2 block">
                  <p className="text-xl font-semibold text-ef-blue">
                    {edge.node.title}
                  </p>
                  <p className="mt-3 text-base text-ef-blue">
                    {edge.node.headline}
                  </p>
                </Link>
                <div className="mt-3">
                  <Link
                    to={`/blog/${edge.node.slug}`}
                    className="inline-flex items-center justify-center px-5 py-3 text-base font-medium rounded-md bg-ef-blue text-white border-2 border-ef-blue mt-2 || hover:text-ef-blue hover:bg-white transition duration-500"
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
      <Footer />
    </body>
  );
};

export default BlogPage;
