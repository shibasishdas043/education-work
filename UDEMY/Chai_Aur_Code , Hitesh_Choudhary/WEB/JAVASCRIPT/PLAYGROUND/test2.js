function counter() {
  for (var i = 1; i <= 3; i++) {
    setTimeout(function () {
      console.log(i); // Logs: 4, 4, 4
    }, i * 1000);
  }
}

// counter();

function counter() {
  for (var i = 1; i <= 3; i++) { (function (j) {
                                        setTimeout(() => {
                                                console.log(j); // Logs: 1, 2, 3
                                        }, j * 1000);
    })(i); // Pass `i` as an argument
  }
}

counter();

