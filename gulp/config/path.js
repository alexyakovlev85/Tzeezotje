const pathSrc = './src';
const pathDest = './dist';

const path = {
  root: pathDest,

  html: {
    src: `${pathSrc}/*.html`,
    watch: `${pathSrc}/*.html`,
    dest: pathDest,
  },

  scss: {
    src: `${pathSrc}/scss/*.{sass,scss}`,
    watch: `${pathSrc}/scss/**/*.{sass,scss}`,
    dest: `${pathDest}/css/`,
  },

  js: {
    src: `${pathSrc}/js/*.js`,
    watch: `${pathSrc}/js/**/*.js`,
    dest: `${pathDest}/js/`,
  },

  img: {
    src: `${pathSrc}/img/*.{png,jpg,jpeg,gif,svg}`,
    watch: `${pathSrc}/img/**/*.{png,jpg,jpeg,gif,svg}`,
    dest: `${pathDest}/img/`,
  },

  fonts: {
    src: `${pathSrc}/fonts/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}`,
    watch: `${pathSrc}/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}`,
    dest: `${pathDest}/fonts/`,
  },

  deploy: {
    src: `${pathDest}/**/*`,
  },
};

export { path };
