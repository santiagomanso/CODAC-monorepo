// ** MUI Imports
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountOutline from 'mdi-material-ui/AccountOutline';
import EmailOutline from 'mdi-material-ui/EmailOutline';
import MessageOutline from 'mdi-material-ui/MessageOutline';
// ** Icons Imports
import Phone from 'mdi-material-ui/Phone';

const FormLayoutsIcons = () => {
  return (
    <Card>
      <CardHeader
        title="Basic with Icons"
        titleTypographyProps={{ variant: 'h6' }}
      />
      <CardContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Full Name"
                placeholder="Leonard Carter"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountOutline />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="email"
                label="Email"
                placeholder="carterleonard@gmail.com"
                helperText="You can use letters, numbers & periods"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailOutline />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="number"
                label="Phone No."
                placeholder="+1-123-456-8790"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Phone />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                minRows={3}
                label="Message"
                placeholder="Bio..."
                sx={{ '& .MuiOutlinedInput-root': { alignItems: 'baseline' } }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MessageOutline />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" size="large">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default FormLayoutsIcons;
