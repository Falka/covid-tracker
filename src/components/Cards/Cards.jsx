import React from 'react';
import { Card,CardContent,Typography,Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
    if(!confirmed){
        return 'loading...'
    }
    console.log(deaths)
    console.log(confirmed)


    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected) }>
                    <CardContent>
                    <Typography color='textSecondary' gutterBottom>Terkonfirmasi</Typography>
                    <Typography variant='h5'>
                        <CountUp start={0} end={confirmed.value} duration={2.5} separator=','/>
                    </Typography>
                    <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()} </Typography>
                    <Typography variant='body2'>Jumlah Kasus Aktif untuk COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered) }>
                    <CardContent>
                    <Typography color='textSecondary' gutterBottom>Sembuh</Typography>
                    <Typography variant='h5'>
                        <CountUp start={0} end={recovered.value} duration={2.5} separator=','/>
                    </Typography>
                    <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()} </Typography>
                    <Typography variant='body2'>Jumlah Kesembuhan dari COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths) }>
                    <CardContent>
                    <Typography color='textSecondary' gutterBottom>Kematian</Typography>
                    <Typography variant='h5'>
                        <CountUp start={0} end={deaths.value} duration={2.5} separator=','/>
                    </Typography>
                    <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()} </Typography>
                    <Typography variant='body2'>Jumlah Kematian disebabkan COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;