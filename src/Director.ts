
// Календарь - это Dependency, который инжектируется в Director.
// Director зависит от интерфейса, а не от конкретной реализации.
// Director не знает, как работает Calendar, он знает только то, что у него есть метод addEvent.
// Director работает с интерфейсом ICalendar, а не с конкретной реализацией Calendar.

interface ICalendar {
  addEvent(event: any): void;
}

class Calendar implements ICalendar {
  addEvent(event) {
    // some logic to add event
  }
}

class Director {
  private readonly calendar: ICalendar;

  constructor(calendar: ICalendar) {
    this.calendar = calendar;
  }

  scheduleMeeting(event) {
    this.calendar.addEvent(event);
  }
}

