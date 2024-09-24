import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const MyAlert = () => {
    const [show, setShow] = useState(true);
    
  return (
    <div>
        <Alert variant="warning">
          Alerta muito louco mesmo de Verdade
        </Alert>
        <Alert variant="secondary">
          Alerta muito louco mesmo de Verdade mais ainda
        </Alert>
        <>
      <Alert show={show} variant="success">
        <Alert.Heading>My Alert</Alert.Heading>
        <p>
          Este alerta é muito importante para algo que não sei o que é, mais é sim muito importante
        </p>
        <hr />
        <p>
            Você pode fechá-lo clicando no botão abaixo
        </p>
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Fechar Alerta
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Mostrar Alerta</Button>}
    </>
    </div>
  )
}

export default MyAlert