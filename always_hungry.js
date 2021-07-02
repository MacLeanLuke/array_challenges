function alwaysHungry(arr) {
    // your code here 
    var hungry = ''
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == "food"){
            hungry += "Yummy "
        }
    }
    if(hungry == ''){
        hungry += "I'm Hungry"
    }
    return hungry
}
   
console.log(alwaysHungry([3.14, "food", "pie", true, "food"])); 
// this should console log "yummy", "yummy"
console.log(alwaysHungry([4, 1, 5, 7, 2])); 
// this should console log "I'm hungry"