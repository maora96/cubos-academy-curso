const button = document.querySelector("button");
const promise = new Promise((resolve) => {
    button.addEventListener("click", () => {
        resolve();
    });
});

promise.then(() => alert("hello"));