var page = {

  init: function () {
    page.initStyling();
    page.initEvents();
    page.getIronYardPosts();
  },
  initStyling: function () {
    console.log('init styling');

  },
  initEvents: function () {
    console.log('init events');
  },


  config: {
    baseUrl: 'https://public-api.wordpress.com/rest'
  },


  getIronYardPosts: function () {
    $.ajax({
      url: page.config.baseUrl + '/v1.1/read/tags/the-iron-yard/posts?pretty=true&number=5',
      type: 'GET',
      dataType: 'JSONP', // type of data that were expecting to get
      success: function (data) {
        console.log(data);
        data.posts.forEach(function(item, idx, arr) {
          $('.container').append( '<div class="post-box">' +
          '<img class="auth-image" src="' +
          item.author.avatar_URL +
          '">' +
          '<a class="site-name" href="' +
          item.site_URL +
          '">' +
          '<p>' +
          item.site_name +
          '</p>' +
          '</a>' + '<img class="post-image" src="' +
          item.featured_image +
          '">' +
          '<a href="' +
          item.URL +
          '">' +
          '<h2>' +
          item.title +
          '</h2>' +
          '</a>' +
          '<p>' +
          item.excerpt +
          '</p>' +
          '</div>');
        });

      },
      error: function (error) {
        console.log(error);
      }
    });
  }
}


page.init();
