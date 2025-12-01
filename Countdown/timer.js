let countdown, timeLeft, paused = false;

    function startTimer() {
      if (!paused) timeLeft = parseInt(document.getElementById("seconds").value) || 0;
      paused = false;
      clearInterval(countdown);
      countdown = setInterval(() => {
        if (timeLeft > 0) {
          document.getElementById("timer").textContent = timeLeft;
          timeLeft--;
        } else {
          document.getElementById("timer").textContent = "Time's up!";
          clearInterval(countdown);
        }
      }, 1000);
    }

    function pauseTimer() {
      clearInterval(countdown);
      paused = true;
    }

    function resetTimer() {
      clearInterval(countdown);
      document.getElementById("timer").textContent = 0;
      paused = false;
    }