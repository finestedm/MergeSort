const content = document.getElementById('content')

const arrayExample = [10, 30, 2, 6, 7, 17, -23]

function mergeSort(array) {
    if (array.length < 2) {
        return array
    } else {
        const middlePoint = Math.ceil(array.length / 2)
        const leftHalf = mergeSort(array.slice(0, middlePoint))
        const rightHalf = mergeSort(array.slice(middlePoint))
        return rearrangeLeftAndRight(leftHalf, rightHalf);
    }
}

function rearrangeLeftAndRight(left, right) {
    let rearrangedArray = []
    while (left.length > 0 && right.length > 0) {
        left[0] < right[0] ? rearrangedArray.push(left[0]) && left.shift() : rearrangedArray.push(right[0]) && right.shift()
    }
    while (right.length > 0) {
        rearrangedArray.push(right[0])
        right.shift()
    };
    while (left.length > 0) {
        rearrangedArray.push(left[0])
        left.shift()
    }

    return rearrangedArray
}

content.innerHTML = mergeSort(arrayExample)