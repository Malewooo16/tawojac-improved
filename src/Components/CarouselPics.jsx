/* eslint-disable jsx-a11y/img-redundant-alt */
import { Carousel } from "@material-tailwind/react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

 
export  default function CarouselDefault({handleImageLoad}) {
  return (
    <Carousel className="rounded-xl" autoplay={true} loop={true} >
      
      <div className="w-full bg-blue-500 flex flex-col items-center justify-center h-[800px]" style={{backgroundImage:'url("./intro.svg")'}}>
        <p className="text-white text-2xl text-center">Welcome to</p>
        <p className="text-white text-2xl text-center">Tanzania Women Journalists Advocates for Children Rights</p>
      </div>
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
        src="./_22H7500-2.jpg"
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

// const Carousela = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000, // Adjust the autoplay speed in milliseconds
//   };

//   return (
//     <Slider {...settings}>
      
//       <div className="w-full h-64 bg-green-500 flex items-center justify-center">
//         <p className="text-white text-2xl">Slide 2</p>
//       </div>
//       <div className="w-full h-64 bg-red-500 flex items-center justify-center">
//         <p className="text-white text-2xl">Slide 3</p>
//       </div>
//       {/* Add more slides as needed */}
//     </Slider>
//   );
// };
