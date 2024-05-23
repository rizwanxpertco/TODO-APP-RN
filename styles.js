import {StyleSheet} from 'react-native';
const colors = {primary: '#1f145c', white: '#fff'};
const styles = StyleSheet.create({
  safeAreaStyle: {flex: 1, backgroundColor: colors.white},
  addBtn1: {
    height: 25,
    width: 25,
  },
  headerStyle: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'grey'
  },
  titleStyle: {color: colors.primary, fontSize: 25, fontWeight: '900'},
  footerStyle: {
    position: 'absolute',
    bottom: 0,
    color: colors.white,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  FooterSubView: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    elevation: 40,
    flex: 1,
    width: '100%',
    height: 50,
    marginVertical: 20,
    marginRight: 20,
    borderRadius: 30,
    paddingHorizontal: 20,
  },
  addBtn: {
    height: 50,
    width: 50,
    // elevation: 40,
  },
  //   itemBoxStyle: {
  //     backgroundColor: colors.white,
  //     paddingHorizontal: 20,
  //     elevation: 40,
  //     flex: 1,
  //     width: '90%',
  //     height: 50,
  //     marginVertical: 20,
  //     // marginRight: 20,
  //     marginHorizontal: 20,
  //     borderRadius: 10,
  //     paddingHorizontal: 20,
  //     padding: 13,
  //   },
  listViewStyle: {
    padding: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 12,
    borderRadius: 10,
    marginVertical: 10,
  },
  delButtonStyle: {
    height: 23,
    width: 23,
    marginLeft: 10,
    // backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  doneButtonStyle: {
    height: 20,
    width: 20,
    // backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  donButtonStyle: {
    height: 20,
    width: 20,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },

  boxIconStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
