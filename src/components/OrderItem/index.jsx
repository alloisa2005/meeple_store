import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles';
import { COLORS } from '../../constants/colors';
import { selectOrder } from '../../redux/actions/orders.actions';
import { recortarTexto } from '../../utils/recortarTexto';
import { separadorDeMiles } from '../../utils/separadorMiles';
import { transformoFecha } from '../../utils/transformoFecha';

const OrderItem = ({ order }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { spanish } = useSelector((state) => state.language);

  const [showModal, setShowModal] = useState(false);

  const onHandlerShowModal = () => {
    dispatch(selectOrder(order));
    setShowModal(true);
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <View>
          <Text style={styles.titleDetail}>
            {spanish ? 'Fecha: ' : 'Date: '}{' '}
            <Text style={styles.titleContent}>{transformoFecha(order.date)}</Text>
          </Text>
          <Text style={styles.titleDetail}>
            {spanish ? 'Cantidad de Productos: ' : 'Products quantity: '}{' '}
            <Text style={styles.titleContent}>{order.quantity}</Text>
          </Text>
          <Text style={styles.titleDetail}>
            {spanish ? 'Monto Total ($): ' : 'Total Amount ($): '}
            <Text style={styles.titleContent}>{separadorDeMiles(order.total)}</Text>
          </Text>
        </View>

        <TouchableOpacity style={styles.iconContainer} onPress={onHandlerShowModal}>
          <AntDesign name="infocirlceo" size={28} color={COLORS.cardinal} />
        </TouchableOpacity>
      </View>

      <Modal animationType="slide" visible={showModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalDataContainer}>
            <Text style={styles.titleDetails}>{spanish ? 'Detalle de Compra' : 'Detail'}</Text>

            <View>
              <Text style={styles.detailTitle}>
                {spanish ? 'Fecha de Compra:' : 'Date:'}{' '}
                <Text style={{ color: COLORS.cardinal, fontSize: 18 }}>
                  {transformoFecha(order.date)}
                </Text>
              </Text>
              <Text style={styles.detailTitle}>
                {spanish ? 'Total de Productos:' : 'Quantity:'}{' '}
                <Text style={{ color: COLORS.cardinal, fontSize: 18 }}>{order.quantity}</Text>
              </Text>
              <Text style={styles.detailTitle}>
                {spanish ? 'Monto Total ($):' : 'Total Amount ($):'}
                <Text style={{ color: COLORS.cardinal, fontSize: 18 }}>
                  {' '}
                  {separadorDeMiles(order.total)}
                </Text>
              </Text>
            </View>

            <View style={styles.detailContainer}>
              <Text style={styles.detailContainerTitle}>Productos</Text>

              <View>
                <FlatList
                  data={order.products}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <View style={styles.productContainer}>
                      <View style={styles.productImageContainer}>
                        <Image source={{ uri: item.imgUrl }} style={styles.productImage} />
                        <Text style={styles.productTitle}>
                          {recortarTexto(item.name, 14)} (x{item.quantity})
                        </Text>
                      </View>
                      <Text style={styles.productSubTotal}>
                        $ {separadorDeMiles(item.quantity * item.price)}
                      </Text>
                    </View>
                  )}
                />
              </View>
            </View>

            <TouchableOpacity style={styles.addToCartBtn} onPress={() => setShowModal(!showModal)}>
              <Text style={styles.btnText}>{spanish ? 'Cerrar' : 'Close'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default OrderItem;
