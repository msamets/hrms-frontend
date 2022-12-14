import {Alert} from "@mui/material";
import useAlert from "./useAlert";

const AlertPopup = () => {
    const { text, type } = useAlert();
  
    if (text && type) {
      return (
        <Alert
          severity={type}
          sx={{
            
            margin: "10px",
            position: 'absolute',
            zIndex: 10,
          }}
        >
          {text}
        </Alert>
      );
    } else {
      return <></>;
    }
  };


export default AlertPopup;