export default [
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/ruby/Desktop/books/resource/src/pages/Index.vue"),
    meta: {
      data: true
    }
  },
  {
    path: "/about",
    component: () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/ruby/Desktop/books/resource/src/pages/About.vue")
  },
  {
    name: "404",
    path: "/404",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/ruby/Desktop/books/resource/node_modules/gridsome/app/pages/404.vue")
  },
  {
    path: "/author/:id",
    component: () => import(/* webpackChunkName: "page--src--templates--author-vue" */ "/Users/ruby/Desktop/books/resource/src/templates/Author.vue")
  },
  {
    path: "/:slug",
    component: () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/ruby/Desktop/books/resource/src/templates/Post.vue"),
    meta: {
      data: true
    }
  },
  {
    path: "/tag/:id",
    component: () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/Users/ruby/Desktop/books/resource/src/templates/Tag.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/ruby/Desktop/books/resource/node_modules/gridsome/app/pages/404.vue")
  }
]

