import logo from './logo.svg';
import './App.css';
import { Heading, Text, Box } from '@chakra-ui/react'
import { InputGroup, Input, InputLeftElement } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import { FaIntercom } from 'react-icons/fa6'
import { BsLock, BsUnlock, BsTrash, BsBookmark } from 'react-icons/bs'
import { FiPlusCircle } from 'react-icons/fi'
import { Select } from '@chakra-ui/react'
import { Checkbox } from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'


function App() {
  return (
      <div className="App">
        <Box h={100}>
          <Box className='left'>
            <Heading color="blackAlpha.900">Robert's Threads</Heading>
            <Text fontSize='md' pt={2}>Generate more or view your thread history</Text>
          </Box>
          <Box className='right'>
            <InputGroup w={350} mt={8}>
              <InputLeftElement pointerEvents='none'>
                <SearchIcon color='gray.900' />
              </InputLeftElement>
              <Input placeholder='search threads' />
            </InputGroup>
          </Box>
        </Box>
        <Divider borderColor="gray.400" />
        <Button bgColor="gray.300" mt={10} p="14">
          <FiPlusCircle color="gray.900" /> <Heading as='h6' size='xs' pl={2} color="gray.900">New Thread</Heading>
        </Button>
        <Divider my="10" borderColor="gray.300" />
        <Box h={50}>
          <Box className='left' style={{display: "flex", marginTop: "10px"}}>
            <FaIntercom /><Heading as='h5' size='sm' pl={2} mt={-1}>Recently added</Heading>
          </Box>
          <Box className='right'>
            <Select bgColor="White" placeholder='Data Added' size="sm">
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
          </Box>
        </Box>
        <Box>
          <TableContainer>
            <Table size='sm'>
              <Thead h="10" bgColor="white">
                <Tr>
                  <Th></Th>
                  <Th>USER</Th>
                  <Th>DATE UPLOADED</Th>
                  <Th>DETAILS</Th>
                  <Th></Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td><Checkbox bgColor="white" colorScheme='green'></Checkbox></Td>
                  <Td>ConEd_Robert</Td>
                  <Td>6/20/2023</Td>
                  <Td>Our clean energy initiatives include expanding the use of digital resources. investing in new information systems...</Td>
                  <Td display="flex" alignItems="center" justifyContent="space-between"><BsLock />Private</Td>
                  <Td><BsTrash /></Td>
                </Tr>
                <Tr>
                  <Td><Checkbox bgColor="white" colorScheme='green'></Checkbox></Td>
                  <Td>ConEd_Robert</Td>
                  <Td>6/20/2023</Td>
                  <Td>Our clean energy initiatives include expanding the use of digital resources. investing in new information systems...</Td>
                  <Td display="flex" alignItems="center" justifyContent="space-between"><BsUnlock />Public</Td>
                  <Td><BsTrash /></Td>
                </Tr>
                <Tr>
                  <Td><Checkbox bgColor="white" colorScheme='green'></Checkbox></Td>
                  <Td>ConEd_Robert</Td>
                  <Td>6/20/2023</Td>
                  <Td>Our clean energy initiatives include expanding the use of digital resources. investing in new information systems...</Td>
                  <Td display="flex" alignItems="center" justifyContent="space-between"><BsLock />Private</Td>
                  <Td><BsTrash /></Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
        <Divider my="10" borderColor="gray.300" />
        <Box display="flex" mt={10}>
          <BsBookmark /><Heading as='h5' size='sm' pl={2} mt={-1}>Bookmarked</Heading>
        </Box>
        <Text mt={2} fontSize='xs'>No current threads to display</Text>
      </div>
  );
}

export default App;

