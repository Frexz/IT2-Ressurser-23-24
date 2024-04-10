<script>
    export let gamePlaying
    export let land


    let score
    let questionCount
    let isFinished
    let hasAnswered
    let lives = ["heart", "heart", "heart"]
    let questions = []
    let alternatives = []

    function initializeGame() {
        isFinished = false
        hasAnswered = false
        score = 0
        questionCount = 0
        lives = ["heart", "heart", "heart"]
        questions = []
        alternatives = []
        makeQuestions(10)
        nextQuestion()
    }

    function makeQuestions(n){
        for (let i = 0; i < n; i++) {
            let randomCountry = land[Math.floor(Math.random()*land.length)]
            
            while(questions.includes(randomCountry)) {
                randomCountry = land[Math.floor(Math.random()*land.length)]
            }

            questions.push(randomCountry)
        }
        
    }

    function makeAlternatives() {
        let temp = []
        temp.push(questions[questionCount - 1])

        while (temp.length < 4) {
            let randomAlt = land[Math.floor(Math.random()*land.length)]
            
            while (temp.includes(randomAlt)) {
                randomAlt = land[Math.floor(Math.random()*land.length)]
            }

            temp.push(randomAlt)
        }

        let unsorted = temp.map((country) => {
            if (country === questions[questionCount - 1]) {
                return {"country": country, "correct": true, "color": 'green'}
            } else {
                return {"country": country, "correct": false, "color": 'red'}
            }
        })

        let i = Math.floor(Math.random()*unsorted.length)

        while (unsorted.length > 0) {
            alternatives.push(unsorted.splice(i, 1)[0])
            i = Math.floor(Math.random()*unsorted.length)
        }
    }

    function nextQuestion() {
        questionCount++
        makeAlternatives()
    }

    async function checkAnswer(answer) {
        hasAnswered = true

        if (answer.correct) {
            score += 100
        } else {
            let i = lives.length - 1

            while (lives[i] === "broken-heart") {
                i--

                if (i < 0) {
                    isFinished = true
                    return
                }
            }

            lives[i] = "broken-heart"
        }

        await sleep(2000);
        
        if (questionCount == questions.length || !lives.includes("heart")) {
            isFinished = true
            return
        }

        alternatives = []
        hasAnswered = false
        nextQuestion()
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    $: {
        if (gamePlaying) {
            initializeGame()
        }
    }

</script>

<div class="game-area">
    <div class="dashboard">
        <div class="lives">
            {#each lives as status}
                <img class="life" src="/img/{status}.png" alt="heart" style="filter: {(status === 'broken-heart') ? 'grayscale(100%)' : 'none'}">
            {/each}
        </div>

        <div class="timer">
            <h1>Timer Placeholder</h1>
        </div>

        <div class="score-area">
            <div class="score">
                <h2>Score: <span style="margin-left: 20px;">{score}</span></h2>
            </div>

            <div class="question-tracker">
                <h2>{questionCount}<span style="margin: 0 10px;">/</span>{questions.length}</h2>
            </div>
        </div>
    </div>
    
    <div class="questions">

        <div class="flag-box">
            <img class="flag" src="{questions[questionCount - 1].file_url}" alt="flag_{questionCount}">
        </div>
        

        <div class="alternatives">
            {#each alternatives as alt, i}
                <button class="alt-button" on:click={() => {checkAnswer(alt)}} style="background-color: {(hasAnswered) ? alt.color : 'rgb(255, 56, 86)'}">{alt.country.name}</button>
            {/each}
        </div>
    </div>
</div>

<div class="options">
    <button class="menu-button" on:click={() => {initializeGame()}}>Restart Game</button>
    <button class="menu-button" on:click={() => {gamePlaying = false}}>Back to Main Menu</button>
</div>