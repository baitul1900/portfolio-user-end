import { Splide, SplideSlide  } from "@splidejs/react-splide";
import ServiceCard from "../Service Component/ServiceCard";
import { useEffect } from "react";
import serviceData from "../../api/api";
const ServiceSlider = () => {

    const splideOptions = {
        gap: '1rem',
        height: '100%',
        rewind : true,
        perPage: 3,
        perMove: 1,
        breakpoints: {
          640: {
            perPage: 1,
          },
          768: {
            perPage: 2,
          },
          1024: {
            perPage: 3,
          },
        }
      };


      const {serviceList, serviceRequestList} = serviceData()

  useEffect(() => {
    serviceRequestList();
  }, []);

      
      


  return (
    <div className="container mx-auto mt-10 mb-10">
      <Splide
        
         options={splideOptions}
         aria-label="My Favorite Images"
       >
      
        {
          serviceList.map((servicedata, i) => {
            return (
              <SplideSlide key={i}>
              <ServiceCard/>
            </SplideSlide>
            )
          })
        }
      </Splide>
    </div>
  );
};

export default ServiceSlider;
