function lazy(url, elementSelector) {
    let element = document.querySelector(elementSelector);
    fetch(url)
        .then(response => response.text())
        .then(component => {
            element.innerHTML = component;
        })
        .catch(document.write);
}
// lazy("nav.htm","nav");
