import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function LoadingData() {
    return (
        <Box sx={{ width: '100%' }}>
            <LinearProgress />
        </Box>
    );
}
