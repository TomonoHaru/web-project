const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox2.png") {
        myImage.setAttribute("src", "images/taiho.webp");
    } else {
        myImage.setAttribute("src", "images/firefox2.png");
    }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("あなたの名前を入力してください。");

    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `${myName} にとってフリー素材とは何ですか？`;
    }
}

myButton.onclick = () => {
    setUserName();
}
