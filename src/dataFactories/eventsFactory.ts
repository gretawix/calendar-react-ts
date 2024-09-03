import type {
  EventsService,
  SingleEvent,
  EventsDataSource,
} from '../types/main';

const eventsLocalStorageKey = 'events';
const initialEvents: SingleEvent[] = [];

class EventsLocalStorageService implements EventsService {
  async getAll(): Promise<SingleEvent[]> {
    const localData = localStorage.getItem(eventsLocalStorageKey);
    if (localData) {
      return JSON.parse(localData) as SingleEvent[];
    } else {
      return initialEvents;
    }
  }

  async saveEvent(newEvent: SingleEvent): Promise<void> {
    const allEvents = await this.getAll();
    allEvents.push(newEvent);
    localStorage.setItem(eventsLocalStorageKey, JSON.stringify(allEvents));
  }
}

export const eventsServiceFactory = (
  source: EventsDataSource
): EventsService => {
  if (source === 'local-storage') {
    return new EventsLocalStorageService();
  }
  throw new Error(`Unsupported source: ${source}`);
};
