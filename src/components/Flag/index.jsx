import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './styles';
import { changeLanguage } from '../../redux/slices/languageSlice';

const FlagComponent = () => {
  const dispatch = useDispatch();

  const { language } = useSelector((state) => state.language);

  const changeFlag = () => {
    dispatch(changeLanguage(language === 'en' ? 'es' : 'en'));
  };

  return (
    <TouchableOpacity onPress={changeFlag} style={styles.flagContainer}>
      <Image
        source={
          language === 'en'
            ? require('../../../assets/imgs/spainFlag.png')
            : require('../../../assets/imgs/usaFlag.png')
        }
        style={styles.flagImage}
      />
    </TouchableOpacity>
  );
};

export default FlagComponent;
