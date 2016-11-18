var wrapworker = function (_function, data) {
    var wrapr = this;
    var mtd = "self.onmessage = function() {postMessage(" + _function.toString().replace('(','du(') + "(" + JSON.stringify(data) + "));};";
    blob = new Blob([mtd], { type: 'application/javascript' });
    var work = new Worker(URL.createObjectURL(blob));
    wrapr.ready = function (cb) { work.onmessage = cb; };
    wrapr.error = function (cb) { work.onerror = cb; };
    work.postMessage(true);
    return wrapr;
};