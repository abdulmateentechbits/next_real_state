import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import Search from '../pages/search'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Chitral Real State</title>
            </Head>
            <Box maxWidth="1280px" m="auto">
                <header>
                    <Navbar />
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    <Footer />
                </footer>
            </Box>
        </>
    )
}

export default Layout