const id = x => x;
const konst = x => y => x;
const snd = x => y => y;

//const T = truecase => falsecase => truecase;
//const T = x => y => x;
const T = konst;
const F = snd;

// Quiz Frage 7 - T und F sind schon da

//const and = p => q => p( q (T) (F) ) ( q (F)  (F) )
const and = p => q => p(q) (F)
//                      p is T      p is F
//const and = p => q => p(q)(p)

//const or = p => q => p( q (T) (T) ) ( q (T)  (F) )
//const or = p => q => p(T)(q)
const or = p => q => p(p)(q);

const Pair = x => y => getter => getter(x)(y);
const firstname = konst;
const lastname = snd;

const Left      = x => f => g => f(x);
const Right     = x => f => g => g(g);
const either    = e => f => g => e(f)(g);
// ----- special -----

const Tuple = n => [
    parmStore (n + 1) ( [] ) (parms => parms.reduce( (accu, it) => accu(it), parms.pop() ) ), // ctor
    ...Array.from( {length:n}, (it, idx) => iOfN (n) (idx) () )                    // selectors
];

const iOfN = n => i => value => // from n curried params, take argument at position i,
    n === 0
    ? value
    : x => iOfN (n-1) (i-1) ( i === 0 ? x : value );


const parmStore = n => args => onDone =>  // n args to come
    n === 0
    ? onDone(args)
    : arg => parmStore(n - 1)([...args, arg]) (onDone); // store parms in array

const Choice = n => [
    ...Array.from( {length:n}, (it, idx) => parmStore(n+1) ([]) (parms => parms[idx+1] (parms[0]) ) ), // ctors
    id
];




