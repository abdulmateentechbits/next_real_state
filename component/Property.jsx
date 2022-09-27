import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import millify from 'millify';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { GoVerified } from 'react-icons/go';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import defaultImg from '../assets/defaultImg.jpg';


const Property = ({ property }) => {
    const { coverPhoto, price, baths, rentFrequency, rooms, title, area, agency, isVerified, externalID } = property;

    return (
        <Link href={`/property/${externalID}`} passHref>
            <Flex flexWrap='wrap' w='420px' p='5' paddingTop='0px' justifyContent='flex-start' cursor='pointer' >
                <Box>
                    <Image src={coverPhoto?.url ? coverPhoto.url : defaultImg} alt="house" width={400} height={260} />
                </Box>
                <Box w='full'>
                    <Flex
                        paddingTop="2"
                        alignItems="center"
                        justifyContent="space-between">
                        <Flex alignItems="center">
                            <Box paddingRight="3" color="green.400">{isVerified && <GoVerified />}</Box>
                            <Text fontWeight='bold' fontSize='lg'>PKR {millify(price)} /{rentFrequency && rentFrequency} </Text>
                        </Flex>
                        {/* logo */}
                        <Box>
                            <Avatar size="xs" src={agency?.logo?.url} />
                        </Box>
                    </Flex >
                    <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='blue.400' >
                        {rooms} <FaBed /> | {baths} <FaBath /> {millify(area)} sqft <BsGridFill />
                    </Flex>
                    <Text fontSize="lg">
                        {title.length > 30 ? title.substring(0, 30) : title}
                    </Text>
                </Box>
            </Flex>
        </Link>
    )
}

export default Property