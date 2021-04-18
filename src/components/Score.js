import React, { Component } from "react";
import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from '@material-ui/core';
import Logo from '../images/vs_logo.png';
import { withStyles } from '@material-ui/core/styles';
import { getCricketMatchDetails } from '../services/cricket-api';

const styles = {
    date : {
        alignItems : 'flex-start',
        marginBottom : 16,
        fontSize : 13
    },
    matchDetails : {
        marginLeft : 'auto',
        fontSize : 13
    },
    component : {
        background : '#3f51b5',
        color : '#fff',
        alignItems : 'flex-start',
        display : 'flex',
        padding : 10
    }
}

class Score extends Component {

    constructor(props){
        super(props);
        this.state = {
            detail : {}
        }
    }

    getDetails(id){
        getCricketMatchDetails(id).then(data => {
            this.setState({detail : this.state.detail = data});
        }).catch(error => console.log(error));
    }

    getScore = (score) => {
        if(!score) return {}
        let numb  = score  && score.split('/');
        let numbid = numb && numb[1].split('v');
        let ans = {}
        ans.first = numb[0] && numbid[0] && numb[0].replace(/[^0-9]/g, '') + '/' + numbid[0].replace(/[^0-9]/g, '');
        ans.second = numb[2] && numbid[1] && numbid[1].replace(/[^0-9]/g, '') + '/' + numb[2].replace(/[^0-9]/g, '');
        return ans;
    }

    render() {
        let score = this.getScore(this.state.detail.score);
        return (
            <Card style={{marginTop: 20, width: 700}}>
                <Box className={this.props.classes.component}>
                    <Typography>{this.props.match["team-1"]} VS {this.props.match["team-2"]}</Typography>
                    <Button onClick = {() => this.getDetails(this.props.match.unique_id)} variant="contained" size="small" color="primary" style={{marginLeft: 'auto', border: '1px solid #fff'}} disabled={this.props.match.matchStarted ? false : true}>Get Score</Button>
                </Box>
                <CardContent>
                    <Box style={{display: 'flex'}}>
                        <Typography className={this.props.classes.date}>{new Date(this.props.match.dateTimeGMT).toLocaleString()}</Typography>
                        <Typography className={this.props.classes.matchDetails}>{this.props.match.matchStarted ? "Match Started" : "Match Not Started"}</Typography>
                    </Box>
                    <Grid container justify="center" alignItems="center">
                        <Grid>
                            <Typography variant="h5">{this.props.match["team-1"]}</Typography>
                            <Typography>{score.first}</Typography>
                        </Grid>
                        <Grid>
                            <img style={{width: 90, height: 90, margin: 10}} src={Logo} alt="Logo-VS" />
                        </Grid>
                        <Grid>
                            <Typography variant="h5">{this.props.match["team-2"]}</Typography>
                            <Typography>{score.second}</Typography>
                        </Grid>
                        
                    </Grid>
                </CardContent>
                <CardActions>
                    <Grid container justify="center" style={{display: 'block'}}>
                        <Typography>{ this.state.detail.score }</Typography>
                        <Typography styel={{fontSize:12}}>Limited in person attendance</Typography>
                    </Grid>
                </CardActions>
            </Card>

        )
    }
}

export default withStyles(styles)(Score);