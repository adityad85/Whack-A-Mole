import { molesConstants } from '../Constants/moles';

export const generateMolesAt = () => {
  const molesIndexes = [];
  const moleNumber = Math.round(Math.random() * 2 + 1);
  for (let i = 0; i < moleNumber; i += 1) {
    molesIndexes[i] = Math.floor(Math.random() * molesConstants.NO_OF_MOLES + 1);
  }
  return molesIndexes;
};
