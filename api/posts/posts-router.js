// implement your posts router here
const express = require('express');
const router = express.Router();
const Posts = require('./posts-model');

router.get('/api/posts', async (req, res) => {
    // Posts.find()
    //     .then(postsData => {
    //         res.status(200).json(postsData);
    //     })
    //     .catch(err => {
    //         res.status(500).json({
    //             message: "The posts information could not be retrieved",
    //             error: err.message
    //         })
    //     })
    const posts = await Posts.find();
    if (!posts) {
        res.status(500).json({
            message: "The posts information could not be retrieved"
        })
    } else {
        res.status(200).json(posts);
    }
});

router.get('/api/posts/:id', (req, res) => {
    
});

router.post('/api/posts', (req, res) => {
    
});

router.put('/api/posts/:id', (req, res) => {
    
});

router.delete('/api/posts/:id', (req, res) => {
    
});

router.get('/api/posts/:id/comments', (req, res) => {
    
});

module.exports = router;