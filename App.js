const player = {
    name: "elin",
    points: 10,
    happy: true
};

console.log(player.name);
// is same as 
console.log(plauer["name"]);
// we can update the object variable
player.points = player.points + 15;
//we can even add new variable 
player.major = "Computer Engineering";
