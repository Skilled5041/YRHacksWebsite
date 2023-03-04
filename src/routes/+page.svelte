<script>
    export let data;
</script>

<div class="container">
    <div class="header">
        <div class="title" aria-label="Contest Ace">Contest Ace</div>
    </div>
    <h1 class="glitch">Challenge yourself with exciting contests!</h1>
    <a href="problems" class="button">PLAY!</a>
</div>
<div class="noise-image"></div>
<div class="wrapper"></div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 80vh;

        color: #fff;
        font-family: 'Montserrat', sans-serif;
        z-index: 1; /* add z-index */
    }

    .header {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 3rem;
        margin-top: 1rem;
        z-index: 2; /* add z-index */
    }


    .title {
        font-size: 5rem;
        text-align: center;
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        margin-bottom: 3rem;
    }

    .glitch {
        position: relative;
        display: inline-block;
        font-size: 2rem;
        margin-left: 1rem;
        text-align: center;
        color: #fff;
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        animation: glitch 1s linear infinite;
    }

    .glitch::before,
    .glitch::after {
        content: attr(aria-label);
        position: absolute;
        top: 0;
        left: 0;
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

    .button {
        font-size: 1.5rem;
        background-color: transparent;
        border: 2px solid #fff;
        color: #fff;
        cursor: pointer;
        padding: 1rem 2rem;
        transition: background-color 0.3s ease;
        margin-top: 2rem;
        text-transform: uppercase;
    }

    .button:hover {
        background-color: #fff;
        color: #091236;
    }
    /* apply this to the container you want to animate */

    body {
        margin:0;
    }
    .wrapper {
        width: 100%;
        background: linear-gradient(45deg,#F17C58, #E94584, #24AADB , #27DBB1,#FFDC18, #FF3706);
        background-size: 600% 100%;
        animation: gradient 16s linear infinite;
        animation-direction: alternate;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
    }

</style>