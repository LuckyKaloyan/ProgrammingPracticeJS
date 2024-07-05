function sortNumbers(arr) {
    // Step 1: Sort the array in ascending order
    arr.sort((a, b) => a - b);

    // Step 2: Initialize result array
    let result = [];

    // Step 3: Two-pointer technique
    let left = 0;
    let right = arr.length - 1;

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            // Insert smallest remaining number
            result.push(arr[left]);
            left++;
        } else {
          
            result.push(arr[right]);
            right--;
        }
    }

    // Step 4: Return the resulting array
    return result;

} sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])



