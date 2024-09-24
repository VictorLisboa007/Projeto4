import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const MyCard = (props) => {
  return (
    <div>
    <br/>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdXXlVdKMDAcYNS6_jW99vBmiz_S6pLoZ6Qw&s" />
      <Card.Body>
        <Card.Title>Goku Super Saiyajin 3</Card.Title>
        <Card.Text>
        Goku Super Saiyajin 3 é uma das transformações mais icônicas do personagem na série "Dragon Ball Z". <p/>Nessa forma, Goku apresenta uma aparência marcante: seu cabelo se torna extremamente longo, chegando até a cintura, e assume uma cor dourada brilhante. <p/>Os traços de seu rosto ficam mais angulosos, e suas sobrancelhas desaparecem, dando um ar mais feroz.
        </Card.Text>
        <Button variant="primary">Saiba Mais</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/b6/eb/e3/b6ebe368e2b07cf8b49e570ce1c36f3a.jpg" />
      <Card.Body>
        <Card.Title>Vegeta Majin</Card.Title>
        <Card.Text>
        Vegeta Majin é uma das versões mais icônicas do personagem Vegeta, da série "Dragon Ball". <p/>Nesta forma, ele é marcado pela insígnia "M" em sua testa, que simboliza sua submissão ao poder do mágico Babidi. <p/>Essa transformação traz um aumento significativo em sua força, velocidade e habilidades de combate, tornando-o um dos lutadores mais temidos do universo.
        </Card.Text>
        <Button variant="primary">Saiba Mais</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default MyCard