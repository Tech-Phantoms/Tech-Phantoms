import React from "react";
import { Link } from 'react-router-dom';

//assests
import logo from "../../assets/logo.svg";

//css
import { Box, SimpleGrid, Image } from "@chakra-ui/core";

const PageNotFound = (props) => {
  return (
    <div>
      <Box
        padding="10px"
        w="100%"
        mt={{ md: "0px", xs: "5px", sm: "100px", lg: "200px" }}
        mb={["100px", "200px"]}
        color="#ED654B"
      >
        <SimpleGrid columns={{ lg: 2, md: 2, xs: 1, sm: 1 }} spacing={1}>
          <Box>
            <center>
              <Image
                src={logo}
                width={{ lg: "40%", md: "60%", sm: "50%", xs: "55%" }}
                alt="lightlogo"
                py={5}
              /><br/>
             <SimpleGrid display={{"xs":"none","sm":"none","md":"grid","lg":"grid"}}  width="50%" columns={3} spacing={1} padding={4}>
              </SimpleGrid>
            </center>
          </Box>

          <Box>
            <center className="pageNotFound">
              <h1 className="errorType">404</h1>
              <h1 className="errorMsg">Page Not Found!</h1>
            </center>
            <center>
              <button className="btn">
                <Link to="/">Home</Link>
              </button>
            </center>          
          </Box>
          
        </SimpleGrid>
      </Box>
    </div>
  );
};
export default PageNotFound;
