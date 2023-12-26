import { getConfig } from '@edx/frontend-platform';

export default async function GymSettings() {
  try {
    // let response = await fetch(`${getConfig().MARKETING_SITE_BASE_URL}/feeds/config.json`);
    let response = await fetch(`https://gym.soy/feeds/config.json`);
    let responseJson = await response.json();
    return responseJson;
   } catch(error) {
    console.error(error);
  }
}
