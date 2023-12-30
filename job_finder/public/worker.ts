self.addEventListener("message", (evt) => {
  setTimeout(() => {
    postMessage("done");
  }, 3000);
});
