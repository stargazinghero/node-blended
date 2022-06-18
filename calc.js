// sum
// sub
// mult
// div

const [operation, ...args] = process.argv.slice(2);
const numbers = args.map(item => Number(item));

const calculated = (operation, numbers) => {
    let res = null;
    switch (operation) {
        case 'sum':
            res = numbers.reduce((acc, num) => {
                return acc + num;
            }, 0);
            console.log(res);
            break;
        case 'sub':
            res = numbers.reduce((acc, num) => {
                return acc - num;
            });
            console.log(res);
            break;
        case 'mult':
            res = numbers.reduce((acc, num) => {
                return acc * num;
            });
            console.log(res);
            break;
        case 'div':
            res = numbers.reduce((acc, num) => {
                return acc / num;
            });
            console.log(res);
            break;
        default:
            console.log('Unknown operation');
    }
};

calculated(operation, numbers);

// (() => {
//     let res = null;
//     switch (operation) {
//         case 'sum':
//             res = numbers.reduce((acc, num) => {
//                 return acc + num;
//             }, 0);
//             console.log(res);
//             break;
//         case 'sub':
//             res = numbers.reduce((acc, num) => {
//                 return acc - num;
//             });
//             console.log(res);
//             break;
//         case 'mult':
//             res = numbers.reduce((acc, num) => {
//                 return acc * num;
//             });
//             console.log(res);
//             break;
//         case 'div':
//             res = numbers.reduce((acc, num) => {
//                 return acc / num;
//             });
//             console.log(res);
//             break;
//         default:
//             console.log('Unknown operation');
//     }
// })(operation, numbers);
