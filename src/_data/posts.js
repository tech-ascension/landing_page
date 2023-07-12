const { request, gql } = require('graphql-request');
require('dotenv').config();
const url = 'https://ap-southeast-2.cdn.hygraph.com/content/cljebb55q03bt01ukhqbu3icd/master';
const query = gql`
  query Posts {
    posts {
      id
      title
      slug
      content {
        html
        text
      }
      tags
      coverImage {
        url
      }
      date
      author {
        name
      }
      featured
    }
  }
`;

module.exports = async () => {
  const data = await request(url, query);
  const posts = await data?.posts;
  return posts;
};
