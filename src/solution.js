/*
  Write a function that separates students into two buckets based on a given score. The end result for the "happy path" should be an array with two arrays inside of it.
*/
// const students = [
//   { name: "Leo Yeon-Joo", score: 8.9 },
//   { name: "Morgan Sutton", score: 7.4 },
//   { name: "Natalee Vargas", score: 9.2 },
// ];

function partitionStudentsByScore(students, score) {
  const result = students.filter((student) => student.score <= score)

  const otherResult = students.filter((student) => student.score >= score)
  return [result, otherResult]
  // console.log(otherResult)
}
// partitionStudentsByScore(students, 8);

module.exports = partitionStudentsByScore;
