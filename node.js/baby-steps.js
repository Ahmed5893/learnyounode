var args=process.argv;
args=args.splice(2,args.length);
var answer=args.reduce(function sum(a,b){
    return +a + +b;
})
console.log(answer);