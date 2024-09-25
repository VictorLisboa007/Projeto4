import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';

import style from "./MyLogin.module.css"

const MyLogin = () => {
  return (
    <div className={style.caixaLogin}>
    <Container>
    <Form>
    <span className={`material-symbols-outlined ${style.formIcon}`}>
        accessible_forward
    </span>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control size='lg' type="email" placeholder="Digite seu Email" />
        <Form.Text className="text-muted">
          Seu email está seguro conosco, confia.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control size='lg' type="password" placeholder="Digite sua Senha" />
        <Form.Text className="text-muted">
          Sua senha está mais segura ainda, pode confiar.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Lembrar Senha" />
      </Form.Group>
      <Button variant="secondary" type="submit">
        Entrar
      </Button>
    </Form>
    </Container>
    </div>
  )
}

export default MyLogin