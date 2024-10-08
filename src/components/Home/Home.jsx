import React from 'react';
import { Box, Stack } from '@chakra-ui/react'; 
import "./home.css";
import { VStack } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import vg from "../../assets/images/bg.png";
import { HStack } from '@chakra-ui/react';
import {CgGoogle , CgYoutube} from "react-icons/cg"
import {SiCoursera , SiUdemy} from "react-icons/si"
import {DiAws} from "react-icons/di"
import introVideo from "../../assets/vedios/intro.mp4"

const Home = () => {
  return (
    <section className='home'>
      <div className="container">
        <Stack
          direction={["column", "row"]}
          height="100%"
          justifyContent={["center", "space-between"]}
          alignItems="center"
          spacing={["16", "56"]}
        >
        <VStack 
          width={"full"} 
          alignItems={["center" , "flex-end"]} 
          spacing="8">
            <Heading size="xl" children="Craft your mastery on the SKILL CANVAS" />
            <Text
            fontSize={'2xl'}
            fontFamily="cursive"
            textAlign={["center" ,"left"]} 
            children="Find Valuable Content At Best Place"></Text>
            <Link to="/courses">
              <Button size={"lg"} colorScheme='yellow'>
                Explore Now
              </Button>
            </Link>
          </VStack>
<Image 
className = "vector-graphics" 
boxSize={"md"} 
src={vg} 
objectFit={"contain"}/>
        </Stack>
      </div>

      <Box 
      padding={"8"} 
      bg={"blackAlpha.800"}>
      <Heading 
      textAlign= {"center"} 
      fontFamily= "body" 
      color ={"yellow.400"} 
      children="OUR BRANDS"/>
      
      <HStack 
      className='brandsBanner' 
      justifyContent={'space-evenly'}
      marginTop= "4"
      >
        <CgGoogle/>
        <CgYoutube/>
        <SiCoursera/>
        <SiUdemy/>
        <DiAws/>
      </HStack>
      </Box>

      {/* <div className="container2">
        <video 
        // autoPlay 
        controls 
        controlsList='nodownload nofullscreen noremoteplayback'
        disablePictureInPicture
        disableRemotePlayback
        src = {introVideo}>

        </video>
      </div> */}
    </section>
  );
};

export default Home;
