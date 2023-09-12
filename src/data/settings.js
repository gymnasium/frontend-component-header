export default async function gymSettings() {
  try {
    let response = await fetch('https://data.gym.soy/feeds/complete.json');
    let responseJson = await response.json();
    return responseJson.items.config;
   } catch(error) {
    console.error(error);
  }
}
