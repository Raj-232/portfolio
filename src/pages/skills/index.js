import { Box, LinearProgress, Stack, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import React, { useState, useEffect } from 'react';

function LinearProgressWithLabel(props) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= props.value ? props.value : prevProgress + 10));
        }, 100);

        return () => {
            clearInterval(timer);
        };
    }, [props.value]);

    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1  }}>
                <LinearProgress variant="determinate" sx={{height:"8px", borderRadius:"10px"}} value={progress} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="text.secondary">{`${Math.round(
                    progress,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}

export default function Skills() {
    const CodingSkills = [
        { name: "html", value: 90 },
        { name: "Css", value: 90 },
        { name: "javascript", value: 90 },
        { name: "typescript", value: 80 },
        { name: "c programing", value: 99 },
        { name: "java programing", value: 80 },
        { name: "ardunio programing", value: 80 },
        { name: "c# programing", value: 80 },
        { name: ".net", value: 80 },
        { name: "php", value: 80 },
        { name: "node js", value: 80 },
        { name: "nest js", value: 80 },
        { name: "next js", value: 80 },
        { name: "react js", value: 90 },
        { name: "Mongodb", value: 90 },
        { name: "My sql", value: 90 },
    ]
    const ProfisionlsSkills = [
        { name: "frontend development", value: 90 },
        {name:"backend development",value:70},
        {name:"mern stack development",value:70},
        {name:"database development",value:70},
        {name:".net development",value:70},
        {name:"full stack development",value:70},
        
    ]
    return (
        <Stack spacing={1} padding={2}>
            <Typography variant="h6" fontWeight="bold">CodingSkills</Typography>
         
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    CodingSkills.map((data, index) => (
                        <Grid xs={2} sm={4} md={4} key={index}>
                            <Typography textTransform="uppercase">{data.name}</Typography>
                            <LinearProgressWithLabel value={data.value} />
                        </Grid>
                    ))
                }
    
            </Grid>
            <Typography variant="h6" fontWeight="bold">ProfisionlsSkills</Typography>
         
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    ProfisionlsSkills.map((data, index) => (
                        <Grid xs={2} sm={4} md={4} key={index}>
                            <Typography textTransform="uppercase">{data.name}</Typography>
                            <LinearProgressWithLabel value={data.value} />
                        </Grid>
                    ))
                }
    
            </Grid>
        </Stack>
    )
}
