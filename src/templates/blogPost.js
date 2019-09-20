import React from 'react';
import { graphql } from 'gatsby';
import blogTemplateStyles from './blogPost.module.scss';

import Layout from '../components/Layout';
import Head from '../components/Head';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`;

const Blog = props => {
  const options = {
    renderNode: {
      'embedded-asset-block': node => {
        const alt = node.data.target.fields.title['en-US'];
        const url = node.data.target.fields.file['en-US'].url;
        return <img alt={alt} src={url} />;
      },
    },
  };

  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p className={blogTemplateStyles.date}>
        {props.data.contentfulBlogPost.publishedDate}
      </p>
      <div className={blogTemplateStyles.content}>
        {documentToReactComponents(
          props.data.contentfulBlogPost.body.json,
          options
        )}
      </div>
    </Layout>
  );
};

export default Blog;
