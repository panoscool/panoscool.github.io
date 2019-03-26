import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Grid } from "@material-ui/core";
import avatarImg from "../assets/images/avatar.png";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

const CenteredGrid = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <img src={avatarImg} alt="avatar" className="avatar-img" />
            <div className="banner-text">
              <h1>Front End Developer</h1>

              <hr />

              <p>
                HTML/CSS | Bootstrap | JavaScript | React | Material-UI |
                WordPress
              </p>

              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/lkullolli/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin" aria-hidden="true" />
                </a>
                <a
                  href="https://github.com/panoscool"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github-square" aria-hidden="true" />
                </a>
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(CenteredGrid);
