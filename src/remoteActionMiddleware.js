

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
export default store => next => action => {

    console.log('Executing middleware over the action', action);
    return next(action);
};