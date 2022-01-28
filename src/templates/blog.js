import React from "react";
import { graphql } from "gatsby";

import ContentfulRichTech from "../components/contentful-rich-text";
import Head from "../components/head";
import Navbar from "../components/navbar";
import FooterCentral from "../components/footer-central";
import PreFooter from "../components/prefooter";

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "DD/MM/YYYY")
      headline
      image {
        file {
          url
        }
      }
      richArticle {
        raw
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
              className="block text-center text-base font-semibold uppercase tracking-wide text-ef-red"
            >
              {props.data.contentfulBlogPost.publishedDate}
            </p>
            <h1 className="mt-2 block text-center text-3xl font-extrabold leading-8 tracking-tight text-ef-blue sm:text-5xl">
              {props.data.contentfulBlogPost.title}
            </h1>
            <img
              className="m-auto mt-10 mb-6"
              src={props.data.contentfulBlogPost.image.file.url}
              alt=""
            />
            <div className="text-ef-blue mx-auto mx-auto mt-16 max-w-prose leading-loose text-2xl font-bold">
              <h2>{props.data.contentfulBlogPost.headline}</h2>
            </div>
          </div>

          <div className="mx-auto mx-auto mt-16 max-w-prose text-lg text-gray-700">
          <ContentfulRichTech richText={props.data.contentfulBlogPost.richArticle} />
          </div>
        </div>
      </div>
      <PreFooter subtitle="Il est temps de changer de vie"
        title="Entreprenez et rejoignez l'excellence à la française"
        buttonTitle="Parlez à un coach"
        link="/contact"/>
      <FooterCentral />
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
