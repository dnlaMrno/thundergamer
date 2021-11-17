import { Link } from "react-router-dom"
import { useState } from "react";
import { Modal, Button } from "react-bootstrap"

export function ModalAlert() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div onClick={handleShow}>
                Terminar Compra
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thunder Gamer</Modal.Title>
                </Modal.Header>
                <Modal.Body> !..Ya casi la compra es tuya..¡ llena tus datos para terminar.</Modal.Body>
                <Modal.Footer>
                    <Link to='/Formulario'>
                        <Button variant="primary" >
                            Ok
                        </Button>
                    </Link>
                </Modal.Footer>
            </Modal>
        </>
    );
}



