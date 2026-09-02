const FAVORITES_KEY = "adfiction_favorites";

/* Get all favorite video IDs */
export const getFavorites = () => {
  try {
    return JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
  } catch {
    return [];
  }
};

/* Check if a video is favorite */
export const isFavorite = (videoId) => {
  return getFavorites().includes(videoId);
};

/* Add video to favorites */
export const addFavorite = (videoId) => {
  const favorites = getFavorites();

  if (!favorites.includes(videoId)) {
    favorites.push(videoId);
    localStorage.setItem(
      FAVORITES_KEY,
      JSON.stringify(favorites)
    );
  }
};

/* Remove video from favorites */
export const removeFavorite = (videoId) => {
  const favorites = getFavorites().filter(
    (id) => id !== videoId
  );

  localStorage.setItem(
    FAVORITES_KEY,
    JSON.stringify(favorites)
  );
};

/* Toggle favorite */
export const toggleFavorite = (videoId) => {
  if (isFavorite(videoId)) {
    removeFavorite(videoId);
    return false;
  }

  addFavorite(videoId);
  return true;
};