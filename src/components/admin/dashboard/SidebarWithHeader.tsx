import React, { ReactNode, useEffect } from 'react';
import cookies from "react-cookies";

import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  AvatarBadge,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import {
  FiHome,
  FiMenu,
  FiUsers,
  FiBell,
  FiChevronDown,
} from 'react-icons/fi';
import {MdOutlineReport,MdOutlineFeedback } from "react-icons/md";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import { IconType } from 'react-icons';
import {
  TfiAnnouncement,

} from "react-icons/tfi";
import { Image } from '@chakra-ui/react';
import { ReactText } from 'react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { UserState } from './Context/UserContext';

interface LinkItemProps {
  name: string;
  icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: FiHome }, 
  { name: 'Users', icon: FiUsers },
  { name: 'Announcements', icon: TfiAnnouncement },
  { name: 'Reports', icon: MdOutlineReport },
  { name: 'Feedback', icon: MdOutlineFeedback },
];

export default function SidebarWithHeader({
  children
}: {
  children: ReactNode;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav  onOpen={onOpen}   />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
         <Image
          boxSize='60px'
        objectFit='cover'
        src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyo2zFBbReItTKBqaWzBlChpVgb8_IakUlEg&usqp=CAU`}
        alt='Dashboard Logo'
        />


       
        <Text fontSize="20px" fontFamily="Heading Font Name" fontWeight="bold">
          Dashboard
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link , idx) => (
        <NavItem key={link.name} icon={link.icon}
          color={(idx === 3) ? 'red' : 'black'}
          fontFamily={`'Raleway', sans-serif`}
          textTransform={"uppercase"}
          onClick={() => {
          console.log(link.name)
          }}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
}
 const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link to={`/dashboard/${children}`}  >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      // eslint-disable-next-line react/jsx-no-comment-textnodes
      />
      
      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="Heading Font Name"
        fontWeight="bold">
        Admin Dashboard
      </Text>

      <HStack spacing={{ base: '0', md: '6' }}>
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                 src={`https://media.licdn.com/dms/image/D4E35AQGcDBZVWgtTfg/profile-framedphoto-shrink_200_200/0/1670516792495?e=1671454800&v=beta&t=kKy9ADwYuwfQS6fNSBAzq3H4LJ8EpKL6pD6-MoLBJxE`}
                >
               <AvatarBadge boxSize='1.25em' bg='green.500' />
                </Avatar>
                
               
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">Hasan Mousa</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}>
              <MenuItem
              // onClick={fireProfile()}
              >Profile</MenuItem>
              {/* <MenuItem>Settings</MenuItem> */}
              <MenuDivider />
              <MenuItem
              onClick={()=>{
                cookies.remove("token")
                cookies.remove("user")
                window.location.href = window.location.origin + "/"  
              }}
              >Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};