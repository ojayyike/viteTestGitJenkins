import Greeting from '../components/Greeting'
import { render,screen,fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom'

describe('Greeting component', () => {
    test('renders "Hello World" as a text', () => {
        // Arrange
        render(<Greeting />)
        
        //Act
        // ...Nothing

        //Assert
        const helloWorldElement = screen.getByText(/hello world/i)
        expect(helloWorldElement).toBeInTheDocument();

    })

    test('renders great to see you when button NOT clicked', () => {
        // Arrange
        render(<Greeting />)
        
        //Act
        //..Nothing

        //Assert
        const outputElement = screen.getByText(/It is great to see you!/i)
        expect(outputElement).toBeInTheDocument();

    })

    test('renders Welome to react when button clicked', async () => {
        //Arrange
        render(<Greeting />);
 
        //act (perform the main action)
        await fireEvent.click(screen.getByTestId('greeting-btn'))
 
        //assert the results (see if they match our expectations)
        const outputChangedElement = screen.getByText('Welcome to React', { exact: false });
        expect(outputChangedElement).toBeInTheDocument();
    })

    test('does not render good to see you when button is clicked',async () => {
        //Arrange
        render(<Greeting />);

        await fireEvent.click(screen.getByTestId('greeting-btn'))


        //Assert 
        const outputElement = screen.queryByText(/good to see you/i)
        expect(outputElement).toBeNull()
    })
})

describe('Greeting component snapshot', () => {
    //Snapshot test to ensure UI component was not altered unexpectedly

    test("Ensure UI matches snapshot", () => {
        const tree = renderer.create(<Greeting />).toJSON()
        expect(tree).toMatchSnapshot();
    }) 
}
)

