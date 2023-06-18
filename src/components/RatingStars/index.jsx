import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const RatingComponent = ({ rating, starSize = 15, starColor = '#D5AB55' }) => {
  const numEstrellasLlenas = Math.floor(rating);
  const mostrarMediaEstrella = rating % 1 !== 0;

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < numEstrellasLlenas; i++) {
      stars.push(<Icon key={i} name="star" size={starSize} color={starColor} />);
    }
    if (mostrarMediaEstrella) {
      stars.push(
        <Icon key={numEstrellasLlenas} name="star-half" size={starSize} color={starColor} />
      );
    }
    return stars;
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 2 }}>
      {renderStars()}
    </View>
  );
};

export default RatingComponent;
