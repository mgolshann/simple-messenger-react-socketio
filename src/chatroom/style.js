import { makeStyles } from "@material-ui/styles";


const useStyle = makeStyles(theme => ({
    paper: {
        width: "50rem",
        height: "max-content",
        margin: "3rem auto",
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
        height: "20rem"
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
    btnSend: {
        margin: "1rem"
    }
}));

export default useStyle;