import React, { useState } from 'react'
import { ModalHeader, ModalBody, Modal, ModalFooter, Button } from 'reactstrap';import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { render } from '@testing-library/react';
const ClickablePhoto = ({ img, title, description, id }) => {
    const [isOpen, setisOpen] = useState(false)
    const [username, setusername] = useState("")
    const [comment, setcomment] = useState("")
    const [likes, setLike]=useState([
        {
            id:"0",
            likes: 10,
        }, 
        {
            id:"1",
            likes: 20,
        },
        {
            id:"2",
            likes: 11,
        }, 
        {
            id:"3",
            likes: 3,
        },

    ])
    const [isLiked, setisLiked] = useState(null)
    const [count, setCount] = useState(0);
    const onClickHandler = () => {
        setisOpen(!isOpen)
    }

    const counter = () => {
        let tempLikes = [...likes]

        tempLikes.find((like) => like.id === id).likes += 1
        setLike(tempLikes)
    }
    

    return (
        <div><img src={img} onClick={onClickHandler} className="cats" />
            <Modal isOpen={isOpen} toggle={onClickHandler}>
                <ModalHeader toggle={onClickHandler}>
                    {title}
                </ModalHeader>
                <ModalBody>
                    {description}
                    <form>
                        <label>
                            Username:
                            <input className = "username_box" type='text' name='username' onChange={(e) => setusername(e.target.value)} value={username} />
                        </label>
                        <label>
                            Comment:
                            <input className = "comment_box" type='text' name='comment' onChange={(e) => setcomment(e.target.value)} value={comment} />
                        </label>
                        <input className = "submit" type='submit' value='Submit' />
                    </form>
                </ModalBody>
                <ModalFooter>
                    <div className="counter--count">
                        <h1>{likes.find((like) => like.id === id).likes}</h1>
                    </div>
                    <FontAwesomeIcon icon={faThumbsUp}  onClick = {counter} className="icon"/>
                    <Button className = "btn btn-warning" onClick={onClickHandler}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal></div>
    )
}

export default ClickablePhoto