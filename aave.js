const Web3 = require('web3');
const { LENDING_POOL_ABI, LENDING_POOL_ADDRESS } = require('./config');

const web3 = new Web3('https://mainnet.infura.io/v3/b4d858995d3a138ff468551609198b5029393c3tcs');

const lendingPool = new web3.eth.Contract(LENDING_POOL_ABI, LENDING_POOL_ADDRESS);

// Ejemplo de función para obtener la reserva de un token en Aave
async function getReserveData(asset) {
  try {
    const reserveData = await lendingPool.methods.getReserveData(asset).call();
    return reserveData;
  } catch (error) {
    console.error('Error fetching reserve data:', error);
    return null;
  }
}

// Ejemplo de función para depositar en Aave
async function deposit(asset, amount, userAddress, onBehalfOf, referralCode) {
  try {
    const gasPrice = await web3.eth.getGasPrice();
    const transactionParameters = {
      to: LENDING_POOL_ADDRESS,
      gas: web3.utils.toHex(300000),
      gasPrice: web3.utils.toHex(gasPrice),
      data: lendingPool.methods
        .deposit(asset, amount, onBehalfOf, referralCode)
        .encodeABI(),
    };

    // Aquí se debe firmar y enviar la transacción usando la clave privada del usuario
    // ...
  } catch (error) {
    console.error('Error depositing in Aave:', error);
  }
}

module.exports = {
  getReserveData,
  deposit,
};
