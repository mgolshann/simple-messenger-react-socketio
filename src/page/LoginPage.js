import React from 'react';
import { Button, FormControl, Grid,  MenuItem, Select, TextField, Typography } from "@material-ui/core";
import useStyle from './style';
import classNames from 'classnames';

const LoginPage = (props) => {
    const classes = useStyle();
    const [name, setName] = React.useState("");
    const [gender, setGender] = React.useState("");

    const validation = (user) => {
        if (!user.name)
            return "لطفا نام را وارد کنید";
        else if (user.gender === "" || user.gender === -1)
            return "جنسیت را مشخص کنید";
        return null;
    }

    const submit = () => {
        const error = validation({ name, gender })
        if (error)
            return alert(error);
        props.history.push({
            pathname: "chatroom",
            state: {
                name,
                gender
            }
        })
    }
    return (
        <Grid container direction={"column"}>
            <Grid item>
                <Typography className={classes.headerText}>چت روم یونیک</Typography>
            </Grid>
            <Grid item className={classes.nameStyle} >
                <Grid item>
                    <label className={classes.lable}>نام</label>
                </Grid>
                <Grid item>
                    <TextField id="outlined-basic" label=""
                        value={name} onChange={e => setName(e.target.value)} variant="outlined" />
                </Grid>
            </Grid>
            <Grid item className={classes.nameStyle} style={{ marginTop: "2rem" }}>
                <Grid item >
                    <label className={classes.lable}>جنسیت</label>
                </Grid>
                <FormControl variant="outlined" className={classNames(classes.formControl, classes.formControl1)}>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={gender}
                        onChange={e => setGender(e.target.value)}
                        label="gender"

                    >
                        <MenuItem value={-1}>
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={0}>آقا</MenuItem>
                        <MenuItem value={1}>خانم</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid container justify={"center"} style={{ marginTop: "2rem" }}>
                <Button variant="contained" onClick={submit} color="primary">
                    ورود به چت روم
                </Button>
            </Grid>
        </Grid>
    )
}

export default LoginPage;