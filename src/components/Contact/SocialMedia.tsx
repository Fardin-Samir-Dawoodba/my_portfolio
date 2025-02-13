import {Box} from "@mui/material"
import SocialMediaIcon from './SocialMediaIcon';

export const SocialMediaArray = [
    {
        title: 'LinkedIn',
        href: 'https://www.linkedin.com/in/fardin-samir-d-97b44b23a/?originalSubdomain=in',
        color: '#0e76a8',
        svg: 'https://www.svgrepo.com/show/138936/linkedin.svg'

    }, {
        color: '#171515',
        title: 'Github',
        href: 'https://github.com/Fardin-Samir-Dawoodba',
        svg: 'https://www.svgrepo.com/show/343674/github.svg'
    }, {
        title: 'Twitter',
        href: "https://www.x.com/etrnlnite",
        color: '#4267B2',
        svg: 'https://res.cloudinary.com/diql6lwwj/image/upload/v1739418373/twitter-x-logo-png_seeklogo-492396_ce0mqz.png'
    }
]

const SocialMedia = () => {

    return (
        <Box sx={{
            pt: '1em',
            pb:'3em',
            display: 'flex'
        }}>
            {SocialMediaArray.map(icon => {

                return <SocialMediaIcon
                    svg={icon.svg}
                    key={icon.href}
                    title={icon.title}
                    href={icon.href}
                    color={icon.color}/>
            })}
        </Box>

    )
}

export default SocialMedia
