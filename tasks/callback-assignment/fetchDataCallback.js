function fetchDataWithCallback(callback) {
  setTimeout(function () {
    let error = false;

    try {
      if (error) {
        throw new Error("Fetch failed");
      }
      if (typeof callback === "function") {
        callback("Data fetched");
      } else {
        console.error("Error: Callback provided is not a function");
      }
    } catch (err) {
      console.error("Error: Fetch failed");
    }
  }, 2000); // 2000ms=2seconds
}

fetchDataWithCallback(function (message) {
  console.log(message);
});