import {Sorter} from "./Sorter";
import {NumbersCollection} from "./NumbersCollection";

const numbersCollection = new NumbersCollection([2, 4, -1, -4, -6, 9, -8])
const sorter = new Sorter(numbersCollection)
sorter.sort()
console.log(numbersCollection.data)

