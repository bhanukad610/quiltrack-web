
export default {
  basePath: '/quiltrack-web',
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
