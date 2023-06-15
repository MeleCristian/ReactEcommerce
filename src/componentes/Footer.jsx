import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const style={list:{listStyle:"none"},subrayado:{textDecorationLine:"underline"}}
export const Footer =()=>(
    <Container fluid className="bg-primary text-white">
        <ul style={style.list}>
            <Row>
                <Col>
                    <li>
                        <ul style={style.list}>
                            <li style={style.subrayado}>Medios de pago:</li>
                            <li>Tarjeta debito</li>
                            <li>Tarjeta credito</li>
                            <li>Efectivo</li>
                            <li>Transferencia</li>
                        </ul>
                    </li>
                </Col>
                <Col>
                    <li>
                        <ul style={style.list}> 
                            <li style={style.subrayado}>Redes sociales:</li>
                            <li>Instagram</li>
                            <li>Facebook</li>
                        </ul>
                    </li>
                </Col>
                <Col>
                    <li>
                        <ul style={style.list}>
                            <li style={style.subrayado}>Contactanos:</li>
                            <li>Whatsapp</li>
                            <li>Mail</li>
                        </ul>
                    </li>
                </Col>
            </Row>
        </ul>
    </Container>
)