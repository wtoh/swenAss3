import { RoomBookingAndAvailabilityPage } from './app.po';

describe('room-booking-and-availability App', function() {
  let page: RoomBookingAndAvailabilityPage;

  beforeEach(() => {
    page = new RoomBookingAndAvailabilityPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
