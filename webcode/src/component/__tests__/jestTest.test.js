import {render, screen, cleanup} from '@testing-library/react';
import JestTest from '../jestTest';

test('should render jestTest component', () => {
   render(<JestTest/>);
   const todoElement = screen.getByTestId('jestTest-1');
   expect(todoElement).toHaveTextContent("My test case using jest");
})