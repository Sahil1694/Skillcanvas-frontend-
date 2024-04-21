import { Box, Button, Container, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { courseRequest } from '../../redux/actions/other'
import toast from 'react-hot-toast'

const Request = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [course, setCourse] = useState("")

    const dispatch = useDispatch();
    const {loading, error ,message :stateMessage } = useSelector(state => state.other)

    const  SubmitHandler = (e)=>{
      e.preventDefault();
      dispatch(courseRequest(name, email , course))
    }

    useEffect(() => {
      if (error) {
        toast.error(error);
        dispatch({ type: 'clearError' });
      }
      if (stateMessage) {
        toast.success(stateMessage);
        dispatch({ type: 'clearMessage' });
      }
      
    }, [dispatch ,error , stateMessage ])


  return (
    <Container h={"92vh"}>
        <VStack h={"full"} justifyContent={"center"} spacing={"16"}>
            <Heading children="Request New Course" />
            <form onSubmit={SubmitHandler} style={{width: "100%"}}>
            <Box my={'4'}>
              <FormLabel htmlFor='name' children= "Name" />
              <Input 
                required
                id='name'
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder={"Enter Your Name"}
                type='text'
                focusBorderColor='yellow.500'
              />
            </Box>

            <Box my={'4'}>
              <FormLabel htmlFor='email' children= "Email Address" />
              <Input 
                required
                id='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder={"Enter Your Email"}
                type='email'
                focusBorderColor='yellow.500'
              />
            </Box>

            <Box my={'4'}>
              <FormLabel htmlFor='message' children= "Course" />
              <Textarea 
                required
                id='course'
                value={course}
                onChange={e => setCourse(e.target.value)}
                placeholder={"Which Course you Needed ?"}
                focusBorderColor='yellow.500'
              />
            </Box>
            <Button my={'4'} colorScheme='yellow' type='submit'>
              Send Mail
            </Button>

            <Box my={'4'}>
                See Available Courses{' '} 
                <Link to= '/courses' >
                    <Button isLoading={loading} colorScheme='yellow' variant={"link"}>
                       Click 
                    </Button>{' '}
                    here
                </Link>

            </Box>  
          </form>

        </VStack>

    </Container>
  )
  
}

export default Request