import React, { Fragment } from "react";
import { Box, Typography, Link, useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMedium,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../../assets/logo.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    display: "grid",
    marginTop: "120px",
    padding: "2rem",
    gridTemplateColumns: "repeat(3, 1fr)",
    background: "tomato",
    color: "#fff",
  },
}));

const Footer = () => {
  const showMQ = useMediaQuery("(max-width: 768px)");
  const classes = useStyles();
  return (
    <Fragment>
      <Box className={classes.footer}>
        <Box component="div">
          <Link href="#">
            <img src={Logo} alt="Logo" width="55px" />
          </Link>
        </Box>
        {showMQ ? (
          <Box flexGrow="1" />
        ) : (
          <Box
            textAlign="center"
            style={{ padding: ".5rem" }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="inherit" component="center">
              &lt;/&gt; with ❤ by Tech Phantoms{" "}
            </Typography>
          </Box>
        )}
        <Box
          textAlign="center"
          style={{ padding: ".5rem" }}
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
        >
          <Link
            href="https://github.com/Ninja-Developers"
            color="inherit"
            style={{ margin: "0 6px" }}
          >
            <FontAwesomeIcon icon={faGithub} style={{ fontSize: "32px" }} />
          </Link>
          <Link
            href="https://medium.com/techphantoms"
            color="inherit"
            style={{ margin: "0 6px" }}
          >
            <FontAwesomeIcon icon={faInstagram} style={{ fontSize: "32px" }} />
          </Link>
          <Link
            href="https://medium.com/techphantoms"
            style={{
              margin: "0 6px",
              color: "#fff",
              fontSize: "32px !important",
            }}
          >
            <FontAwesomeIcon icon={faMedium} style={{ fontSize: "32px" }} />
          </Link>
        </Box>
      </Box>
      {showMQ && (
        <Box textAlign="center" style={{ padding: ".5rem" }}>
          <Typography
            variant="inherit"
            component="center"
            style={{ color: "tomato", padding: "1rem" }}
          >
            &lt;/&gt; with ❤ by Tech Phantoms{" "}
          </Typography>
        </Box>
      )}
    </Fragment>
  );
};

export default Footer;
