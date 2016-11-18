small utility to run functions on multiple threads.

The idea is to increase performance for time extensive operations.
```javascript


var extensiveMath = function (a) {
    var e;
    for (var i = 0; i < 100000; i++) {

        for (var ah = 0; ah < 100040; ah++) {
            e = i * Math.E / -i;
        }
    }

    return e - a;
};


var core1 = wrapworker(extensiveMath, 1234567890)
.ready(function (result) {
    console.log("core1 done", result);
});

var core2 = wrapworker(extensiveMath, 1234567890)
.ready(function (result) {
    console.log("core2 done", result);
});

var core3 = wrapworker(extensiveMath, 1234567890)
.ready(function (result) {
    console.log("core1 done", result);
});

```
