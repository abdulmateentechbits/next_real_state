import { Box, Flex, Icon, Image } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const leftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
    return (
        <Flex justifyContent="center" alignItems="center" marginRight="1">
            <Icon as={FaArrowAltCircleLeft} onClick={()=>scrollPrev()} fontSize="2xl" cursor="pointer" />
        </Flex>
    )
}
const rightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
    return (
        <Flex justifyContent="center" alignItems="center" marginRight="1">
            <Icon as={FaArrowAltCircleRight} onClick={()=>scrollNext()} fontSize="2xl" cursor="pointer" />
        </Flex>
    )
}

const ImageScrollBar = ({ data }) => {
    return (
        <ScrollMenu LeftArrow={leftArrow} RightArrow={rightArrow}>
            {data.map((item, index) => {
                return (
                    <Box width="910px" key={item.id} itemId={item.id} overflow="hidden" p="1">
                        <Image 
                        placeholder='blur' 
                        blurDataUrl={item.url} 
                        src={item.url} 
                        width={1000} 
                        height={500} 
                        alt="Property"
                        size="(max-width: 500px) 100px,(max-width:1023px) 400px, 1000px"
                        />
                    </Box>
                );
            })}
        </ScrollMenu>
    )
}

export default ImageScrollBar