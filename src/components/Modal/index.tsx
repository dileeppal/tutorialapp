import React from 'react'
import Modal from 'react-modal'

function AuthModal({ isOpen, children, ...props}: any) {
    return (
      
        <Modal isOpen={isOpen}>{children}</Modal>
     
    );
}

export default AuthModal

