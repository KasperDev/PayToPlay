const Axios = require('axios');
const Data = require('./product');

// var products = async() => {
//   Axios.get('http://162.247.13.93:1337/products?_start=150')
//   .then((res) => {
//     console.log(res.data.map(item =>  '/users/' + item.url));
//   });// => res.data.map(item =>  '/users/' + item.url))
// }
// products();
module.exports = {
  products() {
    return Data.map((_id) => `/product/${_id.url}`);
  }
}
// res.data.map((_id) => {
// //   return`/product/${_id.url}`
// // })
// var products = async () => {
// var Count = await Axios.get('http://162.247.13.93:1337/Products/count');
// var GetCount = (Number(Count.data) / 100).toFixed(0);
// console.log("GetCount: ", GetCount);
// var Data;
// var next = 0;
// for (var i = 0; i < 1; i++) {
//  await Axios.get(`http://162.247.13.93:1337/products?_start=${next}`)
//    .then(function (res) {
//      // for (var i = 0; i < res.data.length; i++) {
//        // Data += "'http://localhost:3030/product/"+res.data[i].url+"'";
//        // Data += ",";
//        res.data.map((_id) => {
//          Data +=  `/product/${_id.url}`;
//        })
//      //}
//
//      next += 100;
//    })
//
// }
//
// console.log( [Data] );
// }
// products();
