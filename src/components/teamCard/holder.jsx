import React from "react";
import { Box, Paper } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import styles from "./style.module.css";
import Female from "../../assets/team/_person.svg";
import Male from "../../assets/team/person.svg";
import GitHub from "../../assets/team/github_.svg";
import Linkedin from "../../assets/team/linkedin.svg";
import Instagram from "../../assets/team/instagram.svg";
import Medium from "../../assets/team/medium.svg";
const Holder = (props) => {
  const {
    name,
    imageUrl,
    githubUrl,
    linkedinUrl,
    instagramUrl,
    mediumUrl,
    gender,
  } = props;
  let imgSrc;
  try {
    imgSrc = require(`${imageUrl}`);
  } catch {
    imgSrc = `${gender === "male" ? Male : Female}`;
  }
  return (
    <Box margin={{ md: "40px" }} className={styles.container}>
      <Paper
        variant="outlined"
        style={{
          borderRadius: "50%",
          border: "none",
        }}
      >
        <img src={imgSrc} alt={name} className={styles.photo} />
      </Paper>
      <div className={styles.name}>{name}</div>
      <Box className={styles.linkFlex}>
        {githubUrl && (
          <IconButton target="_blank" href={githubUrl}>
            <img src={GitHub} alt="GitHub" width="36px" />
          </IconButton>
        )}
        {linkedinUrl && (
          <IconButton target="_blank" href={linkedinUrl}>
            <img src={Linkedin} alt="Linkedin" width="32px" />
          </IconButton>
        )}
        {instagramUrl && (
          <IconButton target="_blank" href={instagramUrl}>
            <img src={Instagram} alt="Instagram" width="32px" />
          </IconButton>
        )}
        {mediumUrl && (
          <IconButton target="_blank" href={mediumUrl}>
            <img src={Medium} alt="Instagram" width="32px" />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

export default Holder;
