function solution(year) {

    for (i=1; i<=2005; i+=100){
        if(i <= year && year <= (i+100)) {
            console.log(Math.floor((i+100)/100));
            return Math.floor((i+100)/100);
        }
    };

};

solution(2001);

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    if(s.length % 2 !== 0) {
        return false;
    } else {

        let sArr = s.split("");
        let paren = ["(", ")"];
        let brack = ["[", "]"];
        let curly = ["{", "}"];


        do{
            var c = sArr.filter(x => !paren.includes(x));
            var d = c.filter(y => !brack.includes(y));
            var e = d.filter(z => !curly.includes(z));
        } while (c.includes(paren) || d.includes(brack) || e.includes(curly));

        console.log("e: " + e);



        for(let i = 0; i < sArr.length; i++){
            if(e.includes(sArr[i])){
                return false;
            } else {
                return true;
            }
        }

    }



};