export class PassengerDashboardService {
  constructor() {}

  getPassengers() {
    return [
      {
        id: 1,
        fullName: 'Macy, Ted',
        checkedIn: true,
        checkedInDate: 1490471118411,
        children: null
      },
      {
        id: 2,
        fullName: 'Monday, Betty',
        checkedIn: true,
        checkedInDate: 1490471096107,
        children: [{ name: 'ted', age: 12 }]
      }
    ]
  }
}