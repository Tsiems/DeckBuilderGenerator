import { v4 as uuid } from 'uuid';

const lookups = new Map();

export function uuidLookup(lookup, ...args)  {
        let id;
    
        if (lookup) {
            if (lookups.has(lookup)) {
                id = lookups.get(lookup);
                lookups.delete(lookup);
            }
            else {
                id = uuid.default();
                lookups.set(lookup, id);
            }
        }
    
        return id || uuid.default();
    };
// export default const uuidLookup = (lookup, ...args) => {
//     let id;

//     if (lookup) {
//         if (lookups.has(lookup)) {
//             id = lookups.get(lookup);
//             lookups.delete(lookup);
//         }
//         else {
//             id = uuid.default();
//             lookups.set(lookup, id);
//         }
//     }

//     return id || uuid.default();
// };
