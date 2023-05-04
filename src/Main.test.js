import { React } from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import BookingPage from './components/BookingPage';
import BookingForm from './components/BookingForm';
import { MemoryRouter } from 'react-router-dom';

import Main from './Main';


const availableTimes = { availableTimes: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'] };

test('Renders the Booking page header text', () => {

  const dummyDispatch = () => { }

  const dummySubmitForm = () => { }

  render(<BookingPage availableTimes={availableTimes} updateAvailableTimes={dummyDispatch} submitForm={dummySubmitForm} />);

  const titleElement = screen.getByRole('heading', { level: 1 });
  expect(titleElement).toHaveTextContent("Reservations");

  const subHeadingElement = screen.getByRole('heading', { level: 2 });
  expect(subHeadingElement).toHaveTextContent("Come dine with us!");

  const instructionsElement = screen.getByText("Fill in your details below to make your reservation.");
  expect(instructionsElement).toBeInTheDocument();

});


test('initializeTimes function of Main component returns object containing array of booking times available, used to initialise the times drop-down.', async () => {

  /* Must mock jquery match media function . */
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

  /* Must wrap the Main component in an instance of BrowserRouter or similar or the test
  throws an error with the use of useNavigate. */
  const {rerender} = render(
    <MemoryRouter initialEntries={["/reservations"]}>
      <Main />
    </MemoryRouter>);

  /* On first render, the available times and time picker are initialised empty */
  let timePicker = screen.getByLabelText(/Choose time/);
  expect(timePicker.length).toBe(0);

  /* Ideally, we would use await waitFor() here to wait for the useEffect() hook code to complete,
    but it times out without the check passing, so instead we force a re-render
  await waitFor(() => expect(screen.getByLabelText(/Choose time/).length).toBeGreaterThan(0), { timeout: 8000 });

  }, 10000);
  */
  rerender(
    <MemoryRouter initialEntries={["/reservations"]}>
      <Main />
    </MemoryRouter>);

  /* Now that the asynchronous useEffect code has run, force a re-render to see the populated time picker */
  expect(screen.getByLabelText(/Choose time/).length).toBeGreaterThan(0);

});


test('updateTimes function is called on selection of a new date, and the times drop-down options are updated accordingly.', async () => {

  /* Must mock jquery match media function . */
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

  /* Must wrap the Main component in an instance of BrowserRouter or similar or the test
  throws an error with the use of useNavigate. */
  const {rerender} = render(
    <MemoryRouter initialEntries={["/reservations"]}>
      <Main />
    </MemoryRouter>);

  /* On first render, the available times and time picker are initialised empty */
  let timePicker = screen.getByLabelText(/Choose time/);
  expect(timePicker.length).toBe(0);

  rerender(
    <MemoryRouter initialEntries={["/reservations"]}>
      <Main />
    </MemoryRouter>);
  expect(screen.getByLabelText(/Choose time/).length).toBeGreaterThan(0);

  /* Update the date selector to select Thu May 04, which will result in the pseudo random 7 values
    17:00, 17:30, 18:00, 19:30, 20:30, 21:00, 21:30 for the time picker */
  fireEvent.change(screen.getByLabelText(/Choose date/), { target: { value: '2023-05-04' } });
  
  rerender(
    <MemoryRouter initialEntries={["/reservations"]}>
      <Main />
    </MemoryRouter>);

  expect(screen.getByLabelText(/Choose time/).length).toBe(7);

  /* Update the date selector to select Fri May 10, which will result in the pseudo random 8 values 
    for the time picker */
    fireEvent.change(screen.getByLabelText(/Choose date/), { target: { value: '2023-05-10' } });
    
    rerender(
      <MemoryRouter initialEntries={["/reservations"]}>
        <Main />
      </MemoryRouter>);
  
    expect(screen.getByLabelText(/Choose time/).length).toBe(8);

});