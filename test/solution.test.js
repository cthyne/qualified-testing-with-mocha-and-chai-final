// Write your tests here!
const partitionStudentsByScore = require('../src/solution');
const { expect } = require("chai");

describe('partitionStudentsByScore', () => {
  it('should return an array of students and specific score', () => {
    const students = [
      { name: "Leo Yeon-Joo", score: 8.9 },
      { name: "Morgan Sutton", score: 7.4 },
      { name: "Natalee Vargas", score: 9.2 },
    ];
    
    const actual = partitionStudentsByScore(students, 8);
    const expected = [
      [
        { name: "Morgan Sutton", score: 7.4 }],
      [
        { name: "Leo Yeon-Joo", score: 8.9 },
        { name: "Natalee Vargas", score: 9.2 },
      ],
    ];
    expect(actual).to.eql(expected);
  })
  
   it("should return array of two empty arrays if students array is empty", () => {
        const students = [];
        const actual = partitionStudentsByScore(students, 8);
        const expected = [[], []];
        expect(actual).to.eql(expected);
    });
})