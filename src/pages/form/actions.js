export function handleFormSubmit(e) {
  /**
   * This function is called on form submit (either by clicking the
   * submit button or by hitting enter). We use `e.preventDefault()`
   * in order to avoid the page from reloading. Note that our app is
   * a single-page one so this is not necessary.
   */
  e.preventDefault();

  this.props.form.validateFields((err, values) => {
    if (!err) {
      /**
       * Do something necessary here.
       */
      console.log(values);
    }
  })
}