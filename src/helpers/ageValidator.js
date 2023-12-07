export function ageValidator(age) {
  if (!age) {
    return "Age can't be empty.";
  }

  const ageRegex = /^[0-9]+$/; 

  if (!age.match(ageRegex)) {
    return 'Age must contain only numbers.';
  }

  return '';
}
