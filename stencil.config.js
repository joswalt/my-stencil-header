exports.config = {
  namespace: 'my-stencil-header',
  outputTargets: [
    {
      type: 'dist',
    },
    {
      type: 'www',
      serviceWorker: false,
    },
  ],
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**',
};
