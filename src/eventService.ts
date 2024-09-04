import { eventsServiceFactory } from './dataFactories/eventsFactory';
import { EventsDataSource } from './types';

export const dataSourceType: EventsDataSource = 'local-storage';

export const eventsService = eventsServiceFactory(dataSourceType);
