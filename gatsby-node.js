const { createRemoteFileNode } = require('gatsby-source-filesystem');

exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}

exports.createResolvers = ({
  createResolvers,
  cache,
  store,
  reporter,
  actions: {
    createNode,
  },
  createNodeId,
}) => {

  // a340d817-7e76-4dfd-a704-74b4a526d77c_테스트.txt
  const url = 'https://prismic-io.s3.amazonaws.com/karrot/a340d817-7e76-4dfd-a704-74b4a526d77c_%e1%84%90%e1%85%a6%e1%84%89%e1%85%b3%e1%84%90%e1%85%b3.txt';

  createResolvers({
    SiteSiteMetadata: {
      test: {
        type: 'File!',
        resolve() {
          return createRemoteFileNode({
            url,
            cache,
            createNode,
            createNodeId,
            store,
            reporter,
          });
        },
      },
    },
  });
}
