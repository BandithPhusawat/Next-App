import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [ 
        {
          name: 'Bufolo-Bank-Model',
          title: 'โครงการธนาคารควาย',
          description: 'โครงการส่งเสริมการเลี้ยงควาย เพื่อพัฒนาการเกษตรแบบยั่งยืน และเรียนรู้วัฏจักร ชีวิต รวมถึงระบบนิเวศ ตามธรรมชาติ',
          fileName: 'card_3.jpg'
        },
        {
          name: 'mushroom_1',
          title: 'โครงการ เห็ดนางฟ้าภูฐาน GAP',
          description: '',
          fileName: 'card_1.jpg'
        },
        {
          name: 'mushroom_2',
          title: 'โครงการผักปลอดสาร GAP',
          description: '',
          fileName: 'card_2.jpg'
        },
        {
          
        }


];

const theme = createTheme();

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="md">
            <Typography
              component="h2"
              variant="h5"
              align="center"
              color="text.primary"
              gutterBottom
            >
              โครงการโหนกหลุมควาย ( Bank Buffalo Model )
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              โครงการเกษตรปราณีต เพื่อความยั่งยืนของ คนไทย และส่งเสริมคนรุ่นใหม่ที่มีความสนใจ ในการเกษตรอินทรีย์
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
            </Stack>
          </Container>
        </Box>

        <Container sx={{ py: 3 }} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card, key) => (
              <Grid item key={key} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' , borderRadius: 4 }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                        borderRadius: 4,
                    }}
                    image= { "/images/"+card.fileName}
                    alt={ card.name }
                  />
                  <CardContent sx={{ flexGrow: 1 }} style={{ padding: '1 rem' }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      <b>{ card.title }</b>
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                  {/* <CardActions>
                    <Button size="small">อ่านเพิ่ม</Button>
                  </CardActions> */}
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}