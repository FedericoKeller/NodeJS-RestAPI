exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [{ 
      _id: "1",
      title: "First Post", 
      content: "This is the first post!",
      imageUrl:  "images/boat.jpg",
      creator: {
        name: 'Federico',
      },
      createdAt: new Date()
    }],
  });
};

exports.createPosts = (req, res, next) => {
    console.log(req.body)
  const title = req.body.title;
  const content = req.body.content;

  //Create post in db
  res.status(201).json({
    message: "Post created succesfully!",
    post: { id: new Date().toISOString(), title: title, content: content },
  });
};
