const createButton = (label) => {
    const button = document.createElement("button");

    button.innerText = label;

    return button;
}

export {
    createButton
}