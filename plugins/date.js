export default (context, inject) => {
  function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(date).toLocaleDateString('en', options)
  }
  inject('formatDate', formatDate)
}
