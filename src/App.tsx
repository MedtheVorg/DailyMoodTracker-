import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import DailyMoodTracker from './components/DailyMoodTracker';

function App() {
    useEffect(() => {
        Aos.init({
            easing: 'ease-out-quart',
            disable: () => {
                return window.innerWidth < 756;
            },
        });
    }, []);
    const [isSubmitted, setIsSubmitted] = useState(false);
    return (
        <>
            <div className='max-w-screen-xl mx-auto p-4 min-h-screen flex flex-col items-center justify-center '>
                {!isSubmitted ? (
                    <DailyMoodTracker setIsSubmitted={setIsSubmitted} />
                ) : (
                    <div
                        data-aos='fade-down'
                        data-aos-delay={150}
                        className='bg-white w-[90%] p-8  text-center rounded-lg md:w-[70%]  md:text-4xl'
                    >
                        thanks for the input see you tomorrow ! 👋
                    </div>
                )}
            </div>
        </>
    );
}

export default App;
