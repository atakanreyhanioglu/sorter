"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
// import {NumbersCollection} from "./NumbersCollection";
const CharactersCollection_1 = require("./CharactersCollection");
// const numbersCollection = new NumbersCollection([2, 4, -1, -4, -6, 9, -8])
const charactersCollection = new CharactersCollection_1.CharactersCollection('aaaABbBCxyZz');
// const sorter = new Sorter(numbersCollection)
const sorter = new Sorter_1.Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
