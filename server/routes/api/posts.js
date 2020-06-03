const express = require('express')
const mongodb = require('mongodb');

// Use your connection string inplace of MONGO_URI
const URI = <MONGO_URI>;

const router = express.Router();

// Get Post
router.get('/', async (req, res) => {
    // res.send('Hello')
    const posts = await loadPostsCollection();
    const total = await posts.find({}).count();
    console.log(`There are ${total} documents`)
    res.send(await posts.find({}).toArray());
})

// Get Post by Id
router.get('/:id', async (req, res) => {
    // res.send('Hello')
    const posts = await loadPostsCollection();
    res.send(await posts.findOne({ _id: mongodb.ObjectID(req.params.id) }));
})


// Add Post
router.post('/', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.insertOne({
        title: req.body.title,
        text: req.body.text,
        createdAt: new Date()
    });
    res.status(201).send('Created');
})

// Delete Post
router.delete('/:id', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.deleteOne({ _id: mongodb.ObjectID(req.params.id) });
    res.status(200).send('Deleted');
})

// Update Post 
router.put('/:id', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.updateOne({ _id: mongodb.ObjectID(req.params.id) }, {
        $set: {
            title: req.body.title,
            text: req.body.text,
            createdAt: new Date()
        }
    });
    res.status(200).send('Updated');
})


// Connection to databse 

async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect(URI, {
        useNewUrlParser: true, useUnifiedTopology: true
    });
    return client.db('DemoDB').collection('posts');
}

module.exports = router;
