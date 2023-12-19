import { Button, Card, Col, Row } from "react-bootstrap";
import fantasy from "../data/books/fantasy.json";

const AllTheBooks = () => {
  return (
    <Row className="g-3">
      {fantasy.map((book) => {
        return (
          <Col xs={12} sm={6} md={3} key={book.asin}>
            <Card className="book-cover d-flex flex-column">
              <Card.Img className="img-fluid" variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.category}</Card.Text>
                <Button variant="dark">€ {book.price}</Button>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default AllTheBooks;
