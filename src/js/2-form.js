const STORAGE_KEY = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
  const parsed = JSON.parse(savedData);

  formData.email = parsed.email || '';
  formData.message = parsed.message || '';

  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener('input', e => {
  const field = e.target.name;

  if (!field) return;

  formData[field] = e.target.value.trim();

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', e => {
  e.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();

  formData.email = '';
  formData.message = '';
});
