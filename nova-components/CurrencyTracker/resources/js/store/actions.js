let actions = {
    fetchPosts({commit}) {
        axios.get('/api/rates')
            .then(res => {
                commit('FETCH_RATES', res.data)
            }).catch(err => {
            console.log(err)
        })
    },
}

export default actions