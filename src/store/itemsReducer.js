import { FILTER_ITEMS, LOAD_ITEMS } from './types';

const defaultState = {
  items: [
    {
      id: 1,
      title: 'Tokyo',
      description: 'Tokyo formerly Edo, historically Tokio, and officially the Tokyo Metropolis is the capital and largest city of Japan.',
      url: 'https://images.unsplash.com/photo-1658370455042-234e0bdb9ad3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      price: 2000,
      tags: ['forest', 'water', 'cottage'],
    },
    {
      id: 2,
      title: 'Jakarta',
      description: 'Jakarta, officially the Special Capital Region of Jakarta ',
      url: 'https://images.unsplash.com/photo-1658354936765-eb58064c891b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      price: 2400,
      tags: ['beach', 'forest', 'cottage'],
    },
    {
      id: 3,
      title: 'Delhi',
      description: 'Delhi officially the National Capital Territory (NCT) of Delhi, is a city and a union territory of India containing New Delhi, the capital of India.',
      url: 'https://images.unsplash.com/photo-1658397966058-d1d252892754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      price: 1900,
      tags: ['beach', 'golf', 'cottage'],
    },
    {
      id: 4,
      title: 'Manila',
      description: 'Manila officially the City of Manila is the capital of the Philippines, and its second-most populous city.',
      url: 'https://images.unsplash.com/photo-1658387946801-23283c3ac442?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      price: 3590,
      tags: ['forest', 'golf', 'cottage'],
    },
    {
      id: 5,
      title: 'New York',
      description: 'New York City was the capital of the United States from 1785 until 1790, and has been the largest U.S. city since 1790. ',
      url: 'https://images.unsplash.com/photo-1658388050869-8bb6c9a8a2f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      price: 1600,
      tags: ['beach', 'water'],
    },
    {
      id: 6,
      title: 'Bangkok',
      description: 'Bangkok, officially known in Thai as Krung Thep Maha Nakhon and colloquially as Krung Thep, is the capital and most populous city of Thailand.',
      url: 'https://images.unsplash.com/photo-1658242106760-7a5c8f177180?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
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
