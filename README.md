# voting-client [![Build status](https://travis-ci.org/jfcorugedo/voting-client.svg?branch=master)](https://travis-ci.org/jfcorugedo/voting-client) [![Coverage Status](https://coveralls.io/repos/github/jfcorugedo/voting-client/badge.svg?branch=master)](https://coveralls.io/github/jfcorugedo/voting-client?branch=master)
Demo project to play a bit with React and Redux. It's the UI application of an online voting system. Its server side part is in voting-server repository

It's based on this fantastic [redux tutorial](http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html) of [@teropa](https://twitter.com/teropa), with some minor changes, like using enzyme instead of jsdom.

##Features
* [react](https://github.com/facebook/react)
* [redux](https://github.com/rackt/redux)
* [react-router](https://github.com/rackt/react-router)
* [webpack](https://github.com/webpack/webpack)
* [babel](https://github.com/babel/babel)
* [socket.io](http://socket.io/)
* [ImmutableJS](https://facebook.github.io/immutable-js/)
* [mocha](https://mochajs.org/)
* [chai](http://chaijs.com/)
* [enzyme](https://github.com/airbnb/enzyme)
* [sinon](http://sinonjs.org/)
* [nyc](https://github.com/bcoe/nyc)
* [coveralls](https://coveralls.io/)
* [travis](https://travis-ci.org/)

##Context and purpose

It's a very simple application that allow users to vote and watch current results.

The voting screen is very simple. While voting is ongoing, it will always display two buttons, one for each of the entries being voted on. When the vote is over, it will display the winner:

![Image of the UI](http://teropa.info/images/voting_shots.png)

The voting system is quite simple. Just choose two entries from the list and let people choose their favourites. The looser will be discarted, so after some rounds only one entry (the winner) will remain on the list:

![Image of voting system](http://teropa.info/images/vote_logic.png)

The UI will have two main views, the voting one and the result one:

![Image of two different views](http://teropa.info/images/vote_system.png)
