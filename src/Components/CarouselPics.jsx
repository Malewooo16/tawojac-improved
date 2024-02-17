/* eslint-disable jsx-a11y/img-redundant-alt */
import { Carousel } from "@material-tailwind/react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
 
export function CarouselDefault({handleImageLoad}) {
  return (
    <Carousel className="rounded-xl" autoplay={true} loop={true}>
    
      <LazyLoadImage
        src="./_22H7267-2.jpg"
        alt="image 1"
        className="h-[800px] w-full object-cover"
        effect="blur"
        width={1350}
       
      />
      <LazyLoadImage
        src="./_22H7390-2.jpg"
        alt="image 2"
        className="h-[800px] w-full object-cover"
        effect="blur"
        width={1350}
      />
      <LazyLoadImage
        src="./_22H7546-2.jpg"
        alt="image 3"
        className="h-[800px] w-full object-cover"
        effect="blur"
        width={1350}
      />

      <LazyLoadImage
        src="./_22H7307-2.jpg"
        alt="image 3"
        className="h-[800px] w-full object-cover"
        effect="blur"
        width={1350}
      />
    </Carousel>
  );
}