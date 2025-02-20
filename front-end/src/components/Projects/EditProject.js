
import React, { useState } from 'react'
import axios from "axios";
import swal from 'sweetalert';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { RiEdit2Line } from "react-icons/ri";


export default function EditProject(id) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    console.log(id);
    console.log(maxSymbolsName);
  }

  const API_URL = 'http://localhost:8081';
  const nameIsEmpty = "inline";
  // const [open, setOpen] = React.useState(false);
  const [name, setName] = useState(id.name);
  const [description, setDesc] = useState(id.description);
  const user = JSON.parse(localStorage.getItem("token"));

const maxSymbolsName = 50;
const maxSymbolsDesc = 250;

  const restart = () => {
    { window.location.reload(true) }
  }

  const submitProject = (e) => {
    e.preventDefault();
    console.log(id);
    return axios.put(API_URL + "/api/projects/" + id.id, {
      description,
      name
    },
      {
        headers: {
          'Authorization': 'Bearer ' + user.token
        }
      }
    )
      .then((response) => {
        restart();
        handleClose();
        return response;
      },
        (error) => {
          console.log("wrong");
          swal({
            text: "No project name or description!",
            icon: "warning",
            button: "Try again",
          });
        }
      );
  }

  return (
    <div>

      <Button variant="outline-info" onClick={handleShow} className="my-2 my-sm-0" type="submit">
        Edit   <RiEdit2Line />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <form onSubmit={submitProject}>
            <div class="form-group">
              <label for="exampleInputEmail1">Project name</label>
              <input type="text" onChange={(e) => setName(e.target.value)} className="form-control m-2" placeholder="Project name" defaultValue={id.name}  maxlength={maxSymbolsName}/>
<text className="text-muted float-right"> {name.length} / {maxSymbolsName}</text>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">About project</label>
              <input type="text" onChange={(e) => setDesc(e.target.value)} className="form-control m-2" placeholder="Project is..." defaultValue={id.description}  maxLength={maxSymbolsDesc}/>
              <text className="text-muted float-right"> {description.length} / {maxSymbolsDesc}</text>
            </div>
          </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={submitProject}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}
