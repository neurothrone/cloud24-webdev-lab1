import {services} from "../../common/services.ts";
import Service from "../../common/Service.ts";
import ServiceCard from "./ServiceCard.tsx";

interface ServiceListProps {
  addToCart: (service: Service) => void;
}

function ServiceList(props: ServiceListProps) {
  const {addToCart} = props;
  return (
    <div id="servicesGrid" className="row g-3">
      {services.map((service) => {
        return (
          <ServiceCard key={service.name}
                       service={service}
                       addToCart={() => addToCart(service)}/>
        );
      })}
    </div>
  );
}

export default ServiceList;