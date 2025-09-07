function nameshow1() {

    var name1 = ["あ","い","う","え","お","か","き","く","け","こ","さ","し","す","せ","そ","た","ち","つ","て","と","な","に","ぬ","ね","の","は","ひ","ふ","へ","ほ","ま","み","む","め","も","や","ゆ","よ","ら","り","る","れ","ろ","わ","を"];
    var name2= [...name1,"ん"];

    function getRandomChar(list) {
    return list[Math.floor(Math.random() * list.length)];
}

    var message = getRandomChar(name1) + getRandomChar(name2);

    var object = document.getElementById("name");
    object.innerText = message;
}

function nameshow2() {

    var name1 = ["あ","い","う","え","お","か","き","く","け","こ","さ","し","す","せ","そ","た","ち","つ","て","と","な","に","ぬ","ね","の","は","ひ","ふ","へ","ほ","ま","み","む","め","も","や","ゆ","よ","ら","り","る","れ","ろ","わ","を"];
    var name2= [...name1,"ん"];

       function getRandomChar(list) {
    return list[Math.floor(Math.random() * list.length)];
}

    var message = getRandomChar(name1) + getRandomChar(name2) + getRandomChar(name2);

    var object = document.getElementById("name");
    object.innerText = message;
    
}

function girlshow() {

    var girl = ["子","美","ちゃん","花","乃"];

    var name1 = ["あ","い","う","え","お","か","き","く","け","こ","さ","し","す","せ","そ","た","ち","つ","て","と","な","に","ぬ","ね","の","は","ひ","ふ","へ","ほ","ま","み","む","め","も","や","ゆ","よ","ら","り","る","れ","ろ","わ","を"];
    var name2= [...name1,"ん"];
    
    function getRandomChar(list) {
    return list[Math.floor(Math.random() * list.length)];
 }

    const length = Math.random() < 0.5 ? 2 : 3;

    let message = getRandomChar(name1) + getRandomChar(name2);
    if (length === 3) {
        message += getRandomChar(name2);
    }

    message += getRandomChar(girl);

    var object = document.getElementById("name");
    object.innerText = message;
    
}

function boyshow() {

    var boy = ["太郎","次郎","太","君","也","之助"];

    var name1 = ["あ","い","う","え","お","か","き","く","け","こ","さ","し","す","せ","そ","た","ち","つ","て","と","な","に","ぬ","ね","の","は","ひ","ふ","へ","ほ","ま","み","む","め","も","や","ゆ","よ","ら","り","る","れ","ろ","わ","を"];
    var name2= [...name1,"ん"];
    
    function getRandomChar(list) {
    return list[Math.floor(Math.random() * list.length)];
 }


 const length = Math.random() < 0.5 ? 2 : 3;

    let message = getRandomChar(name1) + getRandomChar(name2);
    if (length === 3) {
        message += getRandomChar(name2);
    }

    message += getRandomChar(boy);

    var object = document.getElementById("name");
    object.innerText = message;
    
}