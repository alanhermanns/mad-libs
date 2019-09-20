function uponButtonClick(){
    const nounInput = document.getElementById('noun');
    const noun = nounInput.value
    const nounSpace = document.getElementById('noun-space');
    nounSpace.textContent = noun;
    const adjitiveInput = document.getElementById('adjitive');
    const adjitive = adjitiveInput.value;
    const adjitiveSpace = document.getElementById('adjitive-space');
    adjitiveSpace.textContent = adjitive;
    const verbInput = document.getElementById('verb');
    const verb = verbInput.value;
    const verbSpace = document.getElementById('verb-space');
    verbSpace.textContent = verb;
    const story = document.getElementById('story');
    story.classList.add('black');
    story.classList.remove('bisque');
    const label = document.getElementsByClassName('')
    label.classList.add('hidden');

    
}   