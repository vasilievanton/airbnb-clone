import { FILTER_ITEMS, LOAD_ITEMS } from './types';

function genUrl() {
  this.url = `https://source.unsplash.com/random/${Math.floor(Math.random() * 1000)}`;
}

const defaultState = {
  items: [
    {
      id: 1,
      title: 'Tokyo',
      description: 'Tokyo formerly Edo, historically Tokio, and officially the Tokyo Metropolis is the capital and largest city of Japan.',
      urls: [new genUrl(), new genUrl(), new genUrl(), new genUrl(), new genUrl(), new genUrl(), new genUrl(), new genUrl(), new genUrl(), new genUrl()],
      price: 2000,
      tags: ['forest', 'water', 'cottage'],
    },
    {
      id: 2,
      title: 'Jakarta',
      description: 'Jakarta, officially the Special Capital Region of Jakarta ',
      urls: [new genUrl(), new genUrl(), new genUrl(), new genUrl(), new genUrl(), new genUrl(), new genUrl(), new genUrl(), new genUrl(), new genUrl()],
      price: 2400,
      tags: ['beach', 'forest', 'cottage'],
    },
    {
      id: 3,
      title: 'Delhi',
      description: 'Delhi officially the National Capital Territory (NCT) of Delhi, is a city and a union territory of India containing New Delhi, the capital of India.',
      urls: [new genUrl(), new genUrl(), new genUrl(), new genUrl(), new genUrl(), new genUrl(), new genUrl(), new genUrl(), new genUrl(), new genUrl()],
      price: 1900,
      tags: ['beach', 'golf', 'cottage'],
    },
    {
      id: 4,
      title: 'Manila',
      description: 'Manila officially the City of Manila is the capital of the Philippines, and its second-most populous city.',
      urls: [new genUrl(), new genUrl(), new genUrl(), new genUrl(), new genUrl(), new genUrl(), new genUrl(), new genUrl(), new genUrl(), new genUrl()],
      price: 3590,
      tags: ['forest', 'golf', 'cottage'],
    },
    {
      id: 5,
      title: 'New York',
      description: 'New York City was the capital of the United States from 1785 until 1790, and has been the largest U.S. city since 1790. ',
      urls: [new genUrl(), new genUrl(), new genUrl(), new genUrl(), new genUrl(), new genUrl(), new genUrl(), new genUrl(), new genUrl(), new genUrl()],
      price: 1600,
      tags: ['beach', 'water'],
    },
    {
      id: 6,
      title: 'Bangkok',
      description: 'Bangkok, officially known in Thai as Krung Thep Maha Nakhon and colloquially as Krung Thep, is the capital and most populous city of Thailand.',
      urls: [new genUrl(), new genUrl(), new genUrl(), new genUrl(), new genUrl(), new genUrl(), new genUrl(), new genUrl(), new genUrl(), new genUrl()],
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
