const lines = 8;
let space = lines - 1;

while(space >= 0){
    let pluse = lines - space;
    console.log(plus(space, pluse));
    space--;
}

function plus(spaces, pluses){
    let string = "";
    for(let var1 = 0; var1 < spaces; var1++){
        string += " ";
    }
    for(let var2 = 0; var2 < pluses; var2++){
        string += "+";
    }
    return string;
}


