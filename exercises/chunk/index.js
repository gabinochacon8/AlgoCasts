// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  /** V1 - My Solution */
  // const lastChunk = array.length % size;
  // const containerArr = [];
  // let tempArr = [];
  // const chunker = (arr, s) => {
  //   if (arr.length > s) {
  //     tempArr.push(...arr.slice(0, s));
  //     containerArr.push(tempArr);
  //   } else {
  //     tempArr.push(...arr.slice(0));
  //     containerArr.push(tempArr);
  //     return;
  //   }
  //   tempArr = [];
  //   chunker(arr.slice(s), s)
  // }
  // chunker(array, size)
  // return containerArr;

  /** V2 */
  // const chunked = [];
  // for (let el of array) {
  //   const last = chunked[chunked.length - 1];
  //   if (!last || last.length === size) {
  //     chunked.push([el]);
  //   } else {
  //     last.push(el);
  //   }
  // }
  // return chunked;

  /** V3 */
  const container = [];
  let index = 0;
  while (index < array.length) {
    container.push(array.slice(index, index + size));
    index += size;
  }
  return container;
}

module.exports = chunk;
