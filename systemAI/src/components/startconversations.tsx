import axios from 'axios';
import * as React from 'react';
import { serverhost } from '../utils';
import Cookies from 'js-cookie';
import {DialogActions,DialogContent,DialogContentText,DialogTitle,useMediaQuery,Button,Dialog,TextField} from '@mui/material';
import { useTheme } from '@mui/material/styles';
export default function Startnewconversations({SethandleStartToogle}) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [Conv_name, setConv_name] = React.useState<string>('')
  const handleStartConversation = async (name: string) => {
    try {
      const response = await axios.post(serverhost('startnewtalk'), {
        name
      });
      setOpen(false);
      const base = response.data;
      const token = base.result.conversationId;
      Cookies.set('system.ai-CON-UID909018282', token, { expires: 30 });
      SethandleStartToogle(true)
    } catch (error) {
      console.error('Error starting conversation:', error);
    }
  };
  return (
    <>
       <div className='space-bg'></div>
      <div className='m-auto w-[300px] flex flex-col justify-center items-center h-screen gap-4'>
        <Button  className='startcon  w-[300px]' variant='contained' onClick={() => setOpen(true)}>
          Start New Conversation
        </Button>
        <Button className='systemcon w-[300px]' color="success" variant='contained'>
          Install System Version
        </Button>
      </div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Start Conversation for particular topic"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <TextField id="outlined-basic" margin="dense" onChange={(e) => setConv_name(e.target.value)} className='w-full' label="ex: for fun, for space news, for weather news" variant="outlined" />

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="error" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant='contained' onClick={() => handleStartConversation(Conv_name)} autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>

    </>
  )
}
