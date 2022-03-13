import {NumbersCollection} from "./NumbersCollection";
import {CharactersCollection} from "./CharactersCollection";
import {LinkedList} from "./LinkedList";

const numbersCollection = new NumbersCollection([2, 4, -1, -4, -6, 9, -8])
numbersCollection.sort()
console.log(numbersCollection.data)

const charactersCollection = new CharactersCollection('XaaBbxejrnrwK')
console.log(charactersCollection.data)


const linkedList = new LinkedList()
linkedList.add(500)
linkedList.add(22)
linkedList.add(1)
linkedList.add(4)

linkedList.sort()
linkedList.print()







