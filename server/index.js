const express = require('express');
const cors = require('cors');
const posts = require('./routes/api/posts')
const path = require('path');

const PORT = process.env.PORT || 5000;

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Router api
app.use('/api/posts', posts);

//Serve static assessts if production
if (process.env.NODE_ENV === 'production') {
    // set statci folder
    app.use(express.static(path.join(__dirname, '../client/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client', 'build', 'index.html'));
    });
}


app.listen(PORT, () => console.log(`Server started on port ${PORT}`))