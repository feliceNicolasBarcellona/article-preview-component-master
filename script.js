const speechBubble = document.getElementById("speechBubble");
const button = document.querySelector('.share-btn');
const arrow = document.querySelector('.arrow')

button.addEventListener('click', function(){
    if (speechBubble.style.display === "block") {
      speechBubble.style.display = "none";
      button.style.backgroundColor = '';
      arrow.style.fill = '#6E8098';
      button.style.top = '';
    } else {
      speechBubble.style.display = "block";
      button.style.backgroundColor = 'hsl(214, 17%, 51%)';
      arrow.style.fill = 'white';
      button.style.top = '11px';
    }
})