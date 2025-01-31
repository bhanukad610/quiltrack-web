
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/quiltrack-web',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "route": "/quiltrack-web"
  },
  {
    "renderMode": 0,
    "route": "/quiltrack-web/create"
  },
  {
    "renderMode": 0,
    "route": "/quiltrack-web/view/*"
  }
],
  assets: {
    'index.csr.html': {size: 509, hash: '5c2957b6a8bf1d410f6a637c2e474cac7af34a4b447a8053fe3e317ef7097ef4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1022, hash: 'b0c24ceb0b9f0825d05d8096271a38986076b8647692a3dbc609efc55dc4654c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
