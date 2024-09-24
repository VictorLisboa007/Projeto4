import Carousel from 'react-bootstrap/Carousel';

const MyCarousel = () => {
  return (
    <div>
        <Carousel>
      <Carousel.Item>
            <img src="https://w7.pngwing.com/pngs/290/216/png-transparent-majin-boo-majin-buu-frieza-goku-piccolo-gotenks-fat-purple-violet-cartoon-thumbnail.png" width={1150} height={500}/>
        <Carousel.Caption>
            <h3>Majin Buu</h3>
            <p>Majin Buu Gordo</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
            <img src="https://w7.pngwing.com/pngs/321/931/png-transparent-majin-buu-goku-trunks-frieza-dragon-ball-heroes-goku-human-cartoon-fictional-character-thumbnail.png" width={1150} height={500}/>
        <Carousel.Caption>
            <h3>Majin Buu</h3>
            <p>Majin Buu Magro</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
            <img src="https://e7.pngegg.com/pngimages/12/552/png-clipart-dragonball-kid-boo-majin-buu-goku-gotenks-dragon-ball-fighterz-bulma-goku-fictional-character-cartoon.png" width={1150} height={500}/> 
        <Carousel.Caption>
            <h3>Majin Buu</h3>
            <p>Majin Buu Criança</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default MyCarousel