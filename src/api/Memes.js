export const getAllMeme = async () => {
  const response = await fetch("https://api.imgflip.com/get_memes");
  const jsonResponse = await response.json();
  return jsonResponse.data.memes; 
};
