import { happy, angry, chill, relaxed, sad, sleepy } from '../assets/moods';
import { DailyMoodTrackerProps } from '../types';
import Mood from './Mood';

export default function DailyMoodTracker({
    setIsSubmitted,
}: DailyMoodTrackerProps) {
    return (
        <>
            <h1
                className='font-bold text-4xl capitalize text-[#020817] text-center mb-8'
                data-aos='fade-down'
                data-testid='moods-header'
            >
                tell us how you felt throughout the day ?
            </h1>
            <div
                className='grid  grid-cols-2 md:grid-cols-3 md:place-items-center  gap-8 items-center justify-center overflow-hidden  p-4 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] rounded-lg'
                data-testid='container'
            >
                <Mood
                    mood_id={happy.mood_id}
                    url={happy.url}
                    name={happy.name}
                    data-aos='slide-right'
                    data-aos-delay={150 * happy.mood_id}
                    onClick={() => setIsSubmitted(true)}
                />
                <Mood
                    mood_id={chill.mood_id}
                    url={chill.url}
                    name={chill.name}
                    data-aos='slide-down'
                    data-aos-delay={150 * chill.mood_id}
                    onClick={() => setIsSubmitted(true)}
                />
                <Mood
                    mood_id={relaxed.mood_id}
                    url={relaxed.url}
                    name={relaxed.name}
                    data-aos='slide-left'
                    data-aos-delay={150 * relaxed.mood_id}
                    onClick={() => setIsSubmitted(true)}
                />
                <Mood
                    mood_id={sad.mood_id}
                    url={sad.url}
                    name={sad.name}
                    data-aos='slide-right'
                    data-aos-delay={150 * sad.mood_id}
                    onClick={() => setIsSubmitted(true)}
                />
                <Mood
                    mood_id={angry.mood_id}
                    url={angry.url}
                    name={angry.name}
                    data-aos='slide-up'
                    data-aos-delay={150 * angry.mood_id}
                    onClick={() => setIsSubmitted(true)}
                />
                <Mood
                    mood_id={sleepy.mood_id}
                    url={sleepy.url}
                    name={sleepy.name}
                    data-aos='slide-left'
                    data-aos-delay={150 * sleepy.mood_id}
                    onClick={() => setIsSubmitted(true)}
                />
            </div>
        </>
    );
}
