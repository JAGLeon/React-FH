// const getImgPromesa = () => new Promise(resolve => resolve('https://sadsadasda.com'));
// getImgPromesa().then(console.log)

const getImg = async () => {
    try {
        const apiKey = '11YDTKJYeatZsKKD1pvbjSGc9pt8svKG';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        // manejo del error
        console.error(error);
    }
}
getImg();