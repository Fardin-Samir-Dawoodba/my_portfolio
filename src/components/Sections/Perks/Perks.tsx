import {Box, Container, Typography, Divider} from '@mui/material';
import PerkCard from './PerkCard';
import {useEffect} from 'react';
import gsap from 'gsap';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import MainTitleAnimation from '../../../gsap/MainTitleAnimation';
import HandymanIcon from '@mui/icons-material/Handyman';
import HttpIcon from '@mui/icons-material/Http';
import DevicesIcon from '@mui/icons-material/Devices';

export const centeredStyles = {
    alignItems: 'center',
    textAlign: 'center',
    margin: '0 auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
}

gsap.registerPlugin(ScrollTrigger);


const perksArray = [{
    title:'Community Manager',
    Icon:HandymanIcon,
    text:'I have managed and nurtured thriving tech communities, organizing 40+ workshops, conferences, and community engagement events. My experience includes moderating discussions, creating engaging content, and fostering developer collaboration. I’ve helped connect tech enthusiasts, supported open-source initiatives, and contributed to building vibrant, knowledge-sharing ecosystems.',
},
{
    title : 'Web Developer',
    text : 'I have built 20+ websites and web apps using modern technologies, focusing on clean design patterns and high performance. From intuitive UI/UX to scalable backend solutions, I create seamless digital experiences. My work spans personal projects, client-based solutions, and open-source contributions, ensuring functionality, accessibility, and innovation in every build.',
    Icon :  HttpIcon,
}   ,
{
    title : 'Marketing',
    Icon : DevicesIcon,
    text : 'I have led marketing initiatives for 15+ tech events and communities, driving engagement through strategic content, social media campaigns, and brand partnerships. My experience includes crafting compelling narratives, increasing audience reach, and building strong online presence for brands. I focus on data-driven marketing to maximize impact and community growth.'
}
]
const Perks = () => {

    

    useEffect(() => {
        MainTitleAnimation('.h1','.h2')
    }, [])

    return ( <> <Container
        maxWidth='lg'
        sx={{
        margin: '0 auto',
        my: '4em'
    }}>
        <Box sx={centeredStyles}>
            <Typography
                className='h1 t25o0'
                variant='h1'
                sx={{
             
                fontSize: {
                    xs: '2.2em',
                    sm: '2.5em',
                    md: '3em'
                }
            }}
                fontWeight='600'>
                You&lsquo;re Safe And in Good Hands
            </Typography>
            <Typography
                variant='h2'
                className='secondary h2'
                sx={{
                pt: '1.5em',
                transform: 'translateY(15px)',
                opacity: 0,
                maxWidth: '570px',
                fontSize: {
                    xs: '.8em',
                    sm: '1em'
                }
            }}>
                Customer satisfaction comes first, and in order to do that I decided to pickup skills and principles to provide quality service.
            </Typography>

            <Box
                sx={{
                mt: '3em',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '5%',
                justifyContent: {
                    xs: 'center',
                    sm: 'space-between'
                }
            }}>
                {perksArray.map(perk => {
                    return <PerkCard  key={perk.title} title={perk.title} text={perk.text} Icon={perk.Icon}/>
                })}
            </Box>
        </Box>
    </Container> < Divider /> </>)
}

export default Perks