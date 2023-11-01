import React from 'react';
import Hero from './Hero';
import ProgramCard from './ProgramCard';
import TitleBlock from './TitleBlock';
import coach from '../images/coach.jpg';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import program1 from '../images/Program1.jpg';
import program2 from '../images/Program2.jpeg'
import Card from './Card';
import skill from '../images/skill.JPG';
import experience from '../images/experience.jpg';
import support from '../images/support.JPG';
import Lprogram from './Lprogram';
import lp1 from '../images/lp1.jpg';
import lp2 from '../images/lp2.jpg';
import lp3 from '../images/lp3.jpg';
import Numbers from './Numbers';
import Footer from './Footer';
import Image from './Image';
import Testimonials from './Testimonials';
import Supporter from './Supporter';


const Home = () => {
    const buttonStyle = {
        backgroundColor: '#FFA100',
        color: 'white', // Set text color to white for better visibility
        fontSize: '16px',
    };

    const buttonStyle1 = {
        backgroundColor: '#FFA100',
        color: 'white', // Set text color to white for better visibility
        fontSize: '14px',
    };

    const why = [
        {
            id: 1,
            image: experience,
            title: 'Experience',
            description: 'With more than 15 years of experience in the sports and skill-based learning industry, the minds behind Learnyard felt the need to fill in the gap between a child’s holistic development and livelihood opportunities.'
        },
        {
            id: 2,
            image: skill,
            title: 'Skill',
            description: 'Through scientific training, data-driven analysis, and integrated learning methods – we help the child discover their competency, skills and potential.'
        },
        {
            id: 3,
            image: support,
            title: 'Support',
            description: 'Thereby, supporting them in nurturing their sporting talent and providing a launch pad for them to excel in it.'
        },
    ];


    const DemoPaper = styled(Paper)(({ theme }) => ({
        width: 200,
        height: 20,
        padding: 20,
        ...theme.typography.body2,
        textAlign: 'center',
        backgroundColor: '#F9B234',
        fontSize: '18px',
        color: '#ffff',
        borderRadius: '30px',
        lineHeight: 0,
    }));
    return (
        <>
            <Hero />
            <div className=' bg-[#FEFEFE] pt-10 px-5 font-gilroy-regular'>
                <div className="grid grid-cols-2 gap-4 p-4">
                    <img src={coach} alt="Description of the image" className="w-300 h-auto" />
                    <div className="flex flex-col ">
                        <TitleBlock
                            className="text-2xl font-bold mb-4"
                            title="Make a Difference In Your Child's Life"
                            subtitle="Every child possesses unique physical and mental capabilities. These special abilities get enhanced when the brain cells are actively channelised from the initial years of birth. Hence, the wisest move a parent can take is to allow their child to start early. At Learnyard, we identify your child’s potential and drive their growth towards different attributes of motor skills development and educational proficiency, for them to Make A Mark In Life."
                        />
                        <div className='mt-20 flex justify-center '>
                            <Button variant="contained" style={buttonStyle}>Call Us</Button>
                        </div>

                    </div>
                </div>
                <Stack direction="row" spacing={6} marginLeft={20} marginY={5}>
                    <DemoPaper variant="elevation">Sports</DemoPaper>
                    <DemoPaper variant="elevation">Fitness</DemoPaper>
                    <DemoPaper> Education</DemoPaper>
                    <DemoPaper> Life Skills</DemoPaper>
                    <DemoPaper> Cognitive Learning</DemoPaper>
                </Stack>

                <div className=' my-10'>

                    <TitleBlock

                        title="Our Programs"
                    />
                </div>
                <div className='flex flex-row justify-left ml-32'>
                    <div className='flex flex-column items-center'>
                        <ProgramCard image={program2} />
                        <div>
                            <h1 className='text-xl font-semibold mb-3 text-[#070a47] mt-4' style={{ fontWeight: '700' }}>After School Programs:</h1>
                            <p className='text-[#2f3159] text-lg mr-10'>The Sports program provides an opportunity for children to take part in competitive sport at multiple levels</p>
                            <div className='mt-8 mb-40 flex justify-center '>
                            <Button variant="contained" style={buttonStyle1}>Read More</Button>
                        </div>
                        </div>

                    </div>
                </div>
                <div className='flex justify-center '>
                    <div className='flex flex-column items-center ml-32  mr-10'>
                        <div>

                            <h1 className='text-xl font-semibold mb-3 text-[#070a47] mt-4' style={{ fontWeight: '700' }}>In School Programs:</h1>
                            <p className='text-[#2f3159] text-lg mr-5'>Integrate our structured sports curriculum in your school for the overall health and fitness of the children.</p>
                            <div className='mt-8 flex justify-center '>
                            <Button variant="contained" style={buttonStyle1}>Read More</Button>
                        </div>
                        </div>
                        <ProgramCard image={program1} />
                    </div>
                </div>

                <TitleBlock
                    title='Why Do We Do What We Do And How?'


                />
                <div className="container mx-auto py-8">
                    <div className="flex flex-wrap justify-center">
                        {why.map((item) => (
                            <Card key={item.id} data={item} />
                        ))}
                    </div>
                </div>
                {/* <TitleBlock title='SO FAR..' 
                            subtitle='Leaving Positive Footprints Across'/> */}
                <Numbers  />
              {/*   <TitleBlock
                    title='THE LEARNYARD PROGRAMS'
                    subtitle='Through our network of excellence centres in Navi Mumbai and Thane, we focus on Kinesthetic Learning Styles – because a practical approach enables the child to put their learning into practice as a life skill.'
                />
                <div className='flex flex-row justify-center mt-10'>
                    <Lprogram
                        image={lp1}
                        title='FitToWin'
                        age=' 15 Years & Above'
                        description='Providing a platform to excel in different sports' />
                    <Lprogram
                        image={lp2}
                        title='LearnToWin'
                        age='11 to 15 Years'
                        description='Nurturing the raw talent with scientific training' />
                    <Lprogram
                        image={lp3}
                        title='PathToWin'
                        age=' 4 to 10 Years '
                        description=' Identifying raw talent from peers and encouraging them' />
                </div>
                 */}

                <TitleBlock title='Life At Learnyard'
                            subtitle='Our training centres boast of an environment that allows a child to become a lifelong learner of Sports, Fitness and Education.' />

              <Image/>  
              <Testimonials/>
            <TitleBlock title='Our Supporters'/>
            <Supporter/>
            
            </div>
           
        </>

    )
}

export default Home