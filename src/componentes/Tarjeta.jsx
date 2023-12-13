import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Tarjeta() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" alt="imagen del producto" />
      <Card.Body>
        <Card.Title>Producto Nombre</Card.Title>
        <Card.Text>
         Precio: $10000
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
  );
}

export default Tarjeta;