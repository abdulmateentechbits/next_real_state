import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image'
import { Flex, Box, Text, Button } from '@chakra-ui/react'
import { baseUrl, fetchApi } from '../utils/fetchApi';
import Property from '../component/Property';

const Banner = ({ purpose, imageUrl, title1, title2, linkName, buttonText, desc1, desc2 }) => {

  return (
    < Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10" >
      <Image
        src={imageUrl}
        alt="Banner"
        width={500}
        height={300}
      />
      <Box p="5">
        <Text color='gray.500' fontSize="sm" fontWeight="medium">{purpose}</Text>
        <Text fontSize="3xl" fontWeight="bold">{title1} <br /> {title2}</Text>
        <Text fontSize="lg" paddingTop='3' paddingBottom='3' color="gray.700">{desc1} <br />{desc2}</Text>
        <Button fontSize="xl">
          <Link href={linkName}>{buttonText}</Link>
        </Button>
      </Box>
    </Flex >
  )
}

export default function Home({ propertiesForSales, propertiesForRents }) {

  return (
    <Box>
      <Banner
        purpose="RENT A HOME"
        title1="Rental home for "
        title2="For every person"
        desc1="Explore Apartment, Villas , Homes"
        desc2="and more..."
        buttonText="Explore renting"
        linkName={`/search?purpose=for-rent`}
        imageUrl="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      />
      <Flex flexWrap="wrap" justifyContent="center" alignItems="center" >
        {/* properties for rent a home  */}
        {
          propertiesForRents.map((property) => <Property property={property} key={property.id} />)
        }
      </Flex>
      <Banner
        purpose="Buy A HOME"
        title1="Find, Buy & Own you"
        title2="Dream Home"
        desc1="Explore Apartment, Villas , Homes"
        desc2="and more..."
        buttonText="Explore Buying"
        linkName={`/search?purpose=for-sale`}
        imageUrl="https://images.unsplash.com/photo-1581573950452-5a438c5f390f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=829&q=80"
      />
      {/* properties to buy a home  */}
      <Flex flexWrap="wrap" justifyContent="center" alignItems="center" >
        {
          propertiesForSales.map((property) => <Property property={property} key={property.id} />)
        }
      </Flex>
    </Box>
  )
}

export async function getStaticProps() {
  const propertyForSales = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);

  const propertyForRents = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

  return {
    props: {
      propertiesForSales: propertyForSales?.hits,
      propertiesForRents: propertyForRents?.hits
    }
  }
}
