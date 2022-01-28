import React from "react";
import { graphql } from "gatsby";

import Head from "../components/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer"

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      headline
      article {
        article
      }
      image {
        file {
          url
        }
      }
    }
  }
`;

const Blog = (props) => {
  return (
    <body className="mt-28">
      <Head title={props.data.contentfulBlogPost.title} />
      <Navbar />
      <div className="relative overflow-hidden bg-white py-16">
        <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full"></div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-prose text-lg">
            <p
              id="date"
              className="block text-center text-base font-semibold uppercase tracking-wide text-indigo-600"
            >
              {props.data.contentfulBlogPost.publishedDate}
            </p>
            <h1 className="mt-2 block text-center text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              {props.data.contentfulBlogPost.title}
            </h1>
            <img
              className="m-auto mt-10 mb-6"
              src={props.data.contentfulBlogPost.image.file.url}
              alt=""
            />
            <div className="mx-auto mx-auto mt-16 max-w-prose text-xl font-bold text-ef-blue">
              <h2>{props.data.contentfulBlogPost.headline}</h2>
            </div>
          </div>

          <div className="mx-auto mx-auto mt-16 max-w-prose text-lg text-gray-700">
            <p>{props.data.contentfulBlogPost.article.article}</p>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Blog;

// const Blog = (props) => {

//     return (
//         <div>
//           <Head title={props.data.contentfulBlogPost.title}/>
//           <Link to="/"><button>Go back to Homepage</button></Link>
//           <h1 className="text-red-500 text-3xl font-semibold">{props.data.contentfulBlogPost.title}</h1>
//           <p>{props.data.contentfulBlogPost.publishedDate}</p>
//           <p>{props.data.contentfulBlogPost.article.article}</p>
//         </div>
//     )
// }

// export default Blog
