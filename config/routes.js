exports.default = {
  routes: function (api) {
    return {

      get: [
        { path: '/users', action: 'usersList' },
        { path: '/comments/:userName/:title', action: 'commentsView' },
        { path: '/post/:userName/:title', action: 'postView' },
        { path: '/posts/:userName/', action: 'postsList' },
        { path: "/getuser" , action: 'FindUser'} 
      ],

      post: [
        { path: '/authenticate', action: 'authenticate' },
        { path: '/user', action: 'userAdd' },
        { path: '/comment/:userName/:title', action: 'commentAdd' },
        { path: '/post/:userName/', action: 'postAdd' },
        { path: '/addusers', action: 'CreateUser' },
        { path: '/updateuser' , action:'UpdateUser'},
        { path: '/deleteuser' , action:'deleteUser'},
      ],

      put: [
        { path: '/post/:userName/:title', action: 'postEdit' }
      ],

      delete: [
        { path: '/user/:userName', action: 'userDelete' },
        { path: '/comment/:userName/:title/:commentId', action: 'commentDelete' },
        { path: '/post/:userName/:title', action: 'postDelete' }
      ]

    }
  }
}
