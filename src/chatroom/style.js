import { makeStyles } from "@material-ui/styles";


const useStyle = makeStyles(theme => ({
    paper: {
        width: "50rem",
        height: "max-content",
        margin: "3rem auto",
        scrollBehavior: "smooth"
    },
    header: {
        background: "#DDE",
        height: "5rem"
    },
    headerText: {
        fontSize: "2.5rem",
        marginRight: "1rem"
    },
    middle: {
        background: "white",
        height: "20rem",
        overflowY: "auto",
        
    },
    footer: {
        background: "#DDE",
        height: "max-content"
    },
    input: {
        flex: "1",
        width: "97%",
        background: "#fafafa",
        padding: "1rem",
        border: "2px solid #cacaca",
        borderRadius: "1rem",
        height: "4rem",
        textAlign: "left",
        direction: "ltr"
    },
    avatar: {
        width: "4rem",
        borderRadius: "50%",
        marginLeft: "1rem"
    },
    btnSend: {
        margin: "1rem"
    },
    messageParent: {
        marginTop: "1rem",
        alignItems: "center"
    },
    message_reverse: {
        flexDirection: "row-reverse"
    },
    messageBorder: {
        border: "1px solid #ececec",
        borderRadius: "2rem",
        backgroundColor: "#ebebebe",
        padding: "1rem 1.5rem",
    },
    msg: {
        direction: "ltr"
    },
    sender: {
        color: "#aaa",
        fontSize: "0.8rem",
        marginBottom: "1rem"
    },
    date: {
        color: "#aaa",
        fontSize: "0.8rem",
        marginTop: "1rem"
    },
    messageMe: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        marginLeft: "1rem",
        position: "relative",
        background: "#ebebeb",
        borderRadius: ".4em",
        "&:after": {
            content: "''",
            position: "absolute",
            left: "0",
            top: "50%",
            width: "0",
            height: "0",
            border: "20px solid transparent",
            borderRightColor: "#ebebeb",
            borderLeft: "0",
            borderBottom: "0",
            marginTop: "-10px",
            marginLeft: "-20px"
        }
    },
    messageHe: {
        flexDirection: "column",
        alignItems: "flex-end",
        position: "relative",
        background: "#ebebeb",
        borderRadius: ".4em",
        "&:after": {
            content: "''",
            position: "absolute",
            right: "0",
            top: "50%",
            width: "0",
            height: "0",
            border: "20px solid transparent",
            borderLeftColor: "#ebebeb",
            borderRight: "0",
            borderBottom: "0",
            marginTop: "-10px",
            marginRight: "-20px"
        }
    },
    deleteBtn: {
        width: "1.2rem",
        height: "1.2rem",
        marginTop: "0.6rem"
    }
}));

export default useStyle;