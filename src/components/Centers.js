import React from 'react';
import fifteen from '../images/Photos/18.jpg';
import TitleBlock from './TitleBlock';

const centerData = [
  { id: 1, name: "Central Park, Ghansoli FitToWin Program", center: "Football", timing: "Tuesday, Thursday, Saturday 6 to 7 & 7 to 8 pm", mapUrl: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.7840102707237!2d72.99995147520646!3d19.117129082095982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c0c8ac4694c7%3A0x79cc832518d60ed4!2sCentral%20Park%20Ghansoli!5e0!3m2!1sen!2sin!4v1698839376711!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>' },
  { id: 2, name: "Aurum Q, Ghansoli LearnToWin Program", center: "Physical Fitness and Motor Development", timing: "Tuesday, Thursday, Friday7 to 8 pm", mapUrl:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.7160169878443!2d73.00712057497854!3d19.120110282093478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c0c75c8d87ed%3A0x226a7433aef7f55f!2sAurum%20Q%20Residences!5e0!3m2!1sen!2sin!4v1698840367791!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>' },
  { id: 3, name: "New Bombay City School, Ghansoli", center: "PathToWin Program", timing: "Monday, Wednesday, Friday6 to 7 pm", mapUrl:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.792199702727!2d72.99651597497855!3d19.11676998209621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1e6ea86b01b%3A0xc33acf1b82326d6f!2sNEW%20BOMBAY%20CITY%20SCHOOL%2C%20CBSE!5e0!3m2!1sen!2sin!4v1698840429103!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>' },
  { id: 4, name: "Terna Orchid Football Turf FitToWin Program", center: "Football", timing: "Monday, Wednesday and Friday 7 to 8 pm", mapUrl:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15079.75400340488!2d72.98612558715818!3d19.110353700000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c10c5e8c54a7%3A0x1225547fedecc723!2sTerna%20Orchids%2C%20Sports%20ground!5e0!3m2!1sen!2sin!4v1698840690166!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>' },
  { id: 5, name: "Empyrean School Turf, Kharghar FitToWin Program", center: "Football", timing: "Monday, Wednesday and Friday 6 to 7 & 7 to 8 pm", mapUrl:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.886753933191!2d73.06621047497713!3d19.068716082134326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c132784a6973%3A0x401c7d2200fb46c!2sEmpyrean%20Football%20School!5e0!3m2!1sen!2sin!4v1698840758240!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>' },
  { id: 6, name: "Podar International School Turf, Seawoods FitToWin Program", center: "Basketball (fit to win program)", timing: "Tuesday, Thursday, Saturday 6 to 7 & 7 to 8 pm", mapUrl:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5399.7164766281285!2d73.00862668247805!3d19.01349942440947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c39bc4f86307%3A0x54aa6e7d3be0912d!2sPodar%20International%20School!5e0!3m2!1sen!2sin!4v1698840818968!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>' },
  { id: 9, name: "More on way", timing: "Comming soon...." },
];

const Centers = () => {
  return (
    <div className='font-gilroy-regular'>
      <div className="w-full h-full bg-no-repeat bg-cover bg-center px-44 py-10 flex" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${fifteen})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100%',
        position: 'relative'
      }}>
        <div className='p-24'>
          <p className="md:text-5xl text-2xl font-title  text-[#ffffff] my-10 text-center ml-5 md:max-w-[1300px] md:mx-auto">
            Centers
          </p>
        </div>
      </div>
      <TitleBlock title='Discover Our Centers'
        subtitle='Explore our network of centers, each meticulously designed to serve you better.' />
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 m-10   ">
        {centerData.map((center) => (
          <div key={center.id} className=" p-8 border rounded-lg shadow-lg justify-center md:max-w-[600px] ml-16 ">
            <h2 className="text-xl  text-[#070a47] font-semibold mb-2">{center.name}</h2>
            <p className="mb-2  text-[#070a47]">{center.center}</p>
            <p className=' text-[#070a47] pb-4'>{`Timing: ${center.timing}`}</p>
            <div className="h-48 lg:h-64 w-full overflow-hidden font-gilroy-regular">
              <iframe
                title="Google Map"
                width="600px" // Set the width to your desired fixed value
                height="450px"
                frameBorder="0"
                style={{ border: 0, overflow: 'hidden' }}
                srcDoc={center.mapUrl}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Centers;

