var headerItems = document.getElementsByClassName("headerItem")
for (let i = 0; i < headerItems.length; i++) {
    const item = headerItems[i];
    moveIn(item, i * 200)
}

function moveIn(item, delay) {
    setTimeout(() => {
        item.classList.add("movein")
    }, delay)
}