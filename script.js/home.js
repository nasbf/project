
const menu = document.querySelector("#menu")
const hambutton = document.querySelector('nav');

menu.addEventListener('click', () => {
    menu.classList.toggle('show');
    hambutton.classList.toggle('show');
});





const photos = [
    {
        id: "pozo claro",
        imgSrc: "images/pozoclaroexterior.webp"
    },
    {
        id: "pozo claro",
        imgSrc: "images/pozoclarocapilla2.webp"
    },
    {
        id: "pozo claro",
        imgSrc: "images/capilla_pozoclaro-L.jpg"
    },
    {
        id: "pozo claro",
        imgSrc: "images/pozoclarobosque3.webp"
    },
    {
        id: "remanso",
        imgSrc: "images/capilla_remanso.webp"
    },
    {
        id: "nogales",
        imgSrc: "images/salon_los_nogales.webp"
    }
]

function photo(items) {
    return `<figure>
                <img src="${items.imgSrc}" alt=${items.id} loading = "lazy">
                <figcaption>
                    <h3> Country State ${items.id}</h3>
                </figcaption>
            </figure>`;

}


function renderitems(photos) {
    const html = photos.map(photo);
    document.querySelector(".gallery").innerHTML = html.join(" ");
    // const pozoclaro = photos.filter(photo => photo.id === "pozo claro");
    //     renderitems (pozoclaro);
}

const first = document.getElementById("home");
first.addEventListener(`click`, () => {
    const onlypozoclaro = photos.filter(photo => photo.id === "pozoclaro");
    renderitems(onlypozoclaro);
});


const second = document.getElementById("more");
second.addEventListener(`click`, () => {
    function desaperSection() {
        return `<section>
                    <h3>Another Fantastic States</h3>
                <p>Gourmet Real counts with other locations according your neededs </p>
                </section>`;

    }

    const heroElement = document.querySelector("#welcome");
    heroElement.innerHTML = desaperSection();

    const imagenElement = document.querySelector("#firstimagen");
    imagenElement.style.display = "none";

    const diferentPozoClaro = photos.filter(photo => photo.id !== "pozo claro");
    renderitems(diferentPozoClaro);


});



const galleryTotal = document.getElementById("gallery");
galleryTotal.addEventListener(`click`, () => {
    renderitems(photos);
})

