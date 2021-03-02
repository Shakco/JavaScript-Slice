function sayWord () {
    var oldWord = document.getElementById('word').value;
    var newWord = oldWord.slice(4, 18);
    document.getElementById('newWord').innerHTML = newWord;
}

document.getElementById('generationWord').addEventListener('click', sayWord);