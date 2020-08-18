
let apiKey = 'BTKGgJdylDWmLpaFZ6xvauBxexgigz7B';
function myFunction() {
    document.getElementById('btnSearch').addEventListener('click', event => {
        if(!document.getElementById('inpSearch').value) {
            return alert('write in field');
        }
        event.preventDefault();
        let url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=9&q=`;
        let str = document.getElementById('inpSearch').value.trim();
        url = url.concat(str);
        console.log(url);
        fetch(url)
        .then(response => response.json() )
        .then(data => {
            console.log(data.data);
            console.log(data.meta);
            for(let i = 0; i <= data.data.length; i++){
                let fig = document.createElement('figure');
                let img = document.createElement('img');
                let p = document.createElement('figcaption');
                img.src = data.data[i].images.downsized.url;
                img.alt = data.data[i].title;
                p.textContent = data.data[i].title;
                fig.appendChild(p);
                fig.appendChild(img);
                let out = document.querySelector('#out');
                out.insertAdjacentElement('afterbegin', fig);
            }

        })
        .catch(err => {
            console.error(err);
        });
    });
    document.getElementById('btnClear').addEventListener('click', event => {
        event.style = 'display, none';
    })
}

myFunction();
