import Service from "../../common/Service.ts";

interface ServiceCardProps {
  service: Service;
  addToCart: () => void;
}

function ServiceCard(props: ServiceCardProps) {
  const {service, addToCart} = props

  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card h-100">
        <img src={service.image} className="card-img-top" alt={service.alt}/>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-center">{service.name}</h5>
          <p className="card-text text-center">${service.price}</p>
          <button className="btn mt-auto" onClick={addToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;