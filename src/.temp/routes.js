export default [
  {
    path: "/about",
    component: () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/ruby/Desktop/books/resource/src/pages/About.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/ruby/Desktop/books/resource/src/pages/Index.vue")
  },
  {
    name: "404",
    path: "/404",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/ruby/Desktop/books/resource/node_modules/gridsome/app/pages/404.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/ruby/Desktop/books/resource/node_modules/gridsome/app/pages/404.vue")
  }
]

