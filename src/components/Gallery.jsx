import gal1 from "../assets/gallery/gal1.png"
import gal2 from "../assets/gallery/gal2.png"
import gal3 from "../assets/gallery/gal3.png"
import gal4 from "../assets/gallery/gal4.png"
import Galleryreusable from "./reusable/Galleryreusable"

const Gallery = () => {
    return (
        <div className="lg:flex lg:gap-x-5 ">
            <Galleryreusable gal1={gal1} />
            <Galleryreusable gal1={gal2} />
            <Galleryreusable gal1={gal3} />
            <Galleryreusable gal1={gal4} />
        </div>
    )
}

export default Gallery