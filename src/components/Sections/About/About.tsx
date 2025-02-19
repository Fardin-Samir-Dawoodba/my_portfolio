import { Container, Box, Grid } from '@mui/material';
import Image from 'next/image'
import Typography from '@mui/material/Typography';
import ReadMore from '../ReadMore/ReadMore';
import { ColorModeContext } from '../../../../pages/_app';
import { useContext } from 'react';
const About = () => {
    const colorMode = useContext(ColorModeContext)
    return (
    <>
        <Container
        id='about'
            maxWidth='lg'
            sx={{
            margin: '0 auto',
            py: '6em',
          
        }}>
            <Grid
                container
                sx={{
                justifyContent: {
                    sm: 'center',
                    md: 'space-between'
                }
            }}>

                <Grid item xs={12} sm={12} md={4} lg={5}>
                    <Box
                        sx={{
                        maxWidth: '400px',
                        width: '100%',
                        height: '450px',
                        margin: '0 auto',
                        boxShadow: {
                            xs: '-.5em 1.5em 0px #0092ff',
                            sm: '-1.5em 1.5em 0px #0092ff'
                        },
                        position: 'relative'
                    }}>
                        <Box
                            sx={{
                            width: '100px',
                            height: '100px',
                            zIndex: '0',
                            position: 'absolute',
                            right: {
                                xs: '-4%',
                                sm: '90%'
                            },
                            
                            bottom: {
                                xs: '-5%',
                                sm: '-10%'
                            },
                            background: 'transparent',
                            backgroundImage:colorMode.mode === 'dark' ? 'radial-gradient(white 2px, transparent 0)' : 'radial-gradient(black 2px, transparent 0)',
                            backgroundSize: '15px 13px'
                        }}></Box>
                        <Image
                            alt='Personal Image'
                            className='img1 '
                            layout='fill'
                            src={`https://res.cloudinary.com/diql6lwwj/image/upload/v1739913970/IMG-20241026-WA0019_bmwbh3.jpg`}/>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={7.5} lg={7}>
                    <Box sx={{
                        pb: '.5em'
                    }}>
                        <Typography
                            variant='h1'
                            sx={{
                            fontSize: {
                                xs: '2.2em',
                                sm: '2.5em',
                                md: '3em'
                            },
                            py: '.5em',
                            pt: {
                                xs: '1.8em',
                                md:0,
                            }
                        }}
                            fontWeight='600'>
                            About Me, Im Fardin Samir
                        </Typography>
                        <Typography
                            variant='h2'
                            sx={{
                            maxWidth: '570px',
                            fontSize: {
                                xs: '.8em',
                                sm: '1em'
                            }
                        }}>
                      A tech community manager and software developer passionate about building thriving tech ecosystems. I've organized events, moderated forums, and created engaging content to connect and educate developers. Beyond tech, I enjoy gaming and exploring innovative digital experiences. Let's build something amazing together! 🚀

                        </Typography>
                    </Box>
                    <Typography
                            variant='h2'
                            sx={{
                            maxWidth: '570px',
                            fontSize: {
                                xs: '.8em',
                                sm: '1em'
                            },
                            pb:'.5em'
                        }}>
                      I have a strong foundation in software development, with a focus on web technologies and product design. My education has equipped me with problem-solving skills and a passion for tech innovation.

                        </Typography>
                    <ReadMore>
                    I’m passionate about gaming, especially competitive play. I’ve participated in Fortnite tournaments and secured wins. I also enjoy esports, open-source projects, event management, cooking, art, travel, and photography. 🚀
                    </ReadMore>
                </Grid>
            </Grid>

        </Container>

        </>
    
    )
}

export default About
