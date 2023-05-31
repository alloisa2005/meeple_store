import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './styles';
import { changeLanguage } from '../../redux/actions/language.actions';

const FlagComponent = () => {
  const dispatch = useDispatch();

  const { spanish } = useSelector((state) => state.language);

  const changeFlag = () => {
    dispatch(changeLanguage());
  };

  return (
    <TouchableOpacity onPress={changeFlag} style={styles.flagContainer}>
      <Image
        source={
          !spanish
            ? require('../../../assets/imgs/spainFlag.png')
            : require('../../../assets/imgs/usaFlag.png')
        }
        style={styles.flagImage}
      />
    </TouchableOpacity>
  );
};

export default FlagComponent;
