import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';

import {useNavigate} from "react-router-dom"
import axios from 'axios'
import {useState} from 'react'
const initState = {
  email:"",
  password:''
}
export default function AdminSignin() {


  const [form, setForm] = useState(initState);
  const {email, password} =form
  
  
  const navigate = useNavigate()

    const hanndleSubmit = async()=>{

      let {data} =  await axios.post("https://wicked-long-underwear-slug.cyclic.app/admin/login",form)
     
      localStorage.setItem("admindata",JSON.stringify(data))
      localStorage.setItem("token",data.token)


     if( data.token){

      navigate('/admin')

     }
     else{
      alert("❌Access Denied ❌")
     }

    }
    
const hanldeChange=(e)=>{
  e.preventDefault();
  const {value, name} = e.target;

  setForm({...form,[name]:value})
  // console.log(form)

}

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in  as Admin</Heading>
         
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input  type="email" placeholder='email' name='email' value={email} onChange={hanldeChange}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder='password' name='password' value={password} onChange={hanldeChange}/>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button onClick={hanndleSubmit}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}