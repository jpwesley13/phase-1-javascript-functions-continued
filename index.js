// code your solution here
function saturdayFun(action = "roller-skate") {
    //if (action = "bathe my dog") {
    return `This Saturday, I want to ${action}!`;
    //}
    //else {
    //    return `This Saturday, I want to roller-skate!`;
    //}
}
saturdayFun();

//function mondayWork(job = "go to the office") {
//    return `This Monday, I will ${job}.`;
//};

const mondayWork = function(job = "go to the office") {
    return `This Monday, I will ${job}.`;
}

function wrapAdjective(flair = "~!*") {
    return function(trait = "special") {
        return `You are ${flair}${trait}${flair}!`;
    }
};