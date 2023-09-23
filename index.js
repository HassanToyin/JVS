<<<<<<< HEAD


let age = prompt("please enter your age")

const citizen = prompt("are you a citizen: (yes/no)")

if (age >= 18 && citizen === "yes"){
    console.log("you are of age and a citizen so you are eligible to vote")
}else if (age >= 18 && citizen === "no"){
    console.log("you are of age and not a citizen so you are unable to vote")

}else if(age < 18 && citizen === "yes"){
    console.log("you are a citizen but not of age to vote")
}else if(age < 18 && citizen === "no"){
    console.log("you are not of age and not a citizen so you are unable to vote")

}

=======


let age = prompt("please enter your age")

const citizen = prompt("are you a citizen: (yes/no)")

if (age >= 18 && citizen === "yes"){
    console.log("you are of age and a citizen so you are eligible to vote")
}else if (age >= 18 && citizen === "no"){
    console.log("you are of age and not a citizen so you are unable to vote")

}else if(age < 18 && citizen === "yes"){
    console.log("you are a citizen but not of age to vote")
}else if(age < 18 && citizen === "no"){
    console.log("you are not of age and not a citizen so you are unable to vote")

}

>>>>>>> 910eb4fffbe8eb7fa43ee2b83d33077b0fc9dc38
