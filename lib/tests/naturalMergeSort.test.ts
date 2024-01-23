import {naturalMergeSort} from "../merge-sort/naturalMergeSort";

const array = [2, 6, 2, 0, 38, 361, 5, 56, 921, 593, 5791, 3957, 9243, 2498];
const result = [0, 2, 2, 5, 6, 38, 56, 361, 593, 921, 2498, 3957, 5791, 9243];


const objectArray = [{fn: "Tom"}, {fn: "Alice"}, {fn: "Bob"}, {fn: "Roger"}, {fn: "Caramel"}];
const objectResult = [{fn: "Alice"}, {fn: "Bob"}, {fn: "Caramel"}, {fn: "Roger"}, {fn: "Tom"}];

test('Test natural merge sort - number', () => {
    expect(naturalMergeSort(array)).toEqual(result);
    expect(naturalMergeSort(array, (a,b)=>b-a)).toEqual(result.reverse());
});


test('Test natural merge sort - object / string', () => {
    expect(naturalMergeSort(objectArray, (a,b)=>a.fn.localeCompare(b.fn))).toEqual(objectResult);
    expect(naturalMergeSort(objectArray, (a,b)=>b.fn.localeCompare(a.fn))).toEqual(objectResult.reverse());
});