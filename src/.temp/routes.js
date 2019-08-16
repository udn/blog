export default [
  {
    path: "/about",
    component: () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/ruby/Desktop/books/resource/src/pages/About.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/ruby/Desktop/books/resource/src/pages/Index.vue"),
    meta: {
      data: [1,"0a6f7978"]
    }
  },
  {
    name: "404",
    path: "/404",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/ruby/Desktop/books/resource/node_modules/gridsome/app/pages/404.vue")
  },
  {
    path: "/:slug",
    component: () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/ruby/Desktop/books/resource/src/templates/Post.vue"),
    meta: {
      data: [1,"1907a424"]
    }
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/ruby/Desktop/books/resource/node_modules/gridsome/app/pages/404.vue")
  }
]

