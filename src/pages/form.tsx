import ErrorPage from 'components/ErrorPage';
// import Modal from "components/ShareForm/Modal";
// import { useState } from "react";


const form = () => {
    // const [showModal, setShowModal] = useState(true);

    return (
      <>
        <ErrorPage statusCode={500} />
        {/* <Modal showModal={showModal} closeM={() => setShowModal(false)} /> */}
      </>
    );
}

export default form
