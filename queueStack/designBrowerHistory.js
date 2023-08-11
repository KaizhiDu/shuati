// leetcode 1472

/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    this.path = [homepage]
    this.help = []
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    this.path.push(url);
    this.help = [];
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    for (let i = 0; i < steps ; i++) {
        if (this.path.length !== 1) {
            const pop = this.path.pop();
            this.help.push(pop);
        }
    }
    const length = this.path.length;
    return this.path[length - 1];
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {

    // console.log('laodu', steps);
    // console.log('laodu:help:before', this.help);
    // console.log('laodu:path:before', this.path);


    for (let i = 0; i < steps ; i++) {
        const pop = this.help.pop();
        if (pop) {
            this.path.push(pop);
        }
    }
    const length = this.path.length;

    // console.log('laodu:help:after', this.help);
    // console.log('laodu:path:after', this.path);

    return this.path[length - 1];
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */


const run = () => {
    const browserHistory = new BrowserHistory("leetcode.com");
    console.log(browserHistory.visit("google.com"));  // You are in "leetcode.com". Visit "google.com"
    console.log(browserHistory.visit("facebook.com"));     // You are in "google.com". Visit "facebook.com"
    console.log(browserHistory.visit("youtube.com"));      // You are in "facebook.com". Visit "youtube.com"
    console.log(browserHistory.back(1));                   // You are in "youtube.com", move back to "facebook.com" return "facebook.com"
    console.log(browserHistory.back(1));                   // You are in "facebook.com", move back to "google.com" return "google.com"
    console.log(browserHistory.forward(1));                // You are in "google.com", move forward to "facebook.com" return "facebook.com"
    console.log(browserHistory.visit("linkedin.com"));     // You are in "facebook.com". Visit "linkedin.com"
    console.log(browserHistory.forward(2));                // You are in "linkedin.com", you cannot move forward any steps.
    console.log(browserHistory.back(2));                   // You are in "linkedin.com", move back two steps to "facebook.com" then to "google.com". return "google.com"
    console.log(browserHistory.back(7));                   // You are in "google.com", you can move back only one step to "leetcode.com". return "leetcode.com"


    // const browserHistory = new BrowserHistory("zav.com");
    // console.log(browserHistory.visit("kni.com"));
    // console.log(browserHistory.back(7));
    // console.log(browserHistory.back(7));
    // console.log(browserHistory.forward(5));
    // console.log(browserHistory.forward(1));
    // console.log(browserHistory.visit("pwrrbnw.com"));
    // console.log(browserHistory.visit("mosohif.com"));
    // console.log(browserHistory.back(9));
}


run();
