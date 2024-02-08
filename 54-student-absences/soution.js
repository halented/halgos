var checkRecord = function(s) {
    let absences = 0;
    let lateSeq = 0;

    for (let i=0; i < s.length; i++){
        if (s[i] === 'A' || s[i] === 'P') {
            lateSeq = 0;

            if (s[i] === 'A') {
                absences += 1;
            }
        }

        if(s[i] === 'L') {
            lateSeq += 1;
        }
        console.log(lateSeq);

        if ( absences >= 3 || lateSeq >= 3) {
            return false;
        }
    }
    return true;
};

console.log(checkRecord("PPALLL"));