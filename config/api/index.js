const Index = (vm) => {
	return {
		getIndex:(params = {}) => {
		  return vm.$u.post('/page/index', params)
		}
	}
}

export default Index