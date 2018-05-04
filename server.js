const express = require('express');
const helmet = require('helmet');
var cors = require('cors')

const routes = require('./Routes/routes');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api', routes);
// server.use('/api/tags', userRoutes);
// server.use('/api/posts', userRoutes);

server.get('/', (req,res) => {
    res.json({api: 'This api server is running, and ready for requests'});
});

const port = 7000;
server.listen(port, () => console.log(`\n== API Running on port ${port} ==\n`));