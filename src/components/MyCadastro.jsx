import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import style from "./MyCadastro.module.css"

const MyCadastro = () => {
  return (
<div className={style.caixaCadastro}>
    <Container>
    <Form>
        <div className={style.ficaNoMeio}>
        <span className={`material-symbols-outlined ${style.iconForm}`}>
        adb
        </span>
        </div>
      <Row className="mb-3">
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Nome Completo</Form.Label>
        <Form.Control placeholder="Digite seu Nome"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Digite seu Email" />
      </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Digite sua Senha" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Confirme sua Senha</Form.Label>
          <Form.Control type="password" placeholder="Digite sua Senha de Novo" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Endereço</Form.Label>
        <Form.Control placeholder="Digite seu Endereço" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>CEP</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Estado</Form.Label>
          <Form.Select defaultValue="Escolha...">
            <option>Espirito Santo</option>
            <option>Rio de Janeiro</option>
            <option>São Paulo</option>
            <option>Minas Gerais</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Cidade</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Li e Aceito os Termos e Condições" />
      </Form.Group>
    <div className={style.ficaNoMeio2}>
      <Button variant="primary" type="submit" className={style.myBtn}>
        Cadastrar
      </Button>
    </div>
    </Form>
    </Container>
</div>
  )
}

export default MyCadastro