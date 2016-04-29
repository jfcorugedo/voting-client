# voting-client
Demo project to play a bit with React and Redux. It's the UI application of an online voting system. Its server side part is in voting-server repository

It's based on this fantastic [redux tutorial](http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html) of [@teropa](https://twitter.com/teropa). 

It's a very simple application that allow users to vote and watch current results.

The voting screen is very simple. While voting is ongoing, it will always display two buttons, one for each of the entries being voted on. When the vote is over, it will display the winner:

![Image of the UI](http://teropa.info/images/voting_shots.png)

The voting system is quite simple. Just choose two entries from the list and let people choose their favourites. The looser will be discarted, so after some rounds only one entry (the winner) will remain on the list:

![Image of voting system](http://teropa.info/images/vote_logic.png)

The UI will have two main views, the voting one and the result one:

![Image of two different views](http://teropa.info/images/vote_system.png)
