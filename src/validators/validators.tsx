export const requiredField = (value: string | number) => {
    if (value) {
        return undefined
    } else {
        return "Field is required"
    }
}

export const maxLenghtCreator = (maxLenght: number) => (value: string) => {
    if (value.length > maxLenght) {
        return `Max lenght is ${maxLenght} symbols`
    } else {
        return undefined
    }
}