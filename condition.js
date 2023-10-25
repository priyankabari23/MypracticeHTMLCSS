let items = 40;
if (items >= 50) {
    console.log("stock is available");
}
else {
    console.log("limited stock available");
}

if (items >= 50) {
    console.log("stock is available");
}
else if (items >= 20 && items <= 50) {
    console.log("few items left");
}
else if (items >= 1 && items <= 20) {
    console.log("hurry up few stock avilable");
}
else {
    console.log("out of stock");
}


let playername = 'virat kohli';
switch (playername) {
    case "sachin tendulkar":
        console.log('cricket player');

        break;
    case "virat kohli":
        console.log('cricket player');
        break;
    case "saniya":
        console.log('tennis player');
        break;
    case " messi":
        console.log('football player');
        break;


    default:
        console.log('match not found');
}