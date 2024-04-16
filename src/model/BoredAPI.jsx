const BoredAPI = {
    async getSuggestion() {
      const response = await fetch('https://www.boredapi.com/api/activity');
      if (!response.ok) {
        throw new Error('Failed to fetch suggestion.');
      }
      return response.json();
    }
  };
  
  export default BoredAPI;
  