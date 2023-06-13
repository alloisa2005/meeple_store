import { MaterialIcons, AntDesign, Entypo } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, Modal, TextInput } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';
import { CartItem } from '../../components';
import { COLORS } from '../../constants/colors';

const CartScreen = () => {
  const { cart, cartTotal, cartQuantity } = useSelector((state) => state.cart);
  const { spanish } = useSelector((state) => state.language);
  const { user } = useSelector((state) => state.auth);

  const [showModal, setShowModal] = useState(false);

  const onHandlerShowModal = () => {
    setShowModal(true);
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={{ marginVertical: 10 }}
        showsVerticalScrollIndicator={false}
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CartItem item={item} />}
      />

      {/* Resumen Carrito */}
      {cartQuantity === 0 ? null : (
        <View style={styles.cartResumen}>
          <View>
            <Text style={styles.totalAmount}>
              {spanish ? 'Monto Total' : 'Total Amount'}: $ {cartTotal}
            </Text>
            <Text style={styles.products}>
              {spanish ? 'Productos' : 'Products'}: {cartQuantity}
            </Text>
          </View>
          <TouchableOpacity style={styles.btnCheckout} onPress={onHandlerShowModal}>
            <MaterialIcons name="attach-money" size={22} color="white" />
            <Text style={styles.btnCheckoutText}>{spanish ? 'Comprar' : 'Checkout'}</Text>
          </TouchableOpacity>
        </View>
      )}
      <Modal animationType="slide" visible={showModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalDataContainer}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 15,
              }}>
              <Text style={styles.modalTitle}>
                {spanish ? '¿Confirmar Compra?' : 'Confirm Purchase?'}
              </Text>
              <TouchableOpacity onPress={() => setShowModal(!showModal)}>
                <AntDesign name="closecircle" size={26} color={COLORS.cardinal} />
              </TouchableOpacity>
            </View>

            <Text style={styles.titles}>{spanish ? 'Nombre' : 'Name'}</Text>
            <Text style={styles.descriptions}>{user.name}</Text>

            <Text style={styles.titles}>Email</Text>
            <Text style={styles.descriptions}>{user.email}</Text>

            <Text style={styles.titles}>{spanish ? 'Dirección' : 'Address'}</Text>
            <TextInput style={styles.descriptionInput} value={user.address} />

            <View>
              <Text style={styles.titleDetails}>{spanish ? 'Detalle de Compra' : 'Detail'}</Text>
              <Text style={styles.detailTitle}>
                {spanish ? 'Total de Productos:' : 'Quantity:'}{' '}
                <Text style={{ color: COLORS.cardinal, fontSize: 18 }}>{cartQuantity}</Text>
              </Text>
              <Text style={styles.detailTitle}>
                {spanish ? 'Monto Total ($):' : 'Total Amount ($):'}
                <Text style={{ color: COLORS.cardinal, fontSize: 18 }}> {cartTotal}</Text>
              </Text>
            </View>

            <TouchableOpacity style={styles.addToCartBtn}>
              <Text style={styles.btnText}>{spanish ? 'Confirmar' : 'Confirm'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CartScreen;
