const API_KEY = 'fbd77a45fe934f7f946a9eb19e5a5b25';

const sourcesPicker = document.getElementById('sources-picker');
const headlinesList = document.getElementById('headlines-list');

function loadSources(){
    fetch('http://newsapi.org/v2/top-headlines?language=en', {
        headers: {
            'X-Api-Key': API_KEY
        }
    })
    .then(response => response.json() )
    .then(data => {
        if(data.status == 'ok')
        {
            for(let source of data.sources)
            {
                document.createElement('option');
                Option.value = source.id;
                Option.textContent = source.name;
                sourcesPicker.appendChild(Option);
            }
        }
        
    });
}
loadSources();