import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import Mood from './Mood';
import { happy } from '../assets/moods';

describe('Mood Component', () => {
    it('renders a mood component with a name and an image', () => {
        const { getByTestId } = render(
            <Mood
                name={happy.name}
                mood_id={happy.mood_id}
                url={happy.url}
                data-aos-delay={150 * happy.mood_id}
            />
        );

        expect(getByTestId('mood-name')).toHaveTextContent('happy');
        expect(getByTestId('mood-image')).toHaveAttribute(
            'src',
            expect.stringContaining(happy.url)
        );
        expect(getByTestId('mood-container')).toHaveAttribute(
            'data-aos-delay',
            expect.stringContaining(String(150 * happy.mood_id))
        );
    });

    it('should emit that the mood component was clicked', () => {
        const handleClick = vi.fn();
        const { getByTestId } = render(
            <Mood
                name={happy.name}
                mood_id={happy.mood_id}
                url={happy.url}
                data-aos-delay={150 * happy.mood_id}
                onClick={handleClick}
            />
        );

        fireEvent.click(getByTestId('mood-container'));
        expect(handleClick).toHaveBeenCalledOnce();
    });
});
