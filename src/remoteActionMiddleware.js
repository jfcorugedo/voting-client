

// This function represents an interceptor that will be executed before the given action goes to the reducer and store
//
// This syntax is a shortcut of this:
// export default function(store) {
//   return function(next) {
//     return function(action) {
//       ...
//     };
//   };
// }
// It follows the principle of currying: https://en.wikipedia.org/wiki/Currying
// that is the technique of translating a function with several arguments into evaluating several functions of one
// argument each one
export default socket => store => next => action => {

    console.log('Executing middleware over the action', action);
    if(action.meta && action.meta.remote) {
        console.log('Sending action to the server', action);
        socket.emit('action', action);
    }
    return next(action);
};