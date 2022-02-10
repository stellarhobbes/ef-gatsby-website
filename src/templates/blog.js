import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import ContentfulRichTech from "../components/contentful-rich-text";
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
      metaDescription
      metaImageUrl
      metaWebsiteUrl
    }
  }
`;

const Blog = (props) => {
  if (typeof window !== "undefined") {
    if (window.fbq != null) {
      window.fbq("track", "PageView");
    }
  }
  return (
    <body className="mt-28">
      <Helmet>
        <title>
          {props.data.contentfulBlogPost.title + "- L'entrepreneuriat Français"}
        </title>
        <meta name="title" content={props.data.contentfulBlogPost.title}></meta>
        <meta
          name="description"
          content={props.data.contentfulBlogPost.metaDescription}
        />
        {/* Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={props.data.contentfulBlogPost.metaWebsiteUrl} />
        <meta property="og:title" content={props.data.contentfulBlogPost.title} />
        <meta property="og:description" content={props.data.contentfulBlogPost.metaDescription} />
        <meta property="og:image" content={props.data.contentfulBlogPost.metaImageUrl} />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={props.data.contentfulBlogPost.metaWebsiteUrl} />
        <meta property="twitter:title" content={props.data.contentfulBlogPost.title} />
        <meta property="twitter:description" content={props.data.contentfulBlogPost.metaDescription} />
        <meta property="twitter:image" content={props.data.contentfulBlogPost.metaImageUrl} />
      </Helmet>
      <Navbar />
      <div className="relative overflow-hidden bg-white py-16">
        <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full"></div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-prose text-lg">
            <p
              id="date"
              className="text-ef-red block text-center text-base font-semibold uppercase tracking-wide"
            >
              {props.data.contentfulBlogPost.publishedDate}
            </p>
            <h1 className="text-ef-blue mt-2 block text-center text-3xl font-extrabold leading-8 tracking-tight sm:text-5xl">
              {props.data.contentfulBlogPost.title}
            </h1>
            <img
              className="m-auto mt-10 mb-6"
              src={props.data.contentfulBlogPost.image.file.url}
              alt=""
            />
            <div className="text-ef-blue mx-auto mx-auto mt-16 max-w-prose text-2xl font-bold leading-loose">
              <h2>{props.data.contentfulBlogPost.headline}</h2>
            </div>
          </div>

          <div className="mx-auto mx-auto mt-16 max-w-prose text-lg text-gray-700">
            <ContentfulRichTech
              richText={props.data.contentfulBlogPost.richArticle}
            />
          </div>
        </div>
      </div>
      <PreFooter
        subtitle="Il est temps de changer de vie"
        title="Entreprenez et rejoignez l'excellence à la française"
        buttonTitle="Parlez à un coach"
        link="/contact"
      />
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
