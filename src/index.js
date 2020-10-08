module.exports = function toReadable(number) {
    let massdit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let massteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let massdec = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let mass = number.toString().split('');
    console.log(massdec[mass[1]-2])
    if(mass.length==1){
        return massdit[number];
    } else if (mass.length==2){
        if(number<20){
            return massteen[number-10];
        } else{
            if(mass[1]==0){
                return `${massdec[mass[0]-2]}`
            } else {
                return `${massdec[mass[0]-2]} ${massdit[mass[1]]}`
            }
        }
    } else if (mass.length==3){
        if(mass[1]==0){
            if(mass[2]==0){
                return `${massdit[mass[0]]} hundred`
            } else{
                return `${massdit[mass[0]]} hundred ${massdit[mass[2]]}`
            }
        } else {
            if(mass[2]==0){
                if(mass[1]==1){
                    return `${massdit[mass[0]]} hundred ${massteen[0]}`
                } else{
                    return `${massdit[mass[0]]} hundred ${massdec[mass[1]-2]}`
                }
            } else{
                if(mass[1]==1){
                    return `${massdit[mass[0]]} hundred ${massteen[mass[2]]}`
                } else {
                    return `${massdit[mass[0]]} hundred ${massdec[mass[1] - 2]} ${massdit[mass[2]]}`
                }
            }
        }
    }
}
