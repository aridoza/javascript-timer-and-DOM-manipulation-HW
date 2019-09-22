// bonus: refactor to global object 

const timer = {
    // store the timer header in a variable
    timerId: document.getElementById('timer'),
    
    // store the reset button in a variable
    resetButton: document.getElementById('reset'),
    
    // store the start button in a variable
    startButton: document.getElementById('start'),
    
    // store the pause button in a variable
    pauseButton: document.getElementById('pause'),
    
    // global variable for the timer
    seconds: 0,
    
    updateTime: function() {
        timer.seconds++;
        timer.timerId.innerText = `Time elapsed: ${timer.seconds}`;
    },
    
    timerInterval: null,
    
    changeButtonColor: function(button, color1, color2) {
        button.style.background = color1;
        button.style.color = color2;
    },
    
    startTimer: function() {
        //startButton.disabled = true;
        timer.changeButtonColor(timer.startButton, 'black', '#181B1B');
        timer.timerInterval = setInterval(timer.updateTime, 1000);
        return timer.timerInterval;
    },
    
    stopTimer: function() {
        timer.startButton.disabled = false;
        timer.changeButtonColor(timer.startButton, '#2B4E79', 'white');
        clearInterval(timer.timerInterval);
        timer.seconds = 0;
        timer.timerId.innerText = 'Stopwatch';
    },
    
    pauseTimer: function() {
        clearInterval(timer.timerInterval);
        //changeButtonColor(startButton, '#2B4E79', 'white');
        //this.startButton.disabled = false;
        timer.timerId.innerText = `Time elapsed: ${timer.seconds}`;
    },  
};
// start the stopwatch when user clicks the start button
document.querySelector('#start').addEventListener('click', timer.startTimer);

// pause the stopwatch when user clicks the pause button
document.querySelector('#pause').addEventListener('click', timer.pauseTimer);

// stop and reset the stopwatch when user clicks the stop button 
document.querySelector('#reset').addEventListener('click', timer.stopTimer);


