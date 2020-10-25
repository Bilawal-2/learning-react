import React from 'react'
import ReactDom from 'react-dom'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
//css
import './index.css'
import { FormControlLabel, FormLabel, Radio,RadioGroup } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({

  root:{
    flexGrow: 1
  },
  paper:{
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  control:{
    padding: theme.spacing(2)
  }

}));


function BookList(){

  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return(
    <Grid container className={classes.root} spacing={2} >
      
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {
            [0,1,2].map(
              (value)=>(
                <Grid key = {value} item>
                  <Paper className= {classes.paper}>
                    <Book/>
                  </Paper>
                </Grid>              
              )
            )
          }
        </Grid>        
      </Grid>  

      <Grid item xs ={12}>
        <Paper className={classes.control}>
          <Grid container>
            <Grid item>
                <FormLabel> Spacing</FormLabel>
                <RadioGroup
                  name="spacing"
                  aria-label = "spacing"
                  value = {spacing.toString()}
                  onChange = { handleChange}
                  row
                >
                  {                   
                      [0,1,2,3,4,5,6,7,8,9,10].map(
                        (value)=>(
                          <FormControlLabel
                            key = {value}
                            value = {value.toString()}
                            control = {<Radio/>}
                            label = {value.toString}
                          />
                        )

                      )                    
                  }
                </RadioGroup>
            </Grid>

          </Grid>
        </Paper>
      </Grid>     
    
    </Grid>
  )
}

const Book = () => {
  return <article>
    <Image/>
    <Title/>
    <Author/>
  </article>;
}

const Image = () => {
  return <img src="https://images-na.ssl-images-amazon.com/images/I/51200dkZwOL._AC_SX184_.jpg" alt=""/>
}
const Title = () => <h1>Forever My Duke: Unlikely Duchesses</h1>
const Author = () => <h4>Olivia Drake</h4>

ReactDom.render(
  <BookList/>
  ,document.getElementById('root')
)
