//Usando thisArg (opicional)

const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

function mapComThis(arr, thisArg) {
    return arr.map(function(item){
        return item * this.value
    }, thisArg)
}

const nums = [1, 2]

console.log('this -> maçã', mapComThis(nums, maca)) //retorna 2, 4
console.log('this -> laranja', mapComThis(nums, laranja)) // retorna 3, 6


//Sem thisArg e com Arrow function

function mapSemThis(arr) {
    return arr.map((item) => item *2)
}

const num = [2, 4, 6, 8, 10]

console.log(mapSemThis(num)) // retorna 4, 8, 12, 16, 20