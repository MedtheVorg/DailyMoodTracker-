import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import DailyMoodTracker from './DailyMoodTracker';

describe('DailyMoodTracker component tests', () => {
    screen.debug();
    it('renders an H1 header', () => {
        // render the dailymoodtracker component to the screen
        const { getByTestId } = render(
            <DailyMoodTracker setIsSubmitted={() => {}} />
        );
        const header = getByTestId('moods-header');
        expect(header).toBeInTheDocument();
    });
    it('renders 6 Mood Components', () => {
        // render the dailymoodtracker component to the screen
        const { getByTestId } = render(
            <DailyMoodTracker setIsSubmitted={() => {}} />
        );

        const moodsContainer = getByTestId('container');

        expect(moodsContainer.childNodes.length).toBe(6);
    });
});
