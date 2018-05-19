import 'datejs'

export default {
  // API endpoints
  endpoints: {
    address: '/api.php?q=getAddress',
    base58: '/api.php?q=base58',
    balance: '/api.php?q=getBalance',
    pendingBalance: '/api.php?q=getPendingBalance',
    transactions: '/api.php?q=getTransactions',
    transaction: '/api.php?q=getTransaction',
    publicKey: '/api.php?q=getPublicKey',
    generateAccount: '/api.php?q=generateAccount',
    currentBlock: '/api.php?q=currentBlock',
    block: '/api.php?q=getBlock',
    blockTransactions: '/api.php?q=getBlockTransactions',
    version: '/api.php?q=version',
    mempoolSize: '/api.php?q=mempoolSize'
  },

  // General methods
  getPeer () {
    return process.env.VUE_APP_NODE_URL
  },
  getRequest (endpoint) {
    return fetch(this.getPeer() + endpoint)
      .then(response => { return response.json() })
      .catch(error => console.error('Request failed', error))
  },

  // API methods
  getAddress (publicKey) {
    return this.getRequest(this.endpoints.address + `&public_key=${publicKey}`)
  },
  getBase58 (data) {
    return this.getRequest(this.endpoints.base58 + `&data=${data}`)
  },
  getBalance (account) {
    return this.getRequest(this.endpoints.balance + `&account=${account}`)
  },
  getPendingBalance (account) {
    return this.getRequest(this.endpoints.pendingBalance + `&account=${account}`)
  },
  getTransactions (account) {
    return this.getRequest(this.endpoints.transactions + `&account=${account}`)
  },
  getTransaction (transaction) {
    return this.getRequest(this.endpoints.transaction + `&transaction=${transaction}`)
  },
  getPublicKey (account) {
    return this.getRequest(this.endpoints.publicKey + `&account=${account}`)
  },
  generateAccount () {
    return this.getRequest(this.endpoints.generateAccount)
  },
  currentBlock () {
    return this.getRequest(this.endpoints.currentBlock)
  },
  getBlock (height) {
    return this.getRequest(this.endpoints.block + `&height=${height}`)
  },
  getBlockTransactions (height) {
    return this.getRequest(this.endpoints.blockTransactions + `&height=${height}`)
  },
  version () {
    return this.getRequest(this.endpoints.version)
  },
  mempoolSize () {
    return this.getRequest(this.endpoints.mempoolSize)
  },

  // Helper methods
  getFormattedTransactionDate (date) {
    let d = new Date(0)
    d.setUTCSeconds(date)
    return d.toString('dS MMM yyyy HH:mm:s')
  },
  getAddressLink (address) {
    return `//arionum.info/account/${address}`
  },
  getBlockLink (block) {
    return `//arionum.info/block/${block}`
  }
}
