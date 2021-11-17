import { useState } from "react"
import { Link } from "react-router-dom";
import { Button, Modal } from 'react-bootstrap'
import { useCartContext } from "../Context/cartContext";

export function ModalShop() {


    const { vaciarCarrito } = useCartContext()
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
                <Modal.Body>Gracias por tu compra...! te estaremos enviando un email
                    con el detalle.</Modal.Body>
                <Modal.Footer>

                    <Link to='/'>
                        <Button variant="primary" onClick={vaciarCarrito}>
                            Volver al Inicio
                        </Button>
                    </Link>
                </Modal.Footer>
            </Modal>
        </>
    );
}
