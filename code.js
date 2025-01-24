function sum(a) {
    var sum = 0;
    // Loops through the array to add all entries together
    for (var i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return sum;
}