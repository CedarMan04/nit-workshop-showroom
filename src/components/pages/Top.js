import { Box, Grid } from '@material-ui/core'
import React from 'react'
import Header from '../molecules/Header'
import LatestWorksList from '../molecules/LatestWorksList'
import SideBar from '../molecules/SideBar'

const Top = () => {
    return (
        <>
        <Box>
          <Header />
        </Box>
        <Box margin={5}>
            <Grid container spacing={8}>
                <Grid item xs={3}>
                    <SideBar />
                </Grid>
                <Grid item xs={7}>
                    <LatestWorksList />
                </Grid>
            </Grid>
        </Box>
        </>
    )
}

export default Top