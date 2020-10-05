import React from "react";
import IconButton from '@material-ui/core/IconButton';
import styles from './style.module.css';
import Female from "../../assets/team/_person.svg";
import Male from "../../assets/team/person.svg";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

const Holder = (props) => {

  const {
    name,
    imageUrl,
    gender
  } = props;
  return (

    <Card className={styles.container}>
      <CardActionArea className={styles.flexContainer} >
        <CardMedia
          className={styles.image}
          image={gender === "male" ? Male : Female}
          src={imageUrl}
        />
        <CardContent>
          <Typography className={styles.name}>
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={styles.CardActions} >
        <IconButton>
          <GitHubIcon fontSize="large" />
        </IconButton>
        <IconButton>
          <LinkedInIcon fontSize="large" />
        </IconButton>
        <IconButton>
          <InstagramIcon fontSize="large" />
        </IconButton>
      </CardActions>
    </Card>

  );
}

export default Holder;
