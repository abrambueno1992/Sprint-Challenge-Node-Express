
const express = require('express');

const dbAC = require('../data/helpers/actionModel');
// const dbMA = require('../data/helpers/mappers');
const dbPM = require('../data/helpers/projectModel');

const router = express.Router();

router.get('/actions', (req, res) => {
    dbAC
        .get()
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });

});


router.post('/actions', (req, res, next) => {
    const userInformation = req.body;
    dbAC
        .insert(userInformation)
        .then(response => {
            res.status(201).json(response);
        })
        .catch(err => {
            console.log(err);

            next(err);
        });
});

router.delete('/actions', function (req, res) {
    const update = req.body;
    const id = update.id;
    let user;
    dbAC
        .remove(id)
        .then(founduser => {
            console.log('foundUser: ', founduser)
            if (founduser > 0) {
                user = { ...founduser[0] };

                dbAC.remove(id).then(response => {
                    res.status(200).json(user);
                });
            } else {
                res.status(404).json({message: "The users with that id doesn't exist, can't delete as the id doesn't exist"})
            }

        })
        .catch(err => {
            res.status(500).json({ erroor: err });
        });
});


router.put('/actions', function (req, res) {


    const update = req.body;
    const id = update.id;
    dbAC
        .update(id, update)

        .then(posts => {
      
            if (posts === null) {
                res.status(404).json({message: "The project with the specified ID does not exist." });
            } 
   
             else {
                res.status(200).json(posts);
    
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
});


router.get('/projects', (req, res) => {
    dbPM
        .get()
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });

});

router.get('/projects/:id', (req, res) => {
    const id = req.params.id;

    dbPM
        .getProjectActions(id)
        .then(users => {
            if (users.length === 0) {
                res.status(404).json({ message: 'project actions not found' });
            } else {
                res.json(users[0]);
            }
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
});

router.post('/projects', (req, res, next) => {
    const userInformation = req.body;
    dbPM
        .insert(userInformation)
        .then(response => {
            res.status(201).json(response);
        })
        .catch(err => {
            console.log(err);

            next(err);
        });
});

router.delete('/projects', function (req, res) {
    const update = req.body;
    const id = update.id;
    let user;
    dbPM
        .remove(id)
        .then(founduser => {
            if (founduser > 0) {
                user = { ...founduser[0] };

                dbPM.remove(id).then(response => {
                    res.status(200).json(user);
                });
            } else {
                res.status(404).json({message: "The project with that id doesn't exist, can't delete as the id doesn't exist"})
            }

        })
        .catch(err => {
            res.status(500).json({ erroor: err });
        });
});


router.put('/projects/:id', function (req, res) {

    const id = req.params.id;

    const update = req.body;
    console.log('id and updateBody: ', id, update)
    // const id = req.params.id;
    dbPM
        .update(id, update)

        .then(posts => {
           
            if (posts === null) {
                res.status(404).json({message: "The project with the specified ID does not exist." });
            } 
   
             else {
                res.status(200).json(posts);
    
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
});


module.exports = router;