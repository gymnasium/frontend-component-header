export default async function gymSettings() {
  try {
    let response = await fetch(`${config.MARKETING_SITE_BASE_URL}/feeds/config.json`);
    let responseJson = await response.json();
    return responseJson;
   } catch(error) {
    console.error(error);
  }
}
