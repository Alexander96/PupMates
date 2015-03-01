var mongoose = require('mongoose'),
    fs = require('fs'),

    userAchievmentsSchema = mongoose.Schema({
            
            userId: {type: mongoose.Schema.ObjectId, require: '{PATH} is required', unique: true},
            achievments: [{
                achievmentId: {type: mongoose.Schema.ObjectId, require: '{PATH} is required', unique: true},
                dogId: {type: mongoose.Schema.ObjectId, require: '{PATH} is required'},
                createdAt: Date
            }]
    }),

    UserAchievments = mongoose.model('UserAchievments', userAchievmentsSchema);