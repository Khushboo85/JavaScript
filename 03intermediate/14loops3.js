const names = ["Youtube", "facebook", "Instagram", "Netflix", "Amazon"];

for(const n of names){
    console.log(n);
}

const symbols = {
    yt : "Youtube",
    ig: "Instagram",
    fb: "Facebook"
};
for(const n in symbols){
    console.log(n);
    console.log(`Key is ${n} and value is ${symbols[n]}`);
}