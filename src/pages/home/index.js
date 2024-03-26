import { Box, Button, Fade, Grow, Link, Stack, Typography } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import bg from '../../asstes/bg.jpg'
import me from '../../asstes/me.jfif'
import resumePdf from '../../asstes/resume.pdf';
import { IconGithub, IconLinkDin, IconMail, IconPhoneCall, IconWhatsapp } from "../../asstes/Icons"
export default function Home() {
  const trigger = useScrollTrigger();
  const handleDownload = () => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'Anandharaj_Resume.pdf';
    // Trigger the click event on the anchor element
    document.body.appendChild(link);
    link.click();
    // Cleanup
    document.body.removeChild(link);

  };
  return (
    <Box style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: "100%",
      width: "100%"

    }}>
         <Fade in={true}  timeout={2000}>
      <Stack
        spacing={1}
        justifyContent="center"
      alignItems='center'
        padding={2}
        height="100%"
        color="white"
       
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity here (0.5 for 50% opacity)
          zIndex: 0,
        }}
      >
       
        <Typography fontSize={{xs:"45px",md:"90px"}}   fontWeight="bold" textTransform="uppercase" >
          hi<Typography component="span" fontSize={{xs:"45px",md:"90px"}} fontWeight="bold" color="primary.main">,</Typography>i am
        </Typography>
      

      
        <Typography fontSize={{xs:"45px",md:"90px"}}   fontWeight="bold" textTransform="uppercase" >
          Anandharaj<Typography component="span" fontSize={{xs:"45px",md:"90px"}}   fontWeight="bold" color="primary.main">.</Typography>
        </Typography>
     
        <Typography fontSize={{xs:"20px",md:"35px"}}  fontWeight="bold" textTransform="uppercase" >
          Full stack developer
        </Typography>
        <Stack direction="row" spacing={2}>
            <Link href="https://wa.me/918925191383" target="_blank" underline="none" color="inherit">
              <IconWhatsapp />
            </Link>
            <Link href="https://github.com/Raj-232" target="_blank" underline="none" color="inherit">
              <IconGithub />
            </Link>
            <Link href="mailto:aaraj232@gmail.com" underline="none" color="inherit">
              <IconMail />
            </Link>
            <Link href="tel:+918925191383" underline="none" color="inherit">
              <IconPhoneCall />
            </Link>
            <Link href="https://www.linkedin.com/in/anandharaj-Link-821029229/" target="_blank" underline="none" color="inherit">
              <IconLinkDin />
            </Link>
          </Stack>
        <Button variant='contained'  onClick={handleDownload}>Download Resume</Button>
       
      </Stack>
      </Fade>
      <Grow in={trigger} >
      <Stack
       padding={2}
        alignItems="center"
        spacing={2}>
        <Typography variant="h6" fontWeight="bold" textTransform="uppercase" component="div">
          About me
        </Typography>
        <div>
          <img alt='' src={me} width={270} height={300} style={{ borderRadius: "50%" }} />
        </div>
        <Typography variant="body" width="100%" maxWidth="700px" textTransform="capitalize" component="div">
          Experienced software developer proficient in React and Node.js.
          Skilled in creating scalable web applications with a focus on high- quality code.
          Strong in both front-end and back-end development, with a collaborative mindset.
          Passionate about crafting intuitive userinterfaces and contributing to innovative projects.
        </Typography>




      </Stack>
      </Grow>
    </Box>
  )
}