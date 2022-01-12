import React from "react";
import { graphql } from "gatsby";

import Head from "../components/head";
import Navbar from "../components/navbar";

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      article {
        article
      }
    }
  }
`;

const Blog = (props) => {
  return (
    <body className="mt-28">
      <Head title={props.data.contentfulBlogPost.title} />
      <Navbar />
      <div className="relative py-16 bg-white overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <p
              id="date"
              className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase"
            >
              {props.data.contentfulBlogPost.publishedDate}
            </p>
            <h1 className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {props.data.contentfulBlogPost.title}
            </h1>
            <p className="mt-8 text-xl text-gray-500 leading-8">
              Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem.
              At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at
              vitae feugiat egestas ac. Diam nulla orci at in viverra
              scelerisque eget. Eleifend egestas fringilla sapien.
            </p>
          </div>

          <div className="mt-16 text-lg max-w-prose mx-auto text-gray-500 mx-auto">
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
