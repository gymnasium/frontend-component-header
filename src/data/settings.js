export default async function gymSettings() {
  try {
    let response = await fetch('https://gym.soy/feeds/config.json');
    let responseJson = await response.json();
    return responseJson;
   } catch(error) {
    console.error(error);
  }
}
