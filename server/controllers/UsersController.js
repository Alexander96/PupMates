﻿var User = require('mongoose').model('User'),
    encryption = require('../utilities/encryption.js'),
    shortId = require('shortid');

module.exports = {
    createUser: function(req, res, next){
        var newUserData = req.body;
        newUserData.salt = encryption.generateSalt();
        newUserData.hashPass = encryption.generateHashedPassword(newUserData.salt, newUserData.password);
        User.create(newUserData, function(err, user){
            if(err){
                console.log('Fell to register new user: ' + err);
                return;
            }
            req.logIn(user, function(err){
                if(err){
                    res.status(400);
                    return res.send({reason: err.toString()});
                }
                res.send(user);
            });
        });
    },
    updateUser: function(req, res, next){
        if(req.body._id == req.user._id || req.user.roles.indexOf('admin') > -1){
            var updatedUserData = req.body;
            if(updatedUserData.password && updatedUserData.password.length > 0){
                updatedUserData.salt = encryption.generateSalt();
                updatedUserData.hashPass = encryption.generateHashedPassword(updatedUserData.salt, updatedUserData.password);
            }
            User.update({_id: req.body._id}, updatedUserData, function(err){
                res.end();
            });
        }
        else{
            res.send({reason: 'You do not have permissions!'});
        }
    },
    getAllUsers: function(req, res){
        User.find({})
        .select("-albums")
        .select("-pets")
        .select("-salt")
        .select("-hashPass")
        .select("-roles")
        .select("_id")
        .exec(function(err, collection){
            if(err){
                console.log('Users could not be found: ' +  err);
                return;
            }
            res.send(collection);
        });
    },     //By Username <-- easier when route is /profile/:userName, such roots look better to users
    getUser: function(req, res){

        var sendAllInfo = false,
            collection,
            userIP = req.headers['x-forwarded-for'];

        User.find({username: req.params.id})
            .exec(function (err, collection){

                // Username and Id are both unique, therefore I use collection[0], only 1 possible
                collection = collection[0];

                if(err){
                    console.log('User could not be found: ' +  err);
                    return;
                }
                    else {

                        if(collection.seenFrom.indexOf(userIP) <= -1) {

                            collection.seenFrom.push(userIP);

                            User.update({username: req.params.id}, collection, function(err){
                                
                                if(err) {
                                    console.error(err);
                                }
                            });

                        }
                    }
   
                for (var i = 0; i < collection.friends.length; i++) {
                    
                    if (collection.friends[i].id == req.user._id) {

                        sendAllInfo = true;
                        console.error('wtf');
                    }
                };

                if (sendAllInfo) {
                    res.send(collection);
                }
                    else {

                        //TO DO: implement public/private profile
                        
                        collection.album = [];
                        collection.lastName = ''; // <-- testing purpose

                        res.send(collection);
                    }
        });
    },
    getProfPhoto: function(req, res){
        // !! за сега е с username за тестващи цели
        // !! иначе по id на user-a ще търси
        User.findOne({_id: req.params.id})
        .select("profPhoto")
        .exec(function(err, user){
            if(err){
                console.log("couldnt get photo: " + err.toString())
                res.end();
            }
            res.contentType(user.profPhoto.contentType);
            res.send(user.profPhoto.data);
        });
    },
    getAlbumPhoto: function(req, res){
        // to do
    },
    createDog: function(req, res){
        var dog = req.body;
        var userId = req.params.userId;
        var b64string = dog.profPhoto.data;
        var buf = new Buffer(b64string, 'base64');
        var profPhoto = {};
        profPhoto.data = buf;
        profPhoto.contentType = dog.profPhoto.contentType;
        profPhoto.description = dog.profPhoto.description;
        dog.profPhoto = profPhoto;
        dog.id = shortId.generate();

        User.findOne({_id: userId}).select("dogs").exec(function(err, user){
            if(err){
                console.log("smth went wrong: " + err);
                res.end();
            }
            else{
                user.dogs.push(dog);
                User.update({_id: userId}, user, function(err){
                    if(err){
                        res.end("errr");
                    }
                    console.log("dog added");

                    //test to see the database
                    /*User.findOne({_id: userId}).exec(function(err, user2){
                        console.log("updated user");
                        console.log(user2.dogs[0]);
                    })*/
                    res.send({success: true});
                });
            }
        })
    },
    getDogPhoto: function(req, res){
        var dogId = req.params.id;
        var username = req.params.user;
        User.findOne({username: username}).select("dogs").exec(function(err, dogs){
            for(var i=0;i < dogs.length; i++){
                if(dogs[i].id == dogId){
                    res.contentType(dog.profPhoto.contentType);
                    res.send(dog.profPhoto.data);
                }
            }
        });
    },
    searchDynamically: function(req, res) {

        var searchString =  'Pesho Peshev' //req.params.searchContent,
            searchArray = searchString.split(' ');

        for (var i = 0; i < searchArray.length; i++) {
            
            searchArray[i] = searchArray[i].toLowerCase();
        };

        var lastWord = searchArray.pop();


        function checkIfContains() {

            var firstNameArray = this.firstName.split(' '),
                lastNameArray = this.lastName.split(' '),
                namesArray = [];

            for (var ln in lastNameArray) {

                namesArray.push(ln.toLowerCase());
            }

            for (var fn in firstNameArray) {

                namesArray.push(fn.toLowerCase());
            }

            namesArray.sort();

            for (var word in searchArray) {

                if (namesArray.indexOf(word) <= -1) {

                    return false;
                }
            }

            if (namesArray.join(' ').indexOf(lastWord) <= -1) {

                return false;
            }

            return true;
        }

        // User.find( { $where: checkIfContains } )
        //     .exec(function (err, collection) {

        //         if (err) {

        //             console.error(err);
        //         }

        //         console.log(collection);
        //     });
    }
}