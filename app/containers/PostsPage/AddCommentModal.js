import React from 'react';
import Modal from 'react-modal';
import {
    ModalInner,
    ModalHeader,
    ModalContent,
    ModalFooter,
    SaveCommentButton,
    CancelButton,
    Form,
    Input,
    Label,
    TextArea,
    RowWrapper,
} from './styledElements';

export default function AddCommentModal({
    openAddCommentModal,
    closeAddCommentModal,
    handleContentChange,
    commentForm,
    handleSaveComment,
}) {

    const updateContentChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const { title, content} = commentForm;
        const newCommentForm = {
            ...commentForm,
            [name]: value,
        };

        handleContentChange(newCommentForm);
    }

    return (
        <Modal
            isOpen={openAddCommentModal}
            onRequestClose={closeAddCommentModal}
            className='modal'
            overlayClassName='modal-overlay'
            >
            <ModalInner>
                <ModalHeader>{`Add Comment`}</ModalHeader>
                <ModalContent>
                <Form>
                    <RowWrapper>
                        <Label>{`Title`}</Label>
                        <Input name='title' placeholder='Title' onChange={updateContentChange} value={commentForm.title} />
                    </RowWrapper>
                    <RowWrapper>
                        <Label>{`Content`}</Label>
                        <TextArea name='content' placeholder='Content' onChange={updateContentChange} value={commentForm.content} />
                    </RowWrapper>
                </Form>
                </ModalContent>
                <ModalFooter>
                    <SaveCommentButton onClick={handleSaveComment}>{`save`}</SaveCommentButton>
                    <CancelButton onClick={closeAddCommentModal}>{`cancel`}</CancelButton>
                </ModalFooter>
            </ModalInner>
        </Modal>
    )
}