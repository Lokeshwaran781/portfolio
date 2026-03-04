
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
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 18707, hash: 'da6aa0f82447240018d4d7c002d77a4dc675851c5a1432e6806228e8ef609125', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 19220, hash: '375a24a54c9e77216a5522ee7924378ebfe066ef0adf3345a496de0f8ec56445', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 37090, hash: '509621fd81b26c98841d361617a8e9f2e5c7ab1af629f721e6d1cdc62cdb30f3', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'certification/index.html': {size: 45638, hash: '24712e480c3ff47246c711dba1db98688f6731801d7e082a1de27c0b0bfa8c53', text: () => import('./assets-chunks/certification_index_html.mjs').then(m => m.default)},
    'education/index.html': {size: 38872, hash: '8878338ab5d86228e15aff55f6c1275a083bc29903255966a5be6941302a0608', text: () => import('./assets-chunks/education_index_html.mjs').then(m => m.default)},
    'resume/index.html': {size: 33418, hash: '6f7708534bf456d4842dcca8abe07af938cfe4d32baef40328a4352d95236cab', text: () => import('./assets-chunks/resume_index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 41118, hash: 'b66228c8f73fa7d8fd4dc916d848edcd9b9cf3639a9db9fed76112ece48b34b8', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 56836, hash: 'a490ece04a1001b57256523f82bc8353c15288e4c39f3f528f83adf4c76e2146', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
