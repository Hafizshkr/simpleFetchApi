const getImgs = document.getElementById("random")


const randomImgs = () => {
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(res => {
        return res.json();
    })

    .then(data => {
    
      const imgUrl = data[0]?.url;
      const markUp = `<li img src="${imgUrl}" > </li>`;
      if (imgUrl) {
        document.body.innerHTML += `<img src="${imgUrl}">`
      }
      else {
        console.error('invalid data format');
      }
        document.querySelector("ul").insertAdjacentHTML('beforeend',markUp)
    })

    .catch(error => {
        console.log(error)
    });
}


getImgs.addEventListener('click', randomImgs )