module.exports = {
  theme: {
    extend: {
		colors:{
			'gray-primary':'#BCBCBC',
			'dark-primary':'#212120',
			'cream-primary':'#F4F3EF',
			'cream-secondary':'#EDEDEA',
			'brown-primary':'#66615b',
			'brown-secondary':'#403d39',
			'light-blue-primary':'#51cbce'
		},
		spacing:{
			'7':'1.7rem'
		}
	}
  },
  variants: {
		textColor:['responsive', 'hover', 'focus', 'focus-within','group-hover'],
		backgroundColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
		width: ['responsive', 'hover', 'focus','group-hover'],
	},
  plugins: []
}
