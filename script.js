// Passing a named function instead of an anonymous function.
 
function readyFn( jQuery ) {
    // Code to run when the document is ready.
    console.log('ready!');
}
 
$( document ).ready( readyFn );