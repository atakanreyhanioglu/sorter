import {Sorter} from "./Sorter";
// import {NumbersCollection} from "./NumbersCollection";
import {CharactersCollection} from "./CharactersCollection";

// const numbersCollection = new NumbersCollection([2, 4, -1, -4, -6, 9, -8])
const charactersCollection = new CharactersCollection('aaaABbBCxyZz')

// const sorter = new Sorter(numbersCollection)
const sorter = new Sorter(charactersCollection)

sorter.sort()
console.log(charactersCollection.data)

