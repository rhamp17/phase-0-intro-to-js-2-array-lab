let cats = ["Milo", "Otis"];
cats.push("Garfield");
function destructivelyAppendCat(name){
    cats.push("Ralph")
}
function destructivelyPrependCat(name){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(name){
    let Milo= [...cats, name];
    return Milo
}
function prependCat(name){
    let Otis= [name, ...cats];
    return Otis
}
function removeLastCat(){
    let caats=
    cats.slice(0,cats.length-1);
    return caats
}
function removeFirstCat(){
    let catts= cats.slice(1)
    return catts
}