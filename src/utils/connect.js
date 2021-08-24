'use strict'

const mongoose = require('mongoose')

module.exports = (dbUrl) => new Promise((done) => {
	console.log('[Database] Connecting...')
	mongoose.connect(dbUrl, {
		useFindAndModify: false,
		reconnectTries: Number.MAX_VALUE,
		useNewUrlParser: false,
		useCreateIndex: true,
		useUnifiedTopology: false,
		connectTimeoutMS: 10000,
	}, (error) => {
		if (error) {
			console.error('[ERROR] Connect error', { error })
			if (process.env.NODE_ENV === 'production') {
				process.exit(-1)
			}
			return
		}
		console.log('[Database] Connected') //
		done()
	})
})