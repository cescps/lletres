const words = [
      'gat', 'casa', 'ordinador', 'llibre', 'finestra', 'taula', 'cadira', 'cotxe', 
      'bicicleta', 'avi', 'àvia', 'televisor', 'telèfon', 'escola', 'professor', 
      'alumne', 'motxilla', 'flor', 'parc', 'platja', 'muntanya', 'ciutat', 
      'poble', 'riu', 'pont', 'amic', 'amiga', 'família', 'germà', 'germana', 
      'pare', 'mare', 'gatet', 'gosset', 'llibreta', 'pissarra', 'aigua', 'foc'
    ];
    let currentWord = '';
    let scrambledWord = '';

    function scramble(word) {
      let scrambled = word.split('');
      while (scrambled.join('') === word) {
        scrambled.sort(() => Math.random() - 0.5);
      }
      return scrambled.join('');
    }

    function displayScrambledWord(word) {
      const container = document.getElementById('scrambled-word');
      container.innerHTML = '';
      word.split('').forEach(letter => {
        const span = document.createElement('span');
        span.textContent = letter.toUpperCase();
        span.className = 'px-4 py-2 border border-gray-700 rounded bg-gray-800 text-white';
        container.appendChild(span);
      });
    }

    function nextWord() {
      currentWord = words[Math.floor(Math.random() * words.length)];
      scrambledWord = scramble(currentWord);
      displayScrambledWord(scrambledWord);
      document.getElementById('user-input').value = '';
      document.getElementById('feedback').innerText = '';
    }

    function checkWord() {
      const userInput = document.getElementById('user-input').value.toLowerCase();
      if (userInput === currentWord.toLowerCase()) {
        document.getElementById('feedback').innerText = 'Ho has encertat!';
      } else {
        document.getElementById('feedback').innerText = 'Torna-ho a provar.';
      }
    }

    function handleKeyPress(event) {
      if (event.key === 'Enter') {
        checkWord();
      }
    }

    // Initialize with the first word
    nextWord();
