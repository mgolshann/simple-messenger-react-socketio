import { makeStyles } from "@material-ui/styles";


const useStyle = makeStyles(theme => ({
    headerText: {
        width: "max-content",
        margin: "2rem auto 3rem auto",
        fontSize: "3rem",
        color: "brown",
    },
    lable: {
        fontSize: "1.5rem"
    },
    nameStyle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "0.5rem"
    },
    formControl1: {
        width: "12rem"
    }
}));

export default useStyle;