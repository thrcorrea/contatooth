module.exports = {
	env: 'production',
	db: process.env.OPENSHIFT_MONGODB_DB_URL + 'contatooth',
	clientID: process.env.CLIENT_ID,
	clientSecret: process.env.CLIENT_SECRET,
	port: process.env.OPENSHIFT_NODEJS_PORT || 8080,
	address: process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1",
	domain: 'contatooth-thrcorrea.rhcloud.com'//process.env.OPENSHIFT_APP_DNS
};
