// Create a web server that can respond to requests for /comments.json with a JSON-encoded version of the comments list and can serve the compiled JSX version of the comments as HTML to requests for /comments.html. Use the same code for server-side rendering of the comment box HTML from the previous exercise.
// Hint: You can use the res.end(JSON.stringify(comments)) method to serialize a JSON string. Remember to set the Content-Type header to application/json in your response.

var http = require('http');
var fs = require('fs');
var React = require('react');
var ReactDOMServer = require('react-dom/server');

var CommentBox = require('./comment-box');

var comments = [];
