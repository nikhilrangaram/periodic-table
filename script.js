const elements = document.querySelectorAll('.ele');
let i = 1;
let f = false;
elements.forEach(ele => {

    const p = ele.querySelector('p:nth-of-type(2)');
    p.innerHTML = `${i++}<br>`+p.innerHTML;
    if((i == 58 || i == 90) && !f){
        i += 14;
    }
    if(i == 118){
        f = true;
        i = 57;
    }

    if (i == 71 && f) {
        i = 89
    }
})