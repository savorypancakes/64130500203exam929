import React, {useState} from 'react'
import { ModalHeader, ModalBody, Modal, ModalFooter, Button } from 'reactstrap';

const ClickablePhoto = ({img, title, description}) => {
    const [isOpen, setisOpen] = useState(false)
    const onClickHandler = () => {
        setisOpen(!isOpen)
    }
    return (
        <div><img src={img} onClick={onClickHandler} className = "cats"/>
            <Modal isOpen={isOpen} toggle={onClickHandler}>
                <ModalHeader toggle={onClickHandler}>
                    {title}
                </ModalHeader>
                <ModalBody>
                    {description}
                </ModalBody>
                <ModalFooter>
                    <Button onClick={onClickHandler}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal></div>
    )
}

export default ClickablePhoto