const renderErrorsHandler = (alert, elements, i18n) => {
  const errorMessage = alert !== undefined
    ? alert.key
    : alert
  if (errorMessage) {
    elements.input.classList.add('is-invalid');
    elements.feedback.classList.add('text-danger');
    elements.feedback.textContent = i18n.t(errorMessage);
  } else {
    elements.input.classList.remove('is-invalid');
    elements.feedback.textContent = i18n.t('successUrl');
    elements.feedback.classList.remove('text-danger');
    elements.feedback.classList.add('text-success');
    elements.form.reset();
    elements.form.focus();
  }
};

const successRender = (elements, state) => {
  
} 

const handleProcessState = (elements, process) => {
  switch (process) {
    case 'sending':
      elements.form.reset();
      elements.form.focus();
      break;

    case 'success':



    default:
      throw new Error(`Unknown process ${process}`);
  }
};

const initView = (elements, i18n) => (path, value) => {
  switch (path) {
    case 'form.processState':
      handleProcessState(elements, value);
      break;

    case 'form.error':
      renderErrorsHandler(value, elements, i18n);
      break;

    default:
      break;
  }
}

export default initView;
