// Creating global array that holds all quotes
var data = [
  {
    id: 1,
    title: 'Wisdom',
    body: 'By three methods we may learn wisdom: First, by reflection, which is noblest; Second, by imitation, which is easiest; and third by experience, which is the bitterest.',
    author: 'Confucius'
  },
  {
    id: 2,
    title: 'Friendship',
    body: "We're born alone, we live alone, we die alone. Only through our love and friendship can we create the illusion for the moment that we're not alone.",
    author: 'Orson Welles'
  },
  {
    id: 3,
    title: 'Life',
    body: 'We are all in the gutter, but some of us are looking at the stars.',
    author: 'Oscar Wilde'
  },
  {
    id: 4,
    title: 'Time',
    body: 'Time you enjoy wasting, was not wasted.',
    author: 'John Lennon'
  },
  {
    id: 5,
    title: 'Success',
    body: "I'm a success today because I had a friend who believed in me and I didn't have the heart to let him down.",
    author: 'Abraham Lincoln'
  }
];

var $nav = $('#nav-container')
var $intro = $('#intro')
var $posts = $('#post-container')

function initPosts() {
  for (var i = 0; i < data.length; i++) {
    // Create elements
    var postId = 'post-' + data[i].id,
      $post = $('<section class="post"></section>'),
      $title = $('<h2 class="title"></h2>'),
      $body = $('<p class="quote"></p>'),
      $body = $('<blockquote></blockquote>'),
      $author = $('<span class="author"></span>'),
      $navItem = $('<li></li>')

    // Add post data
    $title.text(data[i].title)
    $body.text(data[i].body)
    $author.text(data[i].author)

    // Add nav item data
    $navItem.attr('id', data[i].id)
    $navItem.text(data[i].title)

    // Combine post elements
    $post.attr('id', postId)
    $post.append($title)
    $post.append($body)
    $post.append($author)

    // Add post and nav elements to page
    $posts.append($post)
    $nav.append($navItem)

    // Wire up nav item click event
    $navItem.on('click', function() {
      var id = $(this).attr('id')
      $posts.children().hide()
      $posts.find('#post-' + id).fadeIn()
    })

    // Hide all posts and show the intro
    $posts.children('.post').hide()
    $intro.fadeIn(1000)
  }
}

initPosts()
