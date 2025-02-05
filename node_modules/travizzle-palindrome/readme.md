# Phrase object (with palindrome detector)

This is a sample NPM module created in [Learn Enough Javascript to Be Dangerous](https://www.learnenough.com/javascript-tutorial) by Travis Ireland.

The module can be used as follows:

```
$ npm install --global travizzle-palindrome
$ vim test.js
let Phrase = require("travizzle-palindrome");
let napoleonsLament = new Phrase("Able was I ere I saw Elba.");
console.log(napoleonsLament.palindrome());
$ node test.js
true
```

