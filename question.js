document.addEventListener('DOMContentLoaded', function (){

    const newValues = ["Zigzag Conversion", "=>  The string { PAYPALISHIRING } is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)", ":case-1", "input => s = { PAYPALISHIRING }, numRows = 3", "output =>  { `PAHNAPLSIIGYIR`}",":case-2" ,"input => s = {PAYPALISHIRING}, numRows = 4" , "output => PINALSIGYAHRPI" ,":case-3","input => s = A, numRows = 1" , "output =>  A"];
    
    function changeDivs() {
        const boxes = document.querySelectorAll('.box');
        
        boxes.forEach((bx, index) => {
            if (newValues[index] !== undefined) {
                bx.textContent = newValues[index];
            }
        });
    }


    document.getElementById('changeButton').addEventListener('click', function (e) {
        e.preventDefault();
        changeDivs();
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const newValues = ["Cosmic Rays", "=> Given an array of integers s1,s2,…", "case-1", "input for case1", "output for case1","case-2" ,"input for case 2" , "output for case2" ,"case-3","input for case3" , "output ofr case 3"];
    
    function changeDivs() {
        const boxes = document.querySelectorAll('.box');

        boxes.forEach((box, index) => {
            if (newValues[index] !== undefined) {
                box.textContent = newValues[index];
            }
        });
    }

    document.getElementById('vr').addEventListener('click', function (e) {
        e.preventDefault(); 
        changeDivs();
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const newValues = ["Permutation", "=> Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.", "case-1", "input => nums = [1,2,3]", "output => [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]","case-2" ,"input =>nums = [0,1]" , "output => [[0,1],[1,0]]" ,"case-3","input => nums = [1]" , "output => [[1]]"];
    function changeDivs() {
        const boxes = document.querySelectorAll('.box');

        boxes.forEach((box, index) => {
            if (newValues[index] !== undefined) {
                box.textContent = newValues[index];
            }
        });
    }

    document.getElementById('per').addEventListener('click', function (e) {
        e.preventDefault(); 
        changeDivs();
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const newValues = ["Combination Sum", "=> Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.", "case-1", "input => nums = [1,2,3]", "output => [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]","case-2" ,"input =>nums = [0,1]" , "output => [[0,1],[1,0]]" ,"case-3","input => nums = [1]" , "output => [[1]]"];
    function changeDivs() {
        const boxes = document.querySelectorAll('.box');

        boxes.forEach((box, index) => {
            if (newValues[index] !== undefined) {
                box.textContent = newValues[index];
            }
        });
    }

    document.getElementById('combsum').addEventListener('click', function (e) {
        e.preventDefault(); 
        changeDivs();
    });
});