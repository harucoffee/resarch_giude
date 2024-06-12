const env = process.env.NODE_ENV

const moduleExports = {
    async redirects() {
        if (env !== 'development'){
            return[
                {
                    source: '/contact',
                    destination: '/404',
                    permanent: false,
                },
            ]
        }
        return []
    },
}

module.exports = moduleExports;