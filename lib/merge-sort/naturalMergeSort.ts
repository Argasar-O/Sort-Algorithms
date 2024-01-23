export function naturalMergeSort<T>(listToSort: T[], comparator?: (a: T, b:T) => number){
    if(listToSort.length > 0 && typeof listToSort[0] === 'number' )
        comparator ??= (a, b) => (a as number) - (b as number);
    else if(listToSort.length > 0 && typeof listToSort[0] === 'string' )
        comparator ??= (a, b) => (a as string).localeCompare(b as string);
    if(!comparator)
        throw new Error("Comparator is required for your data");

    const splited: T[][] = [];

    let temp: T[] = [];
    for(let i = 0; i < listToSort.length; i++){
        if(temp.length === 0) temp.push(listToSort[i]);
        else if(comparator(listToSort[i], listToSort[i-1]) >= 1){
            temp.push(listToSort[i]);
        }
        else {
            splited.push(temp);
            temp = [listToSort[i]];
        }
    }
    splited.push(temp);
    return merge<T>(splited, comparator)[0];
}

function merge<T>(listToMerge: T[][], comparator: (a: T, b:T) => number){
    if(listToMerge.length <= 1) return listToMerge;
    const listA = listToMerge.pop() as T[];
    const listB = listToMerge.pop() as T[];
    const merged: T[] = [];
    while(listA.length + listB.length > 0){
        if(listA.length && (!listB.length || comparator(listA[0], listB[0]) < 0)) merged.push(listA.shift() as T);
        else if(listB.length) merged.push(listB.shift() as T);
    }
    listToMerge.push(merged);
    return merge(listToMerge, comparator);
}