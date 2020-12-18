var buffer = require("buffer");
var config = require("./dbconfig");
const sql = require("mssql");

async function getOrders() {
  try {
    let pool = await sql.connect(config);
    let products = await pool
      .request()
      .query(" exec [sp_productos_listado2] '', '', 1, 'NULL', 1, 1");
    return products.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function getOrder(orderId) {
  try {
    let pool = await sql.connect(config);
    let product = await pool
      .request()
      .input("input_parameter", sql.Int, orderId)
      .query("SELECT * from Orders where Id = @input_parameter");
    return product.recordsets;
  } catch (error) {
    console.log(error);
  }
}
async function getImagen(id) {
  try {
    let pool = await sql.connect(config);
    let product = await pool
      .request()
      .input("input_parameter", sql.Int, id)
      .query("SELECT Imagen1 from Productos where Cod_Prod = @input_parameter");

    return product.recordsets[0];
  } catch (error) {
    console.log(error);
  }
}
async function addOrder(order) {
  try {
    let pool = await sql.connect(config);
    let insertProduct = await pool
      .request()
      .input("Id", sql.Int, order.Id)
      .input("Title", sql.NVarChar, order.Title)
      .input("Quantity", sql.Int, order.Quantity)
      .input("Message", sql.NVarChar, order.Message)
      .input("City", sql.NVarChar, order.City)
      .execute("InsertOrders");
    return insertProduct.recordsets;
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  getOrders: getOrders,
  getOrder: getOrder,
  addOrder: addOrder,
  getImagen: getImagen,
};
