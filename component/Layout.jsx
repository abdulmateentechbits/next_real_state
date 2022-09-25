import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Chitral Real State</title>
            </Head>
            <Box>
                <header>
                    Navbar
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    Footer
                </footer>
            </Box>
        </>
    )
}

export default Layout