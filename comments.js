// Create web server
// Purpose: Handle comment related requests

var express = require('express');
var router = express.Router();
var Comment = require('../models/comment');
var Post = require('../models/post');
var User = require('../models/user');
var util = require('../util');

// Create new comment
router.post('/', util.isLoggedin, function(req, res, next) {
    var newComment = new Comment({
        content: req.body.content,S