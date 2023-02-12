const postServices = require('./posts.services')

const router = require('express').Router()

router.post('/posts', postServices.postNewPost)     //! POST

router.get('/posts', postServices.getAllPosts)      //! READ

router.get('/posts/:id', postServices.getPostById)  //! READ 

router.patch('/posts/:id', postServices.patchPost ) //! UPDATE

router.delete('/posts/:id', postServices.deletePost)//! DELETE 

module.exports = router 