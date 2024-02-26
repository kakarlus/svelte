export async function load({fetch}) {
  const response = await fetch('./sample.json');
  const data = await response.json();
  // console.warn(data);
	return {
		...data
	};
}