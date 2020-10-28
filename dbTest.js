var db = require('./models')
const article = require('./models/article')


// db.comment.create({
//     name: 'Allen Paul',
//     content: 'Terrible!',
//     articleId: 1
// }).then(comment=>{
//     console.log("here's the comment:", comment.get())
// })



db.article.findOne({
  where: { id: 1 },
  include: [db.comment]
}).then(function(article) {
  // by using eager loading, the article model should have a comments key
  console.log(article.comments)
})