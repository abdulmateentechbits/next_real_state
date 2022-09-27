import { Avatar, Box, Code, Flex, Text } from '@chakra-ui/react';
import millify from 'millify';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { GoVerified } from 'react-icons/go';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { baseUrl, fetchApi } from '../../utils/fetchApi';
import ImageScrollBar from '../../component/ImageScrollBar';

const PropertyDetails = ({ PropertyDetails }) => {
    const { price, rentFrequency, rooms, title, baths, area, agency, isVerified, description, type, purpose, furnishingStatus, amenities, photos } = PropertyDetails;

    return (
        <Box maxWidth="1000px" margin="auto" p="5">
            {photos && <ImageScrollBar data={photos} />}
            <Box w='full' p='6'>
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
                <Box marginTop="2">
                    <Text fontSize="lg" marginBottom="2" fontWeight="bold">
                        {title}
                    </Text>
                    <Text lineHeight="2" color="gray.600">{description}</Text>
                </Box>

                <Flex justifyContent="space-between" textTransform="uppercase" flexWrap='wrap'>
                    <Flex justifyContent="space-between" width="400px" borderBottom="2">
                        <Text>Type</Text>
                        <Text fontWeight="bold">{type}</Text>
                    </Flex>
                    <Flex justifyContent="space-between" width="400px" borderBottom="2">
                        <Text>Purpose</Text>
                        <Text fontWeight="bold">{purpose}</Text>
                    </Flex>
                    {
                        furnishingStatus && (
                            <Flex justifyContent="space-between" width="400px" borderBottom="2">
                                <Text>Furnishing Status</Text>
                                <Text fontWeight="bold">{furnishingStatus}</Text>
                            </Flex>
                        )
                    }
                </Flex>
                <Box>
                    {amenities.length && (<Text fontSize="2xl" fontWeight="black" marginTop="5" >
                        Amenities
                    </Text>)}

                    <Flex flexWrap="wrap">
                        {amenities.map((item) => (
                            item.amenities.map((enmity) => (
                                <Text key={enmity.text} fontWeight="bold" fontSize="md" p="2" color="blue.400" bg='gray.200' borderRadius='sm' m="1"  >
                                    {enmity.text}
                                </Text>
                            ))
                        ))}
                    </Flex>
                </Box>
            </Box>
        </Box>
    )
}

export default PropertyDetails;
export async function getServerSideProps({ params: { id } }) {
    const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

    return {
        props: {
            PropertyDetails: data
        }
    }
}
