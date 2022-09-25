import React from 'react'
import { Box, Flex, IconButton, MenuButton, Spacer, Menu, MenuList, MenuItem } from '@chakra-ui/react';
import { } from 'react-icons/fa';
import { FcAbout, FcHome, FcMenu } from 'react-icons/fc';
import { BsKey, BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';
import Link from 'next/link';

const Navbar = () => {
    return (
        <Flex padding="2" borderBottom="2px" borderColor="gray.100" >
            <Box fontSize="3xl" color="blue.400" paddingLeft="20px" fontWeight="bold">
                <Link href="/" >Realtor</Link>
            </Box>
            <Spacer />
            <Box>
                <Menu>
                    <MenuButton as={IconButton} icon={<FcMenu />} variant="outlined" color="red.400" />
                    <MenuList>
                        <Link href="/" passHref>
                            <MenuItem icon={<FcHome />}>Home</MenuItem>
                        </Link>
                        <Link href="/search" passHref>
                            <MenuItem icon={<BsSearch />}>Search</MenuItem>
                        </Link>
                        <Link href="/search?purpose=for-sale" passHref>
                            <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
                        </Link>
                        <Link href="/search?purpose=for-rent" passHref>
                            <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
                        </Link>
                    </MenuList>
                </Menu>
            </Box>
        </Flex>
    )
}

export default Navbar