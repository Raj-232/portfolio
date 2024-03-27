import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useStore from './globalstate/store';

export const Theme = ({ children }) => {
    const {mode} =useStore();
    const darkTheme = createTheme({
        palette: {
            mode: mode,
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