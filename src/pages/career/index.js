import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Card, CardActionArea, CardContent, Stack, Typography, Grow } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
export default function Career() {
    return (
        <Grid padding={2} container>
            <Grid xs={12} lg={6} >
                <Typography variant='h6' fontWeight="bold" color="primary.main">Experience</Typography>
                <Timeline
                    sx={{
                        [`& .${timelineItemClasses.root}:before`]: {
                            flex: 0,
                            padding: 0,
                        },
                    }}
                >
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <Grow in={true} timeout={1000}>
                        <TimelineContent>
                            <Card sx={{ width: "100%", boxShadow: 24 }}>
                                <CardContent component={CardActionArea}>
                                    
                                    <Typography fontWeight="bold">
                                        Software Development Engineer Intern
                                    </Typography>
                                    <Typography>
                                        Icanio Technologies
                                    </Typography>
                                    <ul >
                                        <li><Typography>Developed a performance testing application using React.js
                                            (frontend) and Node.js (backend).
                                        </Typography></li>
                                        <li><Typography>Integrated MongoDB for efficient data storage and
                                            management.

                                        </Typography></li>
                                        <li><Typography>Implemented React.js to enhance the user interface and
                                            improve page loading times.
                                        </Typography></li>
                                        <li><Typography>
                                            Emphasized scalability and efficient data handling for a high- performance application.
                                        </Typography></li>
                                        <li><Typography sx={{ pb: 2 }}>
                                            Contributed to a cohesive team effort, seamlessly
                                            integrating technologies for project success.
                                        </Typography></li>

                                    </ul>
                                    <Stack direction="row" justifyContent="space-between">
                                        <Typography color="primary.main" variant='subtitle2'>
                                            09/2023 - 02/2024
                                        </Typography>
                                        <Typography color="primary.main" variant='subtitle2'>
                                            Tirunelveli
                                        </Typography>
                                    </Stack>
                                </CardContent>
                                
                            </Card>
                        </TimelineContent>
                        </Grow>
                      
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />

                        </TimelineSeparator>
                        <Grow in={true} timeout={1000}>
                        <TimelineContent>
                            <Card sx={{ width: "100%", boxShadow: 24 }}>
                            <CardContent component={CardActionArea}>
                                    <Typography fontWeight="bold">
                                        Graduate Innovation Engineer Trainee
                                    </Typography>
                                    <Typography>
                                        Forge Innovation & Ventures
                                    </Typography>
                                    <ul >
                                        <li><Typography>Led a team to develop a Green Cover Enhancement Web App
                                            for the college.
                                        </Typography></li>
                                        <li><Typography>Integrated an impactful Carbon Footprint Calculator for
                                            environmental awareness.

                                        </Typography></li>
                                        <li><Typography>Prioritized intuitive design for accessibility and a seamless
                                            user experience.
                                        </Typography></li>
                                        <li><Typography>
                                            Contributed to the college's sustainability goals with a tool
                                            promoting eco-friendly practices.</Typography></li>
                                        <li><Typography sx={{ pb: 2 }}>
                                            Demonstrated expertise by seamlessly combining HTML, CSS, and PHP for a functional web app.

                                        </Typography></li>

                                    </ul>
                                    <Stack direction="row" justifyContent="space-between">
                                        <Typography color="primary.main" variant='subtitle2'>
                                            02/2023 - 06/2023
                                        </Typography>
                                        <Typography color="primary.main" variant='subtitle2'>
                                            Tirunelveli
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </TimelineContent>
                        </Grow>
                    </TimelineItem>

                </Timeline>
            </Grid>
            <Grid xs={12} lg={6}>
            <Typography variant='h6' fontWeight="bold" color="primary.main">Education</Typography>
                <Timeline
                    sx={{
                        [`& .${timelineItemClasses.root}:before`]: {
                            flex: 0,
                            padding: 0,
                        },
                    }}
                >
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <Grow in={true} timeout={1000}>
                        <TimelineContent>
                            <Card sx={{ width: "100%", boxShadow: 24 }}>
                            <CardContent component={CardActionArea}>
                                    <Typography fontWeight="bold">
                                        Computer Science Engineering
                                    </Typography>
                                    <Typography>
                                        Government College Of Enginnerring Thirunelveli
                                    </Typography>
                                    <Stack direction="row" justifyContent="space-between">
                                        <Typography color="primary.main" variant='subtitle2'>
                                            06/2019 - 06/2023
                                        </Typography>
                                        <Typography color="primary.main" variant='subtitle2'>
                                            CGPA - 7.1/10
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </TimelineContent>
                        </Grow>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <Grow in={true} timeout={1000}>
                        <TimelineContent>
                            <Card sx={{ width: "100%", boxShadow: 24 }}>
                            <CardContent component={CardActionArea}>
                                    <Typography fontWeight="bold">
                                        HSC
                                    </Typography>
                                    <Typography>
                                        Nadar Higher Secondary School kovilpatti
                                    </Typography>
                                    <Stack direction="row" justifyContent="space-between">
                                        <Typography color="primary.main" variant='subtitle2'>
                                            06/2018 - 06/2019
                                        </Typography>
                                        <Typography color="primary.main" variant='subtitle2'>
                                            HSC - 73.8%
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </TimelineContent>
                       </Grow>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                        </TimelineSeparator>
                        <Grow in={true} timeout={1000}>
                        <TimelineContent>
                            <Card sx={{ width: "100%", boxShadow: 24 }}>
                            <CardContent component={CardActionArea}>
                                    <Typography fontWeight="bold">
                                        SSLC
                                    </Typography>
                                    <Typography>
                                        Nadar Higher Secondary School kovilpatti
                                    </Typography>
                                    <Stack direction="row" justifyContent="space-between">
                                        <Typography color="primary.main" variant='subtitle2'>
                                            06/2016 - 06/2017
                                        </Typography>
                                        <Typography color="primary.main" variant='subtitle2'>
                                            SSLC- 77.2%
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </TimelineContent>
                        </Grow>
                    </TimelineItem>
                </Timeline>
            </Grid>
        </Grid>
    );
}