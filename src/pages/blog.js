import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import Banner from "../components/banner";

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "DD MMMM YYYY")
          }
        }
      }
    }
  `);

  return (
    <body>
      <Banner />
      <h1 className="text-indigo-600">Blog</h1>
      <ol>
        {data.allContentfulBlogPost.edges.map((edge) => {
          return (
            <li>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          );
        })}
      </ol>
    </body>
  );
};

export default BlogPage;
