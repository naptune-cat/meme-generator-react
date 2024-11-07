import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function MyCard(props) {
  const navigate = useNavigate();
  return (
    <Card className="mb-4" style={{ width: "18rem", margin: "25px" }}>
      {" "}
      {/* Set width to 100% to fill the column */}
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Button
          onClick={() => navigate(`/edit?url=${props.img}`)}
          variant="primary"
        >
          Edit
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MyCard;
