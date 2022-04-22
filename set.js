const meuArray = [30, 30, 40, 5, 226, 2049, 3034, 5]


// SET irá retornar em um Array valores únicos com base no Array Original
function valoresUnicos (arr){
    const mySet = new Set (arr)

    return [...mySet]
}

console.log(valoresUnicos(meuArray))