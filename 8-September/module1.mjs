// To load an ES module, set "type": "module" in the package.json or use the .mjs extension.

import any from './module2.mjs'
console.log(any) ; 
// output ==>>  Ritesh , beacause i am exporting  c .


// Importing multiple names

import some , {a,d,g} from './module2.mjs'
console.log(some) ; 
console.log(a) ; 
console.log(d) ; 
console.log(g) ; 

// output ==>>  Ritesh
                // Ritesh
                // Prakash
                // Govind
                // Shivansh















