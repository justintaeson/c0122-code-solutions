function graduate(credential) {
  return fullName => `${fullName}, ${credential}`;
}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

const medicalSchoolMe = medicalSchool('Justin Son');
const lawSchoolMe = lawSchool('Justin Son');

console.log('medicalSchool:', medicalSchoolMe);
console.log('lawSchool:', lawSchoolMe);
