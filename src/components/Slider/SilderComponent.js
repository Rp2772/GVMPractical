import { useHistory } from "react-router-dom";
import Slider from "react-slick";
import { Card } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SilderComponent = ({ data, title }) => {
  let history = useHistory();

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const handleCardClick = (details) => {
    history.push("/details", { details });
  };

  return (
    <div>
      <h4> {title} </h4>
      <Slider {...settings}>
        {data.map((item) => (
          <div>
            <Card
              onClick={() => handleCardClick(item)}
              style={{ width: "18rem", cursor: "pointer" }}
            >
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SilderComponent;
