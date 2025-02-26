const postControllers = require('./posts.controllers')
const { json } = require("sequelize");

const postNewPost = (req, res) => {
    const postObj = req.body

    postControllers.createPost(postObj)
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            err.status(400).json(err)
        })
} 

const getAllPosts = (req, res) => {
    postControllers.findAllPosts()
        .then(post => {
            res.status(200).json(post)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

const getPostById = (req, res) => {
    const id = req.params.id

    postControllers.findPostById(id)
        .then(data => {
            if(data){
                res.status(200).json(data)
            }else{
                res.status(404).json({message: "Prouct not found"})
            }
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

const patchPost = (req, res) => {
    const id = req.params.id
    const postObj = req.body 

    postControllers.updatePost(id, postObj)
        .then(data => {
            if(data[0] === 1){
                res.status(200).json({message: `Post with ID ${id} upadated successfully`})
            }else{
                res.status(404).json({message: 'Post not found'})
            }
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

const deletePost = (req, res) => { 
    const id = req.params.id

    postControllers.deletePost(id)
        .then(data => {
            if(data === 1){
                res.status(204).json()
            }else{
                res.status(404).json({message: "Post not found :("})
            }
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

module.exports = {
    postNewPost,
    getAllPosts,
    getPostById,
    patchPost,
    deletePost
}