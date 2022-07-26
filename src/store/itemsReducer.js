import { FILTER_ITEMS, LOAD_ITEMS } from './types';

const defaultState = {
  items: [
    {
      id: 1,
      title: 'Tokyo',
      description: 'Tokyo formerly Edo, historically Tokio, and officially the Tokyo Metropolis is the capital and largest city of Japan.',
      url: 'https://source.unsplash.com/random/1',
      price: 2000,
      tags: ['forest', 'water', 'cottage'],
    },
    {
      id: 2,
      title: 'Jakarta',
      description: 'Jakarta, officially the Special Capital Region of Jakarta ',
      url: 'https://source.unsplash.com/random/2',
      price: 2400,
      tags: ['beach', 'forest', 'cottage'],
    },
    {
      id: 3,
      title: 'Delhi',
      description: 'Delhi officially the National Capital Territory (NCT) of Delhi, is a city and a union territory of India containing New Delhi, the capital of India.',
      url: 'https://source.unsplash.com/random/3',
      price: 1900,
      tags: ['beach', 'golf', 'cottage'],
    },
    {
      id: 4,
      title: 'Manila',
      description: 'Manila officially the City of Manila is the capital of the Philippines, and its second-most populous city.',
      url: 'https://source.unsplash.com/random/4',
      price: 3590,
      tags: ['forest', 'golf', 'cottage'],
    },
    {
      id: 5,
      title: 'New York',
      description: 'New York City was the capital of the United States from 1785 until 1790, and has been the largest U.S. city since 1790. ',
      url: 'https://source.unsplash.com/random/5',
      price: 1600,
      tags: ['beach', 'water'],
    },
    {
      id: 6,
      title: 'Bangkok',
      description: 'Bangkok, officially known in Thai as Krung Thep Maha Nakhon and colloquially as Krung Thep, is the capital and most populous city of Thailand.',
      url: 'https://source.unsplash.com/random/6',
      price: 3200,
      tags: ['water', 'golf', 'cottage'],
    },
  ],
};

export const itemsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_ITEMS: {
      return {
        ...state,
        items: [...defaultState.items],
      };
    }
    case FILTER_ITEMS: {
      console.log(action);
      return {
        ...state,
        items: [...defaultState.items.filter((item) => item.tags.includes(action.keyFilter))],
      };
    }
    default:
      return state;
  }
};
