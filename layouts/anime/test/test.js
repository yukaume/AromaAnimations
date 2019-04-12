const circleArr = [];
var framecount = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background('#fff');
    framecount += 1;
    for (let i = 0; i < circleArr.length; i++) {
        circleArr[i].r += 0.1;
        circleArr[i].angle += 1;
        createCircleByDot(circleArr[i].length, circleArr[i].r, circleArr[i].o, circleArr[i].angle);
    }
    if (framecount % 60 === 0) {
        circleArr.push({
            o: createVector(random(0, windowWidth), random(0, windowHeight)),
            r: 0,
            length: 10,
            angle: 0,
            life: 0,
            life_limit: 10
        })
    }
}

// dotOnCircleは角度:angleとr:半径とo:原点の座標を受け取って円を描画する
function dotOnCircle(angle, r, o) {
    var x = cos(angle * PI / 180) * r + o.x
    var y = sin(angle * PI / 180) * r + o.y
    rect(x, y, 16, 16)
}

// createCircleByDotはドットの数:lengthと円の半径:rと円の中心の座標:oを受け取って
// 半径rの円の円周上にlength個のドットを描画する
function createCircleByDot(length, r, o, addAngle) {
    var angle = 360 / length // ドットの個数からベースの角度を求める
    for (let i = 0; i < length; i++) {
        const _angle = angle * i + addAngle // ベースの角度にiをかけた値を算出する
        dotOnCircle(_angle, r, o)
    }
}

// function mouseClicked() {
//     // createCircleByDotの第三引数はオブジェクトなのでcreateVectorして渡す
//     // createCircleByDot(30, 100, createVector(mouseX, mouseY))
//     circleArr.push({
//         o: createVector(random(0, windowWidth), random(0, windowHeight)),
//         r: 0,
//         length: 10,
//         angle: 0,
//         life: 0,
//         life_limit: 10
//     })
//     console.log(circleArr)
// }

function mouse() {

}