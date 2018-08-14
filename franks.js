
const [S, E] = ['S', 'E'];

const graph = [
  [ S, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [ 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [ 0, 1, 1, 0, 0, 0, 1, 1, 0, 0],
  [ 0, 0, 1, 1, 0, 0, 1, 0, 0, 0],
  [ 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [ 0, 0, 1, 1, 1, 1, 0, 0, 1, 1],
  [ 1, 1, 1, 0, 0, 1, 0, 0, 0, 1],
  [ 0, 0, 1, 0, 0, 1, 1, 1, 1, 1],
  [ 0, 0, 1, 1, 1, 0, 0 ,0, 0, 0],
  [ 0, 0, 0, 0, 1, 1, 1, 1, 1, E]
];

// const graph = [
//  ['E',1, 0, 1, 1, 1],
//   [0, 1, 1, 1, 0, 1],
//   [0, 0, 0, 0, 0, 1],
//   [1, 1, 1, 1, 1, 1],
//   [1, 0, 0, 1, 0, 1],
//   [1,'S',0, 1, 1, 1]
// ];

arr[8][6]

      0  1  2  3  4  5  6  7  8  9
0   [ S, 1, 0, 0, 0, 0, 0, 0, 0, 0],
1   [ 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
2   [ 0, 1, 1, 0, 0, 0, 1, 1, 0, 0],
3   [ 0, 0, 1, 1, 0, 0, 1, 0, 0, 0],
4   [ 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
5   [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
6   [ 0, 0, 1, 1, 1, 1, 0, 0, 1, 1],
7   [ 1, 1, 1, 0, 0, 1, 0, 0, 0, 1],
8   [ 0, 0, 1, 0, 0, 1, 1, 1, 1, 1],
9   [ 0, 0, 1, 1, 1, 0, 0 ,0, 0, 0],
10  [ 0, 0, 0, 0, 1, 1, 1, 1, 1, E]

findPath(graph);

function findPath(map) {
  const path = [];
  const visited = {};

  function find(location) {
    if (map[location.r][location.c] && !visited[location.r + '' + location.c]) {
      visited[location.r+''+location.c] = true;
      
      if (map[location.r][location.c] === 'E') {
        path.push([location.r, location.c]);
        return true;
      }

      if (map[location.r + 1] && find({r: location.r + 1, c:location.c})) {
        path.push([location.r, location.c]);
        return true; 
      }

      if (map[location.r][location.c + 1] && find({r: location.r, c: location.c + 1})) {
        path.push([location.r, location.c]);
        return true;
      }  
      
      if (map[location.r - 1] && find({ r: location.r - 1, c: location.c })) {
        path.push([location.r, location.c]);
        return true;
      } 

      if (map[location.r][location.c - 1] && find({ r: location.r, c: location.c - 1 })) {
        path.push([location.r, location.c]);
        return true;
      } 
    }
  }

  for (var r = 0; r < map.length; r++) {
    for (var c = 0; c < map.length; c++) {
      if (map[r][c] === 'S') {
        find({r:r, c:c});
        break;
      }
    }
  }

  return path.reverse();
}
