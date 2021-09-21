function randomHeader() {
    let res = Math.random();
    console.log(res)
    let header_content;
    if (res < 0.2)
        header_content = `Galy Aviv's CV`
    else if (res >= 0.2 && res < 0.4)
        header_content = `Galy's CV`
    else if (res >= 0.4 && res < 0.6)
        header_content = `My Amazing CV`
    else if (res >= 0.6 && res < 0.8)
        header_content = `My Resume`
    else
        header_content = `The Story of Galy`
    document.getElementById("name_header").innerText = header_content;
}