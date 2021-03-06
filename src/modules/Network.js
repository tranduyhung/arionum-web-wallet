const STATUS_OK = 'ok'

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

  // General methods
  getPeer () {
    return process.env.VUE_APP_NODE_URL
  },
  getRequest (endpoint) {
    return window.fetch(this.getPeer() + endpoint)
      .then(this.json)
      .catch(error => window.console.error(error))
  },
  json (response) {
    return response.json()
      .then(data => {
        if (data.status === STATUS_OK) {
          return Promise.resolve(data)
        } else {
          return Promise.reject(new Error(data.data))
        }
      })
  }
}
