const footerList = [
    ['MIT | xPRO', 'https://xpro.mit.edu/'],
    ['Full Stack Coding Bootcamp', 'https://xpro.mit.edu/programs/program-v1:xPRO+PCCx+R1/'],
    ['MERN Development', 'https://executive-ed.xpro.mit.edu/professional-certificate-coding'],
    ['Portfolio', 'https://www.codebypete.com/'],
    ['About Us', 'https://www.codebypete.com/pages/about.html'],
    ['Blog', 'https://www.codebypete.com/pages/blog.html'],
    ['Projects', 'https://www.codebypete.com/pages/projects.html'],
    ['Careers', 'https://www.codebypete.com/pages/resume.html'],
    ['Contact Us', 'https://www.codebypete.com/pages/contact.html'],
    ['GitHub Readme', 'https://github.com/codeTrackLift/xchange#readme'],
    ['MIT License', 'https://github.com/codeTrackLift/xchange/blob/main/LICENSE'],
]

const listStyle = {
    display: 'flex',
    flexWrap: 'wrap',
}

const listItemStyle = {
    listStyleType: 'none',
    marginBlock: '0.25rem',
    paddingInline: '1rem',
    borderLeft: '1px solid black',
}
export const FooterList = () => {
    return (
        <div id='fdic' className='mt-4 text-start'>
            <ul style={listStyle}>
                {footerList.map((item, i) => (
                    <li key={i} style={listItemStyle}><a href={item[1]} target='_blank' rel='noreferrer'>{item[0]}</a></li>
                ))}
            </ul>
        </div>
    )
}