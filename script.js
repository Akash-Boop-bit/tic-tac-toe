let x = 0
let track = [0,0,0,0,0,0,0,0,0]


const hello = (id) => {
    let a = id;
    let img = "img" + a;
    if (track[Number(a)-1] === 0)
    {
        if (x === 0) {
            let img1 = img + "1"
            let img2 = img + "2"
            let image1 = document.getElementById(img1)
            let image2 = document.getElementById(img2)
            image1.style.visibility = "visible";
            image2.style.visibility = "hidden";
            track[Number(a) - 1] = 2;
            x = 1
        }else if (x===1) {
            let img1 = img + "1"
            let img2 = img + "2"
            let image1 = document.getElementById(img1)
            let image2 = document.getElementById(img2)
            image2.style.visibility = "visible";
            image1.style.visibility = "hidden";
            track[Number(a) - 1] = 1;
            x = 0
        } 
        let num = checker();
        if (num){
            const game = document.getElementById("game")
            game.style.visibility = "visible";
            if (num === 2) {
                const playerimg1 = document.getElementById("playerimg1")
                playerimg1.style.visibility = "visible";
                const playerimg2 = document.getElementById("playerimg2")
                playerimg2.style.visibility = "hidden";
                
                const player1 = document.getElementById("player1")
                player1.innerText = Number(player1.innerText) + 1;

            }else if (num === 1) {
                const playerimg2 = document.getElementById("playerimg2")
                playerimg2.style.visibility = "visible";
                const playerimg1 = document.getElementById("playerimg1")
                playerimg1.style.visibility = "hidden";

                const player2 = document.getElementById("player2")
                player2.innerText = Number(player2.innerText) + 1;

            }else if (num === 3) {
                const draw = document.getElementById("draw")
                draw.innerText = Number(draw.innerText) + 1;
            }

            const main = document.getElementById("main2")
            main.style.visibility = "hidden"
            track = [0,0,0,0,0,0,0,0,0]
            let element = document.getElementById('img')
            for (let i = 1; i<10; i++) {
                element = document.getElementById('img' + String(i) + '1')
                element.style.visibility = 'hidden'
                element = document.getElementById('img' + String(i) + '2')
                element.style.visibility = 'hidden'
            }
            const newbutton = document.getElementById('newgame')
            newbutton.style.visibility = 'visible'

        }
        
    }
}



const newgame = () => {
    track = [0,0,0,0,0,0,0,0,0]
    let element = document.getElementById('img')
    for (let i = 1; i<10; i++) {
        element = document.getElementById('img' + String(i) + '1')
        element.style.visibility = 'hidden'
        element = document.getElementById('img' + String(i) + '2')
        element.style.visibility = 'hidden'
    }
    const newbutton = document.getElementById('newgame')
    newbutton.style.visibility = 'hidden'
    const main = document.getElementById("main2")
    main.style.visibility = "visible"
    const game = document.getElementById("game")
    game.style.visibility = "hidden";
    const playerimg1 = document.getElementById("playerimg1")
    playerimg1.style.visibility = "hidden";
    const playerimg2 = document.getElementById("playerimg2")
    playerimg2.style.visibility = "hidden";
}


const checker = () => {

    // for 2

    let a = 0
    let b = 1
    let c = 2
    for (let i = 1; i<4; i++) {
        if (track[a] === 2 && track[b] === 2 && track[c] === 2) {
            return 2
        }
        a += 3
        b += 3
        c += 3
    }
    a = 0
    b = 3
    c = 6

    for (let i = 1; i<4; i++) {
        if (track[a] === 2 && track[b] === 2 && track[c] === 2) {
            return 2
        }
        a += 1
        b += 1
        c += 1
    }
    if (track[0] === 2 && track[4] === 2 && track[8] === 2) {
        return 2
    }
    if (track[2] === 2 && track[4] === 2 && track[6] === 2) {
        return 2
    }

    //for 1

     a = 0
     b = 1
     c = 2
    for (let i = 1; i<4; i++) {
        if (track[a] === 1 && track[b] === 1 && track[c] === 1) {
            return 1
        }
        a += 3
        b += 3
        c += 3
    }
    a = 0
    b = 3
    c = 6

    for (let i = 1; i<4; i++) {
        if (track[a] === 1 && track[b] === 1 && track[c] === 1) {
            return 1
        }
        a += 1
        b += 1
        c += 1
    }
    if (track[0] === 1 && track[4] === 1 && track[8] === 1) {
        return 1
    }
    if (track[2] === 1 && track[4] === 1 && track[6] === 1) {
        return 1
    }

    for(let i = 0; i<9; i++) {
        if (track[i] === 0) {
            return false
        }
    }
    return 3
}







