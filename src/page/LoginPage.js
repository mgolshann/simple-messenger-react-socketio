import react from 'react';
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@material-ui/core";
import useStyle from './style';

const LoginPage = () => {
    const classes = useStyle();
    return (
        <Grid container direction={"column"}>
            <Grid item>
                <Typography className={classes.headerText}>چت روم یونیک</Typography>
            </Grid>
            <Grid item>
                <label>نام</label>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </Grid>
            <Grid item>
                <label>سن</label>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        // value={age}
                        // onChange={handleChange}
                        label="Age"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item>
                <Button variant="contained" color="primary">
                    Primary
                </Button>
            </Grid>
        </Grid>
    )
}

export default LoginPage;