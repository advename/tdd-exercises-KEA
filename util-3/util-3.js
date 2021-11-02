export default function commentHandler(comments) {
  // 1. Sort the comments from highest to lowest liked
  // sort API: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  const sorted = comments.sort(function(commentA, commentB) {
    if (commentA.likes > commentB.likes) {
      // A has more likes than B
      return 1;
    }
    if (commentA.likes < commentB.likes) {
      // B has more likes than A
      return -1;
    }

    // A and B have same amount of likes
    return 0;
  });

  // 2. Only return the first element
  return sorted[0];
}
