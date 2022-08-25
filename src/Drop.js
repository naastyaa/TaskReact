import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";

function Drop() {
  const [file, setFile] = useState([]);

  const handleChange = function loadFile(event) {
    if (event.target.files.length > 0) {
      const file = URL.createObjectURL(event.target.files[0]);
   
      setFile(file);
      console.log(file)

    }
  };
  return (
    <div className="Drop" style={{ display: "flex", marginBottom: '20px',alignItems:'center' }}>
      
      <h6 style={{marginRight:'30px'}}>Profile photo</h6>
      
      <Avatar id="avatar" src={file}
        style={{
          width: "40px",
          height: "40px",
        }}
      />
      <input type="file" onChange={handleChange}
        id="upload"
        multiple
        accept="image/png , image/jpeg"
        style={{ display: "none" }} />
      <label htmlFor="upload" style={{ display: "flex", alignItems:'center', marginLeft:'50px'}}>
        <IconButton color="primary"
          aria-label="upload picture"
          component="span"
          >
         Change
        </IconButton>
        <Button  onClick={()=> setFile('')} aria-label="delete">
        <DeleteIcon />
        </Button>

      </label>
    </div>
  );
}
export default Drop;