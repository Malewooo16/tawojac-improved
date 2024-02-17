/* eslint-disable jsx-a11y/img-redundant-alt */
import { Carousel } from "@material-tailwind/react";
 
export function CarouselDefault() {
  return (
    <Carousel className="rounded-xl" autoplay={true} loop={true}>
    
      <img
        src="./_22H7267-2.jpg"
        alt="image 1"
        className="h-[800px] w-full object-cover"
      />
      <img
        src="./_22H7390-2.jpg"
        alt="image 2"
        className="h-[800px] w-full object-cover"
      />
      <img
        src="./_22H7546-2.jpg"
        alt="image 3"
        className="h-[800px] w-full object-cover"
      />

      <img
        src="./_22H7307-2.jpg"
        alt="image 3"
        className="h-[800px] w-full object-cover"
      />
    </Carousel>
  );
}