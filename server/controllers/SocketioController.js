var clientsList = {},
	messages = require('./MessagesController.js'),
	auth = require('../config/auth.js'),
	hat = require('hat');

	function isAuthorised (socket, request) {

		var authorised = false;

		if(clientsList[request.from]) {

			//FIND THE AUTH-TOKEN IN ALL USER CONNECTIONS
			var elementPos = clientsList[request.from].map(function(x) {return x.authToken; }).indexOf(request.authToken),
				objectFound = clientsList[request.from][elementPos];

			//CHECK IF THE AUTH-TOKEN IS GIVEN TO THE REQUESTER'S SOCKET
			if(objectFound) {

				if(objectFound.socket == socket) {

					authorised = objectFound;
				}
			}

		}

		return authorised;
	}

module.exports = {

	askForIdentification: function (socket) {

		socket.emit('who are you');
	},
	addUserConnection: function (socket, incoming) {

		var authToken = hat();

		//MULTIPLE TOKENS PER USER AVAILABLE
		if (!clientsList[incoming.userId]) {

			clientsList[incoming.userId] = [{
	        	socket: socket,
	        	authToken: authToken 
	        }];
		}
			else {

				clientsList[incoming.userId].push({
					socket: socket,
		        	authToken: authToken	
				});
			}
        
        socket.emit('registered', {
        	authToken: authToken
        });
	},
	deleteUserConnection : function (socket) {

		for (var client in clientsList) {

			for (var i = 0; i < client.length; i++) {
				
				//client[i] = nth connection of each client
				
				if (client[i].socket == socket) {

					client.splice(i, 1);

					if (client.length <= 0) {

						delete clientsList[client];
					}
				}
			};
		}
	},
	sendMessage: function (socket, message) {

			if(isAuthorised(socket, message)) {

				//IF THE RECIPIENT HAS CONNECTED
				if (clientsList[message.to]) {
					
					//SEND MESSAGE TO ALL CONNECTIONS OF THE CLIENT
					clientsList[message.to].forEach(function (clientConnection) {

							clientConnection.socket.emit('new message', {

								from: message.from,
								content: message.content,
								to: message.to,
								date: new Date()
							});
						}
					);
				}

				messages.updateDiscussion(message);
			}
	},
	getMessages: function (socket, request) {

			if(isAuthorised(socket, request)) {

				messages.getMessages(request)
					.then(function (data) {

						socket.emit('messages chunk', data);

					});

			}
				else {

					socket.emit('messages chunk', {

						messages: [],
						err: 'NOT AUTHORISED!'
					});
				}
	},
	seeMessage: function (socket, message) {

			var to = message.to;

			//IF DEVICE OF MESSAGE.TO (RECIPIENT) IS MARKING IT AS SEEN
			message.to = message.from;
			message.from = to;

			if(isAuthorised(socket, message)) {

				delete message.authToken;

				messages.markMessageAsSeen(message)
					.then(function (data) {

						socket.emit('see private message done', data);

					});

			}
	},
	editMessage: function(socket, message) {

			if(isAuthorised(socket, message)) {

				delete message.authToken;

				messages.markMessageAsSeen(message)
					.then(function (data) {
							
						socket.emit('edit private message done', data);

					});

			}
	}
}