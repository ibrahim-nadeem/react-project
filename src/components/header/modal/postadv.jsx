 

 import { useState } from "react";
 import Button from "react-bootstrap/Button";
 import Modal from "react-bootstrap/Modal";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 
 function Example() {

  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

     const handleSubmit = (e) => {
         e.preventDefault();

    console.log("Form Submitted");

  };

return (
         <>
          <Button variant="success" onClick={handleShow}>
              Post Advertisement  
          </Button>

      <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Post Advertisement</Modal.Title>
              </Modal.Header>
              <Modal.Body>

         <div className="containers mt-4">
                      <h3 className="text-success">Post Advertisement</h3>
                     <form className="border rounded shadow-sm" onSubmit={handleSubmit}>
                        <div className="mb-3">
                          <label className="form-label">Name</label>
                         <input type="text" name="name" className="form-control" required />
                       </div>            <div className="mb-3">
                 <label className="form-label">Price</label>
                 <input type="number" name="price" className="form-control" required />
               </div>

               <div className="mb-3">
                 <label className="form-label">Description</label>
                 <textarea name="description" className="form-control" required />
               </div>

               <div className="mb-3">
                 <label className="form-label">Features</label>
                 <textarea name="features" className="form-control" />
               </div>

               <div className="mb-3 d-flex gap-3">
                 <div>
                   <label className="form-label">Starts On</label>
                   <input type="date" name="startDate" className="form-control" required />
                 </div>
                 <div>
                   <label className="form-label">Ends On</label>
                   <input type="date" name="endDate" className="form-control" required />
                 </div>
               </div>

               <div className="mb-3 d-flex gap-3">
                 <select name="category" className="form-select" required>
                   <option value="">Select Category</option>
                   <option value="Real Estate">Real Estate</option>
                   <option value="Vehicles">Vehicles</option>
                   <option value="Jobs">Jobs</option>
                 </select>

                 <select name="cityArea" className="form-select" required>
                   <option value="">Select City Area</option>
                   <option value="Downtown">Downtown</option>
                   <option value="Suburbs">Suburbs</option>
                 </select>

                 <select name="type" className="form-select" required>
                   <option value="">Select Type</option>
                   <option value="Sale">Sale</option>
                   <option value="Rent">Rent</option>
                 </select>
               </div>

               <div className="mb-3">
                 <label className="form-label">Image</label>
                 <input type="file" className="form-control" />
               </div>

               <button type="submit" className="btn btn-primary">Post Advertisement</button>
            </form>
           </div>

         </Modal.Body>
       </Modal>
     </>
   );
}

export default Example;

 