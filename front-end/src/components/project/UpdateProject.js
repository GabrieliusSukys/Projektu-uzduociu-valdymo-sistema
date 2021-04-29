import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProjectCard from './ProjectCard';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles({
    root: {
        height: 200,
    },
});

export default function UpdateProject({projects}) {
    const API_URL = "http://localhost:8081";
    // const [projects, setProjects] = useState([]);
    const user = JSON.parse(localStorage.getItem("token"));
    const [open, setOpen] = React.useState(false);
    // const [projects, setProjects] = useState([]);

    const [name, setName] = useState("");
    const [description, setDesc] = useState("");
    const classes = useStyles();
    const handleClickOpen = () => {
        // console.log(handleUpdate);

        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        // removeText();
    };



    const writeName = e => {
        setName(e.target.value);

    }


    const writeDesc = e => {
        // console.log(`Typed => ${e.target.value}`);
        setDesc(e.target.value);
    }

    const submitB = () => {
        console.log({ name });
        console.log({ description });
        setOpen(false);

        window.location.reload(true);
    }

    // const submitProject = (e) => {

    //     e.preventDefault();
    //     return axios.post(API_URL + "/api/projects", {
    //         description,
    //         name
    //     },
    //         {
    //             headers: {

    //                 'Authorization': 'Bearer ' + user.token


    //             }
    //         }
    //     )
    //         .then((response) => {

    //             return response;
    //         }

    //         );
    // }
    // useEffect(() => {
    //     axios.get(API_URL + "/api/projects", {
    //         headers: {
    //             "Authorization": "Bearer " + user.token 
    //         },
    //     })
    //         .then(response => {
    //        //     console.log(response);
    //      console.log(response.data);
    //          //   console.log(...response.data);
    //             setProjects(response.data);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // }, [])



    return (
        <div>


            <Button color="primary" onClick={handleClickOpen} size="small" style={{ width: '100%', textAlign: "center" }}>
                Edit
  </Button>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <form className={classes.form} noValidate
                //   onSubmit={submitProject}
                 >
                    <DialogTitle id="form-dialog-title" style={{ backgroundColor: "#c1c7c5" }} >Create project</DialogTitle>
                    <DialogContent style={{ backgroundColor: "#c1c7c5" }}>
                        <DialogContentText>

                        </DialogContentText>




                        <TextField
                            // autoFocus
                            // margin="dense"
                            id="projectName"
                            label="Project name"

                            multiline
                            fullWidth
                            variant="outlined"

                            value={name}
                            onChange={writeName}
                            margin="normal"

                        />

                        <Box>

                            <TextField

                                id="outlined-textarea"
                                label="About project"
                                placeholder="Project is..."
                                multiline
                                fullWidth
                                variant="outlined"
                                value={description}
                                onChange={writeDesc}
                            />
                        </Box>
                    </DialogContent>

                    <DialogActions style={{ backgroundColor: "#c1c7c5" }}>


                        <Button onClick={handleClose} color="primary">
                            Cancel
                </Button>
                        <Button type="submite" onClick={submitB} color="primary" className={classes.submit} disabled={!name}>
                            Confirm
                </Button>

                    </DialogActions>
                </form>
            </Dialog>

        </div>
    );
}
