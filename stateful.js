// When a function started preserve some value is called statefull function.

function add(n1, n2) {
    let num1 = n1;
    let num2 = n2;

    return () => {
        return num1 + num2;
    }
}

const fn = add(1, 5);

console.log(fn());
console.log(fn());
console.log(fn());
console.log(fn());
console.log(fn());