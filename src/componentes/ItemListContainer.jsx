import Container from 'react-bootstrap/Container';

export const ItemListContainer=({greeting="No se especifico greeting"})=>(
    <Container className='mt-3'>
        <h2>{greeting}</h2>
    </Container>
)