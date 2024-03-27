import { Button, Card, CardContent, Link, Stack, TextField, Typography } from "@mui/material";
import { IconGithub, IconLinkDin, IconMail, IconPhoneCall, IconWhatsapp } from "../../asstes/Icons";

export default function Contact() {
  return (
    <Stack
      padding={2}
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >

      <Typography variant="h5" fontWeight="bold" textTransform="uppercase" textAlign="center">
        Contact me
      </Typography>
      <Card sx={{ width: "100%", maxWidth: "700px", boxShadow: 24 }}>
        <CardContent sx={{ display: "grid", gap: 2 }}>

          <TextField id="name" label="Name" variant="outlined" fullWidth />
          <TextField id="email" label="Email" variant="outlined" fullWidth />

          <TextField id="subject" label="Email subject" variant="outlined" fullWidth />

          <TextField
            id="outlined-multiline-flexible"
            label="Your Message"
            multiline
            minRows={4}
            maxRows={14}
            fullWidth
          />
          <Button variant="contained" >Submit</Button>
          <Stack direction="row" justifyContent="space-between" padding={{ sm: "5px 120px 0px 120px", xs: "10px" }}>
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
        </CardContent>

      </Card>
    </Stack>
  )
}