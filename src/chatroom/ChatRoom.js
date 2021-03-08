import { Grid, IconButton, InputBase, Paper, Typography } from '@material-ui/core';
import React, { useRef } from 'react';
import io from 'socket.io-client';
import useStyle from './style';
import SendIcon from '@material-ui/icons/Send';
import DeleteIcon from '@material-ui/icons/Delete';
import classNames from 'classnames';

const ChatRoom = (props) => {

    const removeItemWithSlice = (items, index) => {
        if (index === -1) return items;
        return [...items.slice(0, index), ...items.slice(index + 1)]
    }

    const classes = useStyle();
    const scrollableGrid = useRef();
    //const socket = React.useRef(io.connect("http://localhost:3010/socket"));
    const socket = React.useRef(io('http://localhost:3010/socket', { transports: ['websocket', 'polling', 'flashsocket'] }));

    const [messages, setMessages] = React.useState([]);
    const [newMessage, setnewMessage] = React.useState([]);

    const sendMessage = () => {
        if (!newMessage) return;
        socket.current.emit("messageFromClientToServer", {
            msg: newMessage,
            sender: {
                name: props.location.state.name,
                gender: props.location.state.gender
            }
        });
        setnewMessage("");
    };

    const _handleInput = (e) => {
        if (e.key === "Enter") {
            sendMessage();
        }
    }

    const onDeleteClick = (id) => {
        socket.current.emit("deleteMsg", id);
    }

    React.useEffect(() => {
        //console.log(props.location.state)
        // add msg
        socket.current.on("messageFromServerToClient", (msg) => {
            setMessages(messages => messages.concat(msg));
            scrollableGrid.current.scroll(0, scrollableGrid.current.scrollHeight);
        });
        // delete msg
        socket.current.on("deleteMsg", id => {
            setMessages((messages) => {
                let findIndex = -1;
                messages.forEach((message, index) => {
                    if (message.id === id) findIndex = index;
                });
                return removeItemWithSlice(messages, findIndex);
            })
        })
    }, []);

    return (
        <Paper className={classes.paper}>
            <Grid container direction={"column"}>
                <Grid item className={classes.header} container alignItems={"center"} justify={"center"}>
                    <Typography className={classes.headerText}>Chat Room</Typography>
                </Grid>
                <Grid item className={classes.middle} ref={scrollableGrid}>
                    {
                        messages.map((message) =>
                            <Grid key={message.id} item container className={classNames(classes.messageParent,
                                message.sender.gender !== props.location.state.gender && classes.message_reverse)}
                                alignItems={"center"}>
                                <Grid item>
                                    <img title={message.sender.name} src={message.sender.gender === 0 ? "/images/male-avatar.png" : "/images/woman-avatar.png"}
                                        alt={message.sender.name} className={classes.avatar} />
                                </Grid>
                                <Grid item>
                                    <div className={classNames(classes.messageBorder,
                                        message.sender.name !== props.location.state.name ? classes.messageMe : classes.messageHe)}>
                                        <Typography className={classes.sender}>
                                            {message.sender.name}
                                        </Typography>
                                        <Typography className={classes.msg}>
                                            {message.msg}
                                        </Typography>
                                        <Grid container>
                                            <Grid item xs>
                                                <Typography className={classes.date}>
                                                    {message.date.split('T')[1].split('.')[0]}
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                {
                                                    message.sender.name === props.location.state.name && 
                                                    <IconButton className={classes.deleteBtn}
                                                        onClick={() => onDeleteClick(message.id)}>
                                                        <DeleteIcon />
                                                    </IconButton>
                                                }
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Grid>
                            </Grid>
                        )
                    }
                </Grid>
                <Grid direction={"row-reverse"} item className={classes.footer} container justify={"center"} alignItems={"center"}>
                    <Grid item xs>
                        <InputBase className={classes.input} onKeyDown={_handleInput}
                            value={newMessage} onChange={e => setnewMessage(e.target.value)} />
                    </Grid>
                    <Grid item>
                        <IconButton onClick={sendMessage} className={classes.btnSend}>
                            <SendIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default ChatRoom;