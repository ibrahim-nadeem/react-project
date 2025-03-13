import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'; // ✅ Import Form

function Example1() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Signup
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Signup</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" required />
            </Form.Group>

            <Form.Group controlId="email" className="mt-2">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group controlId="apiKey" className="mt-2">
              <Form.Label>API Key</Form.Label>
              <Form.Control type="text" placeholder="Enter API key" required />
            </Form.Group>

            <Form.Group controlId="loginID" className="mt-2">
              <Form.Label>Login ID</Form.Label>
              <Form.Control type="text" placeholder="Enter login ID" required />
            </Form.Group>

            <Form.Group controlId="password" className="mt-2">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" required />
            </Form.Group>

            <Form.Group controlId="securityQuestion" className="mt-2">
              <Form.Label>Security Question</Form.Label>
              <Form.Control type="text" placeholder="Enter security question" required />
            </Form.Group>

            <Form.Group controlId="securityAnswer" className="mt-2">
              <Form.Label>Security Answer</Form.Label>
              <Form.Control type="text" placeholder="Enter security answer" required />
            </Form.Group>

            <Form.Group controlId="birthDate" className="mt-2">
              <Form.Label>Birth Date</Form.Label>
              <Form.Control type="date" required />
            </Form.Group>

            <Form.Group controlId="contactNumber" className="mt-2">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control type="text" placeholder="Enter contact number" required />
            </Form.Group>

            <Form.Group controlId="imageUpload" className="mt-2">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Signup
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example1;

// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

// function Example1() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Signup
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Signup</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//         <Form>
//           <Form.Group controlId="name">
//             <Form.Label>Name</Form.Label>
//             <Form.Control type="text" placeholder="Enter name" required />
//           </Form.Group>

//           <Form.Group controlId="email" className="mt-2">
//             <Form.Label>Email</Form.Label>
//             <Form.Control type="email" placeholder="Enter email" required />
//           </Form.Group>

//           <Form.Group controlId="apiKey" className="mt-2">
//             <Form.Label>API Key</Form.Label>
//             <Form.Control type="text" placeholder="Enter API key" required />
//           </Form.Group>
//           <Form.Group controlId="loginID" className="mt-2">
//             <Form.Label>Login ID</Form.Label>
//             <Form.Control type="text" placeholder="Enter login ID" required />
//           </Form.Group>

//           <Form.Group controlId="password" className="mt-2">
//             <Form.Label>Password</Form.Label>
//             <Form.Control type="password" placeholder="Enter password" required />
//           </Form.Group>

//           <Form.Group controlId="securityQuestion" className="mt-2">
//             <Form.Label>Security Question</Form.Label>
//             <Form.Control type="text" placeholder="Enter security question" required />
//           </Form.Group>
//           <Form.Group controlId="securityAnswer" className="mt-2">
//             <Form.Label>Security Answer</Form.Label>
//             <Form.Control type="text" placeholder="Enter security answer" required />
//           </Form.Group>

//           <Form.Group controlId="birthDate" className="mt-2">
//             <Form.Label>Birth Date</Form.Label>
//             <Form.Control type="date" required />
//           </Form.Group>

//           <Form.Group controlId="contactNumber" className="mt-2">
//             <Form.Label>Contact Number</Form.Label>
//             <Form.Control type="text" placeholder="Enter contact number" required />
//           </Form.Group>

//           <Form.Group controlId="imageUpload" className="mt-2">
//             <Form.Label>Image</Form.Label>
//             <Form.Control type="file" />
//           </Form.Group>
//         </Form>


//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default Example1;