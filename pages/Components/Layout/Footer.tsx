import * as React from 'react'
import styles from '../../../styles/Main.module.css'
import Image from 'next/image'
import { Grid, Container, Box , BoxProps } from '@mui/material';


function Footer() {
    return (

        <Container maxWidth="xl" sx={{ display: 'flex' , justifyContent: 'center' }}>

            <Box
                sx={{
                display: 'flex',
                justifyContent: 'center',
                p: 1,
                m: 1,
                borderRadius: 1,
                }}
            >
                <Grid container >
                    <span className={styles.logo}>
                    <Image src="/icon/smart-farm.png" alt="Vercel Logo" width={40} height={40} />
                    </span>
                    PH.Farm
                    <span className={styles.logo}>
                    <Image src="/icon/watering.png" alt="Vercel Logo" width={40} height={40} />
                    </span>
                    Smart Famer {' '}
                    <span className={styles.logo}>
                    <Image src="/icon/location.png" alt="Vercel Logo" width={40} height={40} />
                    </span>
                    <span className={styles.logo}>
                    <Image src="/icon/solar-energy.png" alt="Vercel Logo" width={40} height={40} />
                    </span>
                    Smart Farming
                    <span className={styles.logo}>
                    <Image src="/icon/sprout.png" alt="Vercel Logo" width={40} height={40} />
                    </span>
                </Grid>

            </Box>

        </Container>
    )
}

export default Footer;