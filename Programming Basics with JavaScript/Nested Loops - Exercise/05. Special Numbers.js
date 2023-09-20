function specialNumbers (input) {
    let num=Number(input.shift());
    let output='';
    for (let i=1111; i<=9999; i++) {
        let currentNum=i.toString();
        let isSpecial=true;
        for (let j=0; j<currentNum.length; j++) {
            let digit=Number(currentNum[j]);
            if (num%digit!==0) {
                isSpecial=false;
                break;
            }
        }
        if (isSpecial) {
            output+=`${i} `;
        }
    }
    console.log(output);
}