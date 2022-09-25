import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { BsFilter } from 'react-icons/bs';
import SearchFilter from '../component/SearchFilter';
import Property from '../component/Property';
import notFound from '../assets/norResult.svg'
import { baseUrl, fetchApi } from '../utils/fetchApi'

const Search = ({ properties }) => {

    const [searchFilter, setSearchFilter] = useState(false);
    const router = useRouter();

    return (
        <Box>
            <Flex
                cursor="pointer"
                bg="gray.100"
                borderBottom="1px"
                borderColor="gray.300"
                padding="2"
                fontWeight="black"
                fontSize="lg"
                justifyContent="center"
                alignItems="center"
                onClick={() => setSearchFilter((prevFilter) => !prevFilter)}
            >
                <Text>Search Property By Filter</Text>
                <Icon paddingLeft="2" w="7" as={BsFilter} />
            </Flex>
            {searchFilter && <SearchFilter />}
            <Text fontSize="2xl" fontWeight="bold" p="4">Properties {router.query.purpose}</Text>
            <Flex flexWrap="wrap">
                {properties.map((property) => <Property property={property} key={property.id} />)}
            </Flex>
            {
                properties.length === 0 && (
                    <Flex justifyContent="center" alignItems="center" flexDirection="column" marginTop="5" marginBottom="5" >
                        <Image alt="Result not found" src={notFound} width={200} height={100} />
                        <Text fontSize="3xl" marginTop="5">No results found</Text>
                    </Flex>

                )
            }
        </Box>
    )
}

export default Search

export async function getServerSideProps({ query }) {
    const purpose = query.purpose || 'for-rent';
    const rentFrequency = query.rentFrequency || 'yearly';
    const minPrice = query.minPrice || '0';
    const maxPrice = query.maxPrice || '1000000';
    const roomsMin = query.roomsMin || '0';
    const bathsMin = query.bathsMin || '0';
    const sort = query.sort || 'price-desc';
    const areaMax = query.areaMax || '35000';
    const locationExternalIDs = query.locationExternalIDs || '5002';
    const categoryExternalID = query.categoryExternalID || '4';

    const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);


    return {
        props: {
            properties: data?.hits,
        }
    }
}