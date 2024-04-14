import { Container, Text, HStack, Button, Stack, VStack, Image, Heading } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Input } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Course = ({ views, title, imageSrc, id, AddToplaylist, creator, description, lecturecount }) => {
  return (
    <VStack className='course' alignItems={["center", "flex-start"]}>
      <Image src={imageSrc} boxSize="60" objectFit={'contain'} alt={title} />
      <Heading
        textAlign={['center', 'left']}
        maxW="200px"
        size={'sm'}
        fontFamily={'sans-serif'}
        noOfLines={3}
        children={title}
      />
      <Text noOfLines={3} children = {description} />
      <HStack>
         <Text fontWeight={"bold"} textTransform={"uppercase"} children = {"Creater"} />
         <Text fontFamily={"body"} textTransform={"uppercase"} children = {creator} />

      </HStack>
      <Heading 
            textAlign={"center"} 
            size={"xs"} 
            children = {`Lectures - ${lecturecount}`} 
            textTransform={"uppercase"}
            />
       <Heading 
            size={"xs"} 
            children = {`Views - ${views}`} 
            textTransform={"uppercase"}
            />

            <Stack direction={["column" , "row"]} alignItems={"center"}>
                <Link to={`/course/${id}`}>
                    <Button colorScheme={'yellow'}>Watch Now</Button>
                </Link>
                   <Button variant={"ghost"} colorScheme={'yellow'} onClick={() => AddToplaylist(id)}>Add to PlayList</Button>

                
           </Stack>     
    </VStack>
  );
};

const Courses = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');

  const Addtoplaylist = () =>{
    console.log("Added")
  }

  const categories = [
    'Web Development',
    'AI',
    'ML',
    'Data Science',
    'Game Development',
    'DSA',
  ];

  return (
    <Container minH={'95vh'} maxW="container.lg" paddingY={'8'}>
      <Heading children="All Courses" m={'8'} />

      <Input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search for a course..."
        type={'text'}
        focusBorderColor="yellow.500"
      />

      <HStack overflow={"auto"} paddingY="8" css={{ "&::-webkit-scrollbar": { display: "none" } }}>
        {categories.map((item, index) => (
          <Button key={index} onClick={() => setCategory(item)} minW={'60'}>
            <Text children={item} />
          </Button>
        ))}
      </HStack>

      <Stack
        direction={['column', 'row']}
        flexWrap={"wrap"}
        justifyContent={["flex-start ", "space-evenly"]}
        alignItems={['center', 'flex-start']}
      >

        <Course
          title={"Complete Web Development Course"}
          description={"MERN Stack"}
          views={"1M+"}
          imageSrc={
                 "https://developerguru.in/images/courses/mern_stack.gif"          }
          creator={"Sejal Khilari"}
          lecturecount={"40+hrs"}
          Addtoplaylist={Addtoplaylist}
        />

      </Stack>

    </Container>
  );
};

export default Courses;
