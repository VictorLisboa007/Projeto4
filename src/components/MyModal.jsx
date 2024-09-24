import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const MyModal = () => {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Aviso Muito Importante</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Um aviso mais que importante que é só eu poderia lhe avisar disso</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary">Salvar</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  )
}

export default MyModal