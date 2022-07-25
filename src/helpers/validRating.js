export default function validRating(props, propName, componentName = 'ANONYMOUS') {
    if (props[propName]){
        let value = props[propName];
        if (typeof value === "number"){
            console.log("Value",value)
            return (value >= 1 && value <= 100) ? null : new Error(`${propName} in ${componentName} must be between 1 and 100`);
        }

        return new Error(`${propName} in ${componentName}  ust be a numerical value`);
    }
}