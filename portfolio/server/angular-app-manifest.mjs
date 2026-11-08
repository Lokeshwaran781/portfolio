
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/about",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/certification"
  },
  {
    "renderMode": 2,
    "route": "/education"
  },
  {
    "renderMode": 2,
    "route": "/resume"
  },
  {
    "renderMode": 2,
    "route": "/skills"
  },
  {
    "renderMode": 2,
    "route": "/experience"
  },
  {
    "renderMode": 2,
    "redirectTo": "/about",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 18640, hash: '417860e5a714f5263f8fb9882c370aa245e6bbe5eec57d0deb97fd5ae036b51e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 19153, hash: 'da71c8a8bc99f26d8901dbb22441b4b0abb1138c87c5effd44cf3816e50a28ac', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 37325, hash: 'b6e7ca433315cabbd79c44cfe4ec5a6d91af90c147ec6122f68d103f8878560f', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'certification/index.html': {size: 52509, hash: 'e1a290aa5512ecaedd47c10af186bd6d863150357c2f451688d44c175779a365', text: () => import('./assets-chunks/certification_index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 42323, hash: '414c915e6c1bd32f3667040dfd1823224b6c1294c4e1d5a14472fb4710dbd096', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 71168, hash: 'c33c328fe3008941e70346f73690f5a82b5d0eaa66452c4da5c5fad809316b91', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'education/index.html': {size: 39057, hash: '4223c47cdaa2754eb53a5c9cd6cedbf87b12bb120efe5323362b367ab2118205', text: () => import('./assets-chunks/education_index_html.mjs').then(m => m.default)},
    'resume/index.html': {size: 38939, hash: '2b2550e8ec4bdf67561cadb006d86e36680705183bc7a158cdd1fda19c24559e', text: () => import('./assets-chunks/resume_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
