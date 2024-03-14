import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/matchers';
import {expect, jest, test} from '@jest/globals'

import Accessibility from '../components/Accessibility';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);


describe("Accessibility Testing", () => {
    test("No Accessibility Violations", async () => {
        const { container } = render(<Accessibility />);
        expect(await axe(container)).toHaveNoViolations();
  
    })
})