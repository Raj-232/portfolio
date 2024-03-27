import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Grow, Link, Stack } from '@mui/material';
import projectsCard from '../../asstes/projectsCard.png'
import Grid from '@mui/material/Unstable_Grid2';
import { IconNetwork } from '../../asstes/Icons';
export default function Projects() {
  return (
    <Grid container padding={2} gap={2}>
      <Grid sm={5.8} xs={12}  >
        <Grow in={true} timeout={1000}>
          <Card sx={{ boxShadow: 24 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={projectsCard}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  College Student Chatbot
                </Typography>
                <Typography component="div" color="text.secondary">
                  <ul >
                    <li><Typography>
                      Developed a student-centric JavaScript chatbot catering to college- specific queries
                    </Typography></li>
                    <li><Typography>
                      Integrated diverse technologies to enhance user interaction and
                      streamline information retrieval.

                    </Typography></li>
                    <li><Typography>
                      Successfully integrated college-related details, enabling the
                      chatbot to provide information on courses, events, and campus
                      resources.
                    </Typography></li>

                    <li><Typography sx={{ pb: 2 }}>
                      Collaborated with a team to align the chatbot with the needs of the
                      college community, fostering positive outcomes.
                    </Typography></li>

                  </ul>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography color="primary.main" variant='subtitle2'>
                      06/2022 - 08/2022
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <IconNetwork /><Link target="_blank" href="https://github.com/Raj-232/STUDENT-CHATBOT-IN-HTML-CSS-AND-JS.git" marginLeft={1} underline="none">Source</Link>
                    </Box>
                  </Stack>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grow>
      </Grid>
      <Grid sm={5.8} xs={12}  >
        <Grow in={true} timeout={1000}>
          <Card sx={{ boxShadow: 24 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={projectsCard}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Archie Home Decors
                </Typography>
                <Typography component="div" color="text.secondary">
                  <ul >
                    <li><Typography>
                      Developed a performance testing application using React.js
                      (frontend) and Node.js (backend).
                    </Typography></li>
                    <li><Typography>
                      Implemented desgin using tailwind css and twailwind freamwork in shadcn ui its show smoth so using this appliction
                    </Typography></li>
                    <li><Typography>
                      Implemented React.js to enhance the user interface and
                      improve page loading times.
                    </Typography></li>

                    <li><Typography sx={{ pb: 2 }}>
                      Contributed to a cohesive team effort, seamlessly
                      integrating technologies for project success.
                    </Typography></li>

                  </ul>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography color="primary.main" variant='subtitle2'>
                      01/2024 - 02/2024
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <IconNetwork /><Link target="_blank" href="https://ahd-ui.onrender.com/" marginLeft={1} underline="none">Source</Link>
                    </Box>
                  </Stack>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grow>
      </Grid>
      <Grid  sm={5.8} xs={12} >
        <Grow in={true} timeout={1000}>
          <Card sx={{ boxShadow: 24 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={projectsCard}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Green Cover Enhancement Web Application
                </Typography>
                <Typography component="div" color="text.secondary">
                  <ul >
                    <li><Typography>
                      Led a team to develop a Green Cover Enhancement Web App for the college.
                    </Typography></li>
                    <li><Typography>
                      Integrated an impactful Carbon Footprint Calculator for environmental awareness.

                    </Typography></li>
                    <li><Typography>
                      Prioritized intuitive design for accessibility and a seamless user experience.
                    </Typography></li>
                    <li>
                      <Typography>
                        Contributed to the college's sustainability goals with a tool promoting eco-friendly practices.
                      </Typography>
                    </li>
                    <li><Typography sx={{ pb: 2 }}>
                      Demonstrated expertise by seamlessly combining HTML, CSS, and PHP for a functional web app.
                    </Typography></li>

                  </ul>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography color="primary.main" variant='subtitle2'>
                      02/2023 - 06/2023
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <IconNetwork /><Link target="_blank" href="https://github.com/Raj-232" marginLeft={1} underline="none">Source</Link>
                    </Box>
                  </Stack>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grow>
      </Grid>
      <Grid  sm={5.8} xs={12} >
        <Grow in={true} timeout={1000}>
          <Card sx={{ boxShadow: 24 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={projectsCard}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Water Pipeline Leakage Detection using IoT
                </Typography>
                <Typography component="div" color="text.secondary">
                  <ul >
                    <li><Typography>
                      Implemented an innovative Water Pipeline Leakage Detection system using IoT technology.
                    </Typography></li>
                    <li><Typography>
                      The project aims to detect and prevent water wastage and potential damage by continuously monitoring pipelines for leaks and anomalies.

                    </Typography></li>
                    <li><Typography>
                      Leveraging IoT sensors and communication protocols
                    </Typography></li>

                    <li><Typography sx={{ pb: 2 }}>
                      the system provides real-time data and alerts to facilitate timely interventions and improve water conservation efforts.
                    </Typography></li>

                  </ul>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography color="primary.main" variant='subtitle2'>
                      02/2023 - 04/2023
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <IconNetwork /><Link target="_blank" href="" marginLeft={1} underline="none">Source</Link>
                    </Box>
                  </Stack>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grow>
      </Grid>
      <Grid  sm={5.8} xs={12} >
        <Grow in={true} timeout={1000}>
          <Card sx={{ boxShadow: 24 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={projectsCard}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Medication Reminder for Elderly using IoT
                </Typography>
                <Typography component="div" color="text.secondary">
                  <ul >
                    <li><Typography>
                      Developed an IoT-based Medication Reminder system using MIT
                      App Inventor for the mobile app
                    </Typography></li>
                    <li><Typography>
                      Integrated the mobile app with an ESP8266 WiFi module, enabling
                      real-time connectivity.

                    </Typography></li>
                    <li><Typography>
                      Prioritized user-friendly design, ensuring accessibility for elderly users.
                    </Typography></li>

                    <li><Typography sx={{ pb: 2 }}>
                      Addressed a critical healthcare need by providing timely medication
                      reminders, Demonstrated technical expertise in IoT, mobile app
                      development, and healthcare innovation.
                    </Typography></li>

                  </ul>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography color="primary.main" variant='subtitle2'>
                      11/2022 - 02/2023
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <IconNetwork /><Link target="_blank" href="https://github.com/Raj-232/STUDENT-CHATBOT-IN-HTML-CSS-AND-JS.git" marginLeft={1} underline="none">Source</Link>
                    </Box>
                  </Stack>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grow>
      </Grid>
    </Grid>
  );
}