

// In index.html, you'll see that we've set up a basic document for you. We'll be testing against this document, but you should still write your code in index.js. We'll handle loading everything up for you.
// Define a function getFirstSelector(selector), which accepts a selector and returns the first element that matches.
function getFirstSelector(selector){
  return document.querySelector(selector)
}

// Define a function nestedTarget() that pulls a .target out of #nested (# is used for IDs in selectors — but you knew that because you read the docs, right? :) ). (Note that in index.html #nested and .target just happen to be divs. This method should work with arbitrary elements.)

function nestedTarget(){
  return document.querySelector("#nested .target")
}
// Define a function increaseRankBy(n) that increases the ranks in all of the .ranked-lists by n. (You might need to make use of parseInt()
function increaseRankBy(n){
  const list = document.querySelectorAll(".ranked-list li")
  for(var i = 0; i < list.length; i++){
    list[i].innerHTML = (parseInt(list[i].innerHTML)+n).toString()
  }
}
// Define a function deepestChild() that pulls out the most deeply nested child from div#grand-node. (Remember, you can iterate over elements and call querySelector() and querySelectorAll() on them. This is challenging to implement correctly, but not beyond your ability!)
function deepestChild(){
  const grand = document.querySelectorAll("#grand-node div");
  return grand.item(grand.length-1)
}
// HINT 1: Your solution for deepestChild() does not need to be totally
// generic; we don't expect it to work in every case. For example, we know that
// div#grand-node has only one node at each level — for this lab, you can solve
// for that case, and not worry about a case where there are sibling nodes.
// HINT: Remember learning about breadth-first search? A similar technique
// might come in handy here.
