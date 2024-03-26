import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useStore from './globalstate/store';

export const Theme = ({ children }) => {
    const {text} =useStore();
    const darkTheme = createTheme({
        palette: {
            mode: text,
            primary: {
                main: '#009688',
              },
        },
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};