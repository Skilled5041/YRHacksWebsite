<script>
  let answer = "D";

  let answered = false;

  let contestName = "Fermat 2019";
  let question = "Sample question";
  let percent = 0.0;

  let seconds = 0;
  let minutes = 0;
  let clock = "0:00";

  let num = 1;
  let answerBlock = "none";

  const count = () => {
    seconds += 1;
    if (seconds >= 60) {
      minutes += 1;
      seconds = 0;
    }
    if (seconds < 10) {
      clock = minutes + ":0" + seconds;
    } else {
      clock = minutes + ":" + seconds;
    }
  };
  let tick = setInterval(count, 1000);

  const submitAnswer = (letter, number) =>{
    answerBlock = "block";
  }

  import { getProblemInfo } from "$lib/supabase";

  export let data;

  const nextQuestion = () => {
    answerBlock = "none";
    let questionNum = Math.floor(Math.random() * 24) + 1;
    let questionData;

    getProblemInfo(questionNum).then((result) => {
      questionData = result;
    });
    contestName = questionData.contest
    answer = questionData.answer;
    percent = questionData.percent;
  };

  let questionNum = Math.floor(Math.random() * 24) + 1;
  let questionData;

  getProblemInfo(questionNum).then((result) => {
    questionData = result;
  });


</script>

<body class="bg" on:load={nextQuestion}>
  <div class="align">
    <div
      class="bg-no-repeat"
      style="background-image: url('image.png'); size: 800px 1000px"
    >
      <div class="interface">
        <div class="clock">{clock}</div>
        <div class="header">
          <div class="glitch" aria-label="Math Challenge">
            {contestName}
            {questionNum}
          </div>
        </div>
        <div class="equation">
          <img class="question" src={question} alt={question} />
          <div class="options">
            <button class="btn" on:click={submitAnswer("A", questionNum)}
              >A</button
            >
            <button class="btn" on:click={submitAnswer("B", questionNum)}
              >B</button
            >
            <button class="btn" on:click={submitAnswer("C", questionNum)}
              >C</button
            >
            <button class="btn" on:click={submitAnswer("D", questionNum)}
              >D</button
            >
            <button class="btn" on:click={submitAnswer("E", questionNum)}
              >E</button
            >
          </div>
        </div>
        <img
          class="ease-in-out transform hover:scale-125 transition duration-500"
          src="Arrow.png"
          alt="arrow"
          on:click={nextQuestion}
          on:keydown
        />
        <div class="card" style="display:{answerBlock}">
          The answer is: {answer}
        </div>
      </div>
    </div>
  </div>
</body>

<style>
  .card {
    position: absolute;
    background-color: aliceblue;
    right: 100px;
    left: 100px;
    top: 40%;
    bottom: 40%;
    align-items: center;
  }
  .clock {
    font-family: "Courier New", Courier, monospace;
    position: absolute;
    top: 160px;
    left: 170px;
    font-size: 30px;
  }
  .ease-in-out {
    position: absolute;
    left: 936px;
    top: 256px;
    height: 230px;
  }
  .align {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    color: #fff;
    font-family: "Montserrat", sans-serif;
  }
  .question {
    position: absolute;
    top: 300px;
    font-family: "Courier New", Courier, monospace;
    font-size: xx-large;
    font-style: bold;
    filter: drop-shadow(100%);
  }
  .bg-no-repeat {
    position: absolute;
    top: 50px;
  }
  .interface {
    padding-bottom: 500px;
    width: 1000px;
    height: 1000px;
  }
  .options {
    position: absolute;
    width: 1000px;
    top: 550px;
    display: flex;
    justify-content: center;
  }
  .btn {
    color: black;
    background-color: #81dcec;
    width: 100px;
    font-family: "Courier New", Courier, monospace;
    font-size: 25px;
    margin-left: 35px;
    margin-right: 30px;
  }
  .btn:hover {
    background-color: rgb(81, 149, 161);
  }
  .bg {
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
    background: rgb(14, 16, 32);
    color: #fff;
    font-family: "Montserrat", sans-serif;
    overflow: hidden;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 3rem;
  }

  .glitch {
    position: absolute;
    top: 160px;
    display: inline-block;
    font-size: 20px;
    font-family: "Courier New", Courier, monospace;
    margin-left: 1rem;
    color: #000000;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    animation: glitch 1s linear infinite;
  }

  .glitch::before {
    text-shadow: -5px 0 #f0f, 5px 0 #0ff;
    clip-path: polygon(0 5%, 100% 5%, 100% 15%, 0 15%);
    animation: glitch 1s linear infinite;
    animation-delay: 0.1s;
  }

  .glitch::after {
    text-shadow: -5px 0 #0ff, 5px 0 #f0f;
    clip-path: polygon(0 70%, 100% 70%, 100% 75%, 0 75%);
    animation: glitch 1s linear infinite;
    animation-delay: 0.2s;
  }

  @keyframes glitch {
    0% {
      transform: skew(0deg);
    }
    20% {
      transform: skew(2deg);
    }
    40% {
      transform: skew(-3deg);
    }
    60% {
      transform: skew(4deg);
    }
    80% {
      transform: skew(-2deg);
    }
    100% {
      transform: skew(0deg);
    }
  }

  .equation {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
  }

  .question {
    border: 5px solid rgb(39, 127, 143);
    border-radius: 10px;
    box-shadow: 0px 0px 10px #3f8ca6;
    position: relative;

    max-width: 100%;
  }

  .question::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #3f8ca6;
    opacity: 0.5;
    z-index: -1;
  }

</style>
