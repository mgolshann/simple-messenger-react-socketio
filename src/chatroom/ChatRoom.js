import { Grid, IconButton, InputBase, Paper, Typography } from '@material-ui/core';
import React from 'react';
import io from 'socket.io-client';
import useStyle from './style';
import SendIcon from '@material-ui/icons/Send';

const ChatRoom = (props) => {

    const classes = useStyle();
    const socket = React.useRef(io('http://localhost:3010/socket', { transports: ['websocket', 'polling', 'flashsocket'] }));

    const [newMessage, setnewMessage] = React.useState("");
    //const socket = React.useRef(io.connect("http://localhost:3010/socket"));

    React.useEffect(() => {
        //console.log(props.location.state)
    })

    return (
        <Paper className={classes.paper}>
            <Grid container direction={"column"}>
                <Grid item className={classes.header} container alignItems={"center"} justify={"center"}>
                    <Typography className={classes.headerText}>Chat Room</Typography>
                </Grid>
                <Grid item className={classes.middle}>
                    
                </Grid>
                <Grid direction={"row-reverse"} item className={classes.footer} container justify={"center"} alignItems={"center"}>
                    <Grid item xs>
                        <InputBase className={classes.input}
                            value={newMessage} onChange={e => setnewMessage(e.target.value)}  />
                    </Grid> 
                    <Grid item>
                        <IconButton className={classes.btnSend}>
                            <SendIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default ChatRoom;