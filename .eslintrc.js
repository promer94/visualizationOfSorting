module.exports = {
  extends: ["standard", "prettier"],
  plugins: ["prettier","jest"],
  rules:{
      semi: ['error', 'never'],
      'prettier/prettier': ['error', { singleQuote: true, semi: false }]
  } 
}