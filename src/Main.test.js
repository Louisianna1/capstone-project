import { React } from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import BookingPage from './components/BookingPage';
import BookingForm from './components/BookingForm';
import { MemoryRouter } from 'react-router-dom';

import Main from './Main';


const availableTimes = { availableTimes: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'] };

const dummyDispatch = () => { }

const dummySubmitForm = () => { }

test('Renders the Booking page header text.', () => {

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
  expect(timePicker.length).toBe(1); // Contains "- Select -" placeholder

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
  expect(timePicker.length).toBe(1); // Contains "- Select -" placeholder

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

  expect(screen.getByLabelText(/Choose time/).length).toBe(8); // 7 times + "- Select -" placeholder

  /* Update the date selector to select Fri May 10, which will result in the pseudo random 8 values 
    for the time picker */
    fireEvent.change(screen.getByLabelText(/Choose date/), { target: { value: '2023-05-10' } });
    
    rerender(
      <MemoryRouter initialEntries={["/reservations"]}>
        <Main />
      </MemoryRouter>);
  
    expect(screen.getByLabelText(/Choose time/).length).toBe(9); // 8 times + "- Select -" placeholder

});


test('Initially (after useEffect() hook code completes) the booking form renders with all 4 fields having no/default value selected.', () => {

  const {rerender} = render(
    <BookingPage availableTimes={availableTimes} updateAvailableTimes={dummyDispatch} submitForm={dummySubmitForm} />
    );

  /* Force a re-render to ensure that useEffect() code has completed */
  rerender(
    <MemoryRouter initialEntries={["/reservations"]}>
      <Main />
    </MemoryRouter>);

  /* Check the value of the 4 fields */
  const bookingDateField = screen.getByLabelText(/Choose date/);
  expect(bookingDateField.value).toBe("");
  
  const bookingTimeField = screen.getByLabelText(/Choose time/);
  expect(bookingTimeField.value).toBe("- Select -");

  const bookingTotalGuestsField = screen.getByLabelText(/Number of guests/);
  expect(bookingTotalGuestsField.value).toBe("1");

  const bookingOccasionField = screen.getByLabelText(/Occasion/);
  expect(bookingOccasionField.value).toBe("- Select -");

  /* Check that the submit button is disabled owing to the client-side validation rules not all passing */
  const submitButton = screen.getByTestId(/submissionButton/);
  expect(submitButton).toBeDisabled();

});


test('The Booking Date field must be populated for the form submission button to be enabled.', () => {

  const {rerender} = render(
    <BookingPage availableTimes={availableTimes} updateAvailableTimes={dummyDispatch} submitForm={dummySubmitForm} />
    );

  /* Force a re-render to ensure that useEffect() code has completed */
  rerender(
    <MemoryRouter initialEntries={["/reservations"]}>
      <Main />
    </MemoryRouter>);

  /* Populate the other 3 fields and check that the form submission button is still disabled */
  const bookingTimeField = screen.getByLabelText(/Choose time/);
  fireEvent.change(bookingTimeField, { target: { value: "18:00" } });
  
  const bookingTotalGuestsField = screen.getByLabelText(/Number of guests/);
  fireEvent.change(bookingTotalGuestsField, { target: { value: "2" } });

  const bookingOccasionField = screen.getByLabelText(/Occasion/);
  fireEvent.change(bookingOccasionField, { target: { value: "Anniversary" } });

  /* Check that the submit button is disabled owing to the client-side validation rules not all passing */
  let submitButton = screen.getByTestId(/submissionButton/);
  expect(submitButton).toBeDisabled();

  /* Populate the Booking Date field and check that the submission button is now enabled */
  const bookingDateField = screen.getByLabelText(/Choose date/);
  fireEvent.change(bookingDateField, { target: { value: "2030-02-13" } });

  submitButton = screen.getByTestId(/submissionButton/);
  expect(submitButton).not.toBeDisabled();

});


test('The Booking Date field does not allow you to select a date in the past.', () => {

  const {rerender} = render(
    <BookingPage availableTimes={availableTimes} updateAvailableTimes={dummyDispatch} submitForm={dummySubmitForm} />
    );

  /* Force a re-render to ensure that useEffect() code has completed */
  rerender(
    <MemoryRouter initialEntries={["/reservations"]}>
      <Main />
    </MemoryRouter>);

  /* Attempt to set Booking Date to yesterday */ 
  let today = new Date();
  today.setDate(today.getDate() - 1);
  /* Get yesterday's date in yyyy-mm-dd format */
  let yesterday = today.toISOString().split('T')[0];
  const bookingDateField = screen.getByLabelText(/Choose date/);
  fireEvent.change(bookingDateField, { target: { value: {yesterday} } });

  const bookingDateField2 = screen.getByLabelText(/Choose date/);
  expect(bookingDateField2.value).toBe("");

  /* Now set Booking Date to tomorrow's date and check that the input control updated */
  let today2 = new Date();
  today2.setDate(today2.getDate() + 1);
  /* Get tomorrow's date in yyyy-mm-dd format */
  //2023-05-08
  let tomorrow = today2.toISOString().split('T')[0];
  fireEvent.change(bookingDateField2, { target: { value: tomorrow } });

  const bookingDateField3 = screen.getByLabelText(/Choose date/);
  expect(bookingDateField3.value).toBe(tomorrow);

});


test('The Booking Time field must be populated for the form submission button to be enabled.', () => {

  const {rerender} = render(
    <BookingPage availableTimes={availableTimes} updateAvailableTimes={dummyDispatch} submitForm={dummySubmitForm} />
    );

  /* Force a re-render to ensure that useEffect() code has completed */
  rerender(
    <MemoryRouter initialEntries={["/reservations"]}>
      <Main />
    </MemoryRouter>);

  /* Populate the other 3 fields and check that the form submission button is still disabled */
  const bookingDateField = screen.getByLabelText(/Choose date/);
  fireEvent.change(bookingDateField, { target: { value: "2030-02-13" } });
  
  const bookingTotalGuestsField = screen.getByLabelText(/Number of guests/);
  fireEvent.change(bookingTotalGuestsField, { target: { value: "2" } });

  const bookingOccasionField = screen.getByLabelText(/Occasion/);
  fireEvent.change(bookingOccasionField, { target: { value: "Anniversary" } });

  /* Check that the submit button is disabled owing to the client-side validation rules not all passing */
  let submitButton = screen.getByTestId(/submissionButton/);
  expect(submitButton).toBeDisabled();

  /* Populate the Booking Time field and check that the submission button is now enabled */
  const bookingTimeField = screen.getByLabelText(/Choose time/);
  fireEvent.change(bookingTimeField, { target: { value: "18:00" } });

  submitButton = screen.getByTestId(/submissionButton/);
  expect(submitButton).not.toBeDisabled();

});


test('The Booking Total Guests field defaults to 1 and therefore doesnt have to be set explicitly.', () => {

  const {rerender} = render(
    <BookingPage availableTimes={availableTimes} updateAvailableTimes={dummyDispatch} submitForm={dummySubmitForm} />
    );

  /* Force a re-render to ensure that useEffect() code has completed */
  rerender(
    <MemoryRouter initialEntries={["/reservations"]}>
      <Main />
    </MemoryRouter>);

  /* Populate the other 3 fields and check that the form submission button is still disabled */
  const bookingDateField = screen.getByLabelText(/Choose date/);
  fireEvent.change(bookingDateField, { target: { value: "2030-02-13" } });

  const bookingTimeField = screen.getByLabelText(/Choose time/);
  fireEvent.change(bookingTimeField, { target: { value: "18:00" } });

  const bookingOccasionField = screen.getByLabelText(/Occasion/);
  fireEvent.change(bookingOccasionField, { target: { value: "Anniversary" } });

  /* Check that the submit button is enabled owing to the Booking Total Guests field defaulting to 1 */
  let submitButton = screen.getByTestId(/submissionButton/);
  expect(submitButton).not.toBeDisabled();

});


test('The Booking Occasion field must be populated for the form submission button to be enabled.', () => {

  const {rerender} = render(
    <BookingPage availableTimes={availableTimes} updateAvailableTimes={dummyDispatch} submitForm={dummySubmitForm} />
    );

  /* Force a re-render to ensure that useEffect() code has completed */
  rerender(
    <MemoryRouter initialEntries={["/reservations"]}>
      <Main />
    </MemoryRouter>);

  /* Populate the other 3 fields and check that the form submission button is still disabled */
  const bookingDateField = screen.getByLabelText(/Choose date/);
  fireEvent.change(bookingDateField, { target: { value: "2030-02-13" } });

  const bookingTimeField = screen.getByLabelText(/Choose time/);
  fireEvent.change(bookingTimeField, { target: { value: "18:00" } });

  const bookingTotalGuestsField = screen.getByLabelText(/Number of guests/);
  fireEvent.change(bookingTotalGuestsField, { target: { value: "2" } });

  /* Check that the submit button is disabled owing to the client-side validation rules not all passing */
  let submitButton = screen.getByTestId(/submissionButton/);
  expect(submitButton).toBeDisabled();

  /* Populate the Booking Occasion field and check that the submission button is now enabled */
  const bookingOccasionField = screen.getByLabelText(/Occasion/);
  fireEvent.change(bookingOccasionField, { target: { value: "Anniversary" } });

  submitButton = screen.getByTestId(/submissionButton/);
  expect(submitButton).not.toBeDisabled();

});


