const BASE_URL = 'https://www.boredapi.com/api/activity';

const AppController = {
  async getSuggestion() {
    try {
      const response = await fetch(BASE_URL);
      if (!response.ok) {
        throw new Error('Failed to fetch suggestion');
      }
      const data = await response.json();
      return data.activity;
    } catch (error) {
      console.error('Error fetching suggestion:', error);
      throw new Error('Failed to fetch suggestion');
    }
  },
};

export default AppController;
