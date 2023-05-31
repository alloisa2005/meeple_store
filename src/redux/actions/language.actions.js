import { languageTypes } from '../types/language.types';

export const changeLanguage = () => {
  return {
    type: languageTypes.CHANGE_LANGUAGE,
  };
};
