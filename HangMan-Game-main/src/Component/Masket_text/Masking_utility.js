export  function getMaskedString(originalword,Guessed_letter){
    Guessed_letter = Guessed_letter.map(letter=>letter.toUpperCase())
 const Guessed_letterSet = new Set(Guessed_letter) 

 const result = originalword.toUpperCase().split("").map(char=>
 {
    if(Guessed_letterSet.has(char)){
        return char
    }else{
        return"_"
    }
 }
 )
 return result
}