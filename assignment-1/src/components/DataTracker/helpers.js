
// finds the minimum and maximum values
export const minmax = (array, key) => {

    let value = array[0].temp[key];
    if (key === "min") {
        for (let i = 0; i < array.length; i++) {
            if (array[i].temp[key] < value)
                value = array[i].temp[key]
        }
    }
    else {
        for (let i = 0; i < array.length; i++) {
            if (array[i].temp[key] > value)
                value = array[i].temp[key]
        }
    }

    return value;
}

// mean calculator
export const mean = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i].temp.day
    }
    return sum / array.length;
}

//mode calculator
export const mode = (array) => {
    let mode = [array[0]], maxcount = 0, i = 0, count = 1;
    while (i < array.length) {
        if (array[0] === array[i] && i != 0) {
            count++;
            array.splice(i, 1);
        }
        else {
            i++;
        }
        if (i === array.length) {
            if (maxcount < count) {
                mode = [array[0]];
                maxcount = count;
            }
            else if (maxcount === count)
                mode.push(array[0])
            array.splice(0, 1);
            count = 1;
            i = 0;
        }

    }
    return mode
}
