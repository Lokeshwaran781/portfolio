
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/portfolio/about",
    "route": "/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/about"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/certification"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/education"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/resume"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/skills"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/experience"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/awards"
  },
  {
    "renderMode": 2,
    "redirectTo": "/portfolio/about",
    "route": "/portfolio/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 18650, hash: '584e8317baa6c470089d634d1939e085b4096f368018a594ef5ae0ba8b0d4451', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 19163, hash: '02d7cb3430914ed356519e55f3ec21fb808a0a288d4b6de621a1882c6af8d851', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 37325, hash: '3e9c001b328284f47bff9b2a6f30aae53e9aaebd750ea3732853598ab6a5dc08', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'education/index.html': {size: 37957, hash: '47b443dd79b848dfa2b3d06bff96413cc5d011685cda9d2c89768faf465e88fe', text: () => import('./assets-chunks/education_index_html.mjs').then(m => m.default)},
    'certification/index.html': {size: 62087, hash: 'e4c4e4dc9fb6beaa13b32f7d6737c0df548c1e0d2999f9ebcf0f7657a34ae384', text: () => import('./assets-chunks/certification_index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 42967, hash: '9b9ff0f4058fb6a4e83806ed4f5f171eb1b59081fd3490d389fde79526983493', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'awards/index.html': {size: 38129, hash: 'c2497e7d45e9d015f058dd8a7ced1d88b2942120acdc38c09ad319d26b2b0e36', text: () => import('./assets-chunks/awards_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 91681, hash: '447bc488f1e413403d15ee9ac9b05e6a1e840d105b2f5033a42e90d8bb2ac404', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'resume/index.html': {size: 38948, hash: '2cee00c71fd4c53503a459bf7e8d7dd4cf13fba01313675cf68b70fec1aedcb4', text: () => import('./assets-chunks/resume_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
