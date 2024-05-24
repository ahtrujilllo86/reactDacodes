import { Modal, Grid } from "@mui/material";
import { useState } from "react";

function ModalComponent() {
  const [open, setOpen] = useState(true);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const style = {
    position: "absolute",
    top: "20%",
    left: "40%",
    width: 400,
    height: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={style}
    >
      <Grid container>
        <Grid item xs={8} md={6}></Grid>
      </Grid>
    </Modal>
  );
}

export default ModalComponent;
