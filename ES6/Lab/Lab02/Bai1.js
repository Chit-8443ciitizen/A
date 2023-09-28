
const result =  {
    success : ["max-lenght", "no-amd", "prefer-arrow-function" ],
    failure : ["no-var", "var-on-top", "linebreak" ],
    skipped : ["no-extra-semi", "no-dup-keys" ]
};
function makeList(arr){
    const failureItems = [];
    // trả lời
    for (let index = 0; index <= 2; index++) {
        failureItems[index] = `<li class="text-warning">${result.failure[index]}</li>` ;  
    }
    return failureItems;
}

const failureList = makeList(result.failure);

document.getElementById("bai1").innerHTML = failureList;
