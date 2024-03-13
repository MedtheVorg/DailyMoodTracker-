import { ComponentPropsWithoutRef } from 'react';

export type MoodProps = ComponentPropsWithoutRef<'div'> & {
    mood_id: number;
    url: string;
    name: string;
};

export type DailyMoodTrackerProps = {
    setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
};
