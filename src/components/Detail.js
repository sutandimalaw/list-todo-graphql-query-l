import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import './style.css'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const Detail = (param) => {
    let genres ="";
    const detailData = param.data[0]
    if(detailData){
        genres = detailData.genres.toString()
        // console.log("tes open", detailData.id)
       
    }
    
    const handleClose = () => {
        param.setOpen(false);
        param.setParamId()
    }
    
  return (
    <div>
        <Modal
            open={param.open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <div style={{marginBottom:20}}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Detail
                    </Typography>
                </div>
               
                { detailData && (
                    <div className='section'>
                    <div className='row'>
                        <h3 style={{width:'10%'}}>Id</h3> <p style={{fontWeight:'bold'}}>:</p>
                        <div className='val'>{detailData.id}</div>    
                    </div>
                    <div className='row'>
                        <h3 style={{width:'10%'}}>Title</h3> <p style={{fontWeight:'bold'}}>:</p>
                        <div className='val'>{detailData.title.english}</div>
                    </div>
                    <div className='row'>
                        <h3 style={{width:'10%'}}>Type</h3>  <p style={{fontWeight:'bold'}}>:</p>
                        <div className='val'>{detailData.type}</div>
                    </div>
                    <div className='row'>
                        <h3 style={{width:'10%'}}>Genres</h3>  <p style={{fontWeight:'bold'}}>:</p>
                        <div className='val'>{genres}</div>     
                    </div>
                    <div className='row'>
                        <h3 style={{width:'10%'}}>Episode</h3>  <p style={{fontWeight:'bold'}}>:</p>
                        <div className='val'>{detailData.episodes}</div>     
                    </div>
                    <div className='row'>
                        <h3 style={{width:'10%'}}>Season Year</h3>  <p style={{fontWeight:'bold'}}>:</p>
                        <div style={{paddingTop:2}}>{detailData.seasonYear}</div>     
                    </div>
                    <div className='row'>
                        <h3>Description</h3>  <p style={{fontWeight:'bold'}}>:</p>
                           
                    </div>
                    <div>
                    <div className='val'>{detailData.description}</div>  
                    </div>
                
                    </div>
                    )
                }
                
            </Box>
        </Modal>
    </div>
  )
}

export default Detail