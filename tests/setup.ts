import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

// add extra matchers for DOM elements
// https://github.com/testing-library/jest-dom?tab=readme-ov-file#with-vitest
import '@testing-library/jest-dom/vitest';

afterEach(() => {
    cleanup();
});
