import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

type ImageSlides = {
  slideImages: string[],
  alt: string,  // The common alt-text to be used for all images.
};


export default function Slideshow({ slideImages, alt }: ImageSlides) {
  return (
    <div className="slide-container">
      <Slide duration={2000}>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <figure>
              <img src={slideImage} alt={alt} />
            </figure>
          </div>
        ))}
      </Slide>
    </div>
  )
}
