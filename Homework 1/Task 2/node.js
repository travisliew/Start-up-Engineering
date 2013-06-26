#!/usr/bin/env node

// Check if number is prime
var prime = function(n) {
    if (n <= 2) { return 2; }
    else {
        var i = 2;

        // Loop from 2 - n/2 (anything > n/2 can never divide n)
        for (i = 2; i <= Math.ceil(n/2); i++) {
            if (n % i == 0) { return -1; }
        }
        return n;
    }
}

// Calculates the first k primes
var firstkprime = function(k) {
    var arr = [];
    var i = 2;

    // Loop until we have k array elements
    for (i = 2; arr.length < k; i++) {
	var p = prime(i);
        if (p != -1 ) { arr.push(p); }
    }
    return arr;
}

// Join array elements by a ","
var fmt = function(arr) {
    return arr.join(",");
}

var fs = require('fs');
var k = 100;
fs.writeFileSync("primes.txt", fmt(firstkprime(k))+"\n");
