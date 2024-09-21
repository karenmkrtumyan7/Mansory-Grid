export function createModal(divId: string): void {
  const checkElement = document.getElementById(divId);
  if (!checkElement) {
    const element = document.createElement('div');
    element.setAttribute('id', divId);
    document.body.appendChild(element);
  }
}

export const removeDuplicateImages = (prevPhotos: { id: string }[], nextPhotos?: { id: string }[]): { id: string }[] => {
  if (!nextPhotos) {
    return [];
  }
  const filteredPhotos = nextPhotos.filter(
    (current) => !prevPhotos.some((checkPhoto) => checkPhoto.id === current.id),
  );
  return [...prevPhotos, ...filteredPhotos];
};

export const getUserLink = (image: { user: { username: string } }): string => `${process.env.REACT_APP_API_URL}/@${image.user.username}`;

export const textToQuery = (string: string): string => string.replace(/\W/g, '+');
