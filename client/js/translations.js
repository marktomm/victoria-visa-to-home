i18n.setDefaultLanguage('ee');

i18n.map('en', {
  nav:{
    home: 'Home',
    about_us: 'About Us',
    contact: 'Contact',
    signin: 'Sign In'
  },
  
  about_us_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut lectus massa. Suspendisse pulvinar ante eros, quis feugiat enim varius eget. Integer varius est vel ex molestie, et lacinia nulla mattis. Nulla eget leo vitae erat tristique viverra. Nunc blandit purus eu tortor gravida elementum. In dictum luctus mauris at commodo. Suspendisse potenti. Donec diam quam, sollicitudin vitae rutrum eu, suscipit in arcu. Phasellus sit amet feugiat orci. Aenean ultricies turpis vitae lacus pellentesque, eget accumsan ipsum mollis. Maecenas rutrum mattis ligula, non accumsan leo placerat sed. Nam nec metus nisi. Nulla non arcu a felis mollis fringilla ac eget sem. Proin varius odio tortor, quis faucibus nulla lobortis et. Donec arcu nunc, ullamcorper vitae tempus quis, iaculis et nibh. Etiam vel sapien semper, hendrerit nisi id, accumsan risus. Sed odio purus, sagittis ac purus eleifend, dictum blandit ipsum. Cras volutpat eu lorem sit amet rhoncus.',
  about_us_head: 'About Us',
  
  country_list_our_services: 'Our Services',
  
  form: {
    name: 'Name',
    phone: 'Phone',
    address: 'Address',
    street: 'Street',
    street2: 'Street2',
    city: 'City',
    state: 'State',
    zip: 'ZIP',
    contact: 'Contact',
    submit: 'Submit'
  },
  
  countrythumb: {
    consult: 'Consultation',
    doch: 'Help filling out Docs',
    inv: 'Help filling out Invoices',
    insurance: 'Insurance provision'
  }
});

i18n.map('ee', {
  //Refactor
  nav:{
    home: 'Pealeht',
    about_us: 'Firmast',
    contact: 'Kontakt',
    signin: 'Logi Sisse'
  },

  
  about_us_text: 'DS Systems OÜ on uue meedia ja infotehnoloogia vallas tegutsev ettevõtte Eestis, mille meeskonna tegevuse algus ulatub aastasse 1993, kui alustati iseseisvalt laevade liiniagenteerimise- ja transpordilogistikaalase infosüsteemi loomist ühes Eesti suuremas meretranspordiga tegelevas ettevõttes. Sellise spetsiifilise ja laia valdkonna nagu seda on logistika- ja (mere)transpordialase tarkvara arendamisega, ollakse järgnevalt juhtival kohal Baltiriikide seas. Samal aastal tehti algust ka riist- ja tarkvara hooldusega, erinevate IKT võrkude projekteerimise, väljaehitamise, nende seadistamisega ning järgnevate tugiteenuste osutamisega (hiljem ka laevadel).1995.aastast alustati Interneti kodulehekülgede valmistamisega ja sellega seonduvate lisateenuste osutamisega.2000-nda aasta algusest lisandus teenusena ka digitaalfotode ja QTVR panoraamide (360°) tegemine. Kõrgkvaliteediliste sfääriliste panoraamide, virtuaaltuuride ja mahukate tsilindriliste vaadete valmistamisel ollakse momendil turuliidrid nii Eestis kui lähipiirkonnas.',
  about_us_head: 'Meie Firmast',
  
  country_list_our_services: 'Meie Pakkume',
  
  form: {
    name: 'Nimi',
    phone: 'Telefoni number',
    address: 'Aadress',
    street: 'Tänav',
    street2: 'Tänav2',
    city: 'Linn',
    state: 'Vald',
    zip: 'Indeks',
    contact: 'Kontakt',
    submit: 'Saada'
  },
  
  countrythumb: {
    consult: 'Konsultatsioon',
    doch: 'Abi dokumentide vormistamisel',
    inv: 'Abi lisa dokumentidega',
    insurance: 'Kindlustus'
  }
});


// Custom sign in form translations
T9n.map('ee',{
  add: "Lisa",
  and: "ja",
  back: "Tagasi",
  changePassword: "Muuda parool",
  choosePassword: "Vali parool",
  clickAgree: "Klikkides 'Registreeri' noustute",
  configure: "Konfi",
  createAccount: "Loo kasutaja konto",
  currentPassword: "Parool",
  dontHaveAnAccount: "Kas Teil on kasutaja?",
  email: "E-post",
  emailAddress: "E-posti aadress",
  emailResetLink: "E-posti reset link",
  forgotPassword: "Unustasid parooli?",
  ifYouAlreadyHaveAnAccount: "Juhul kui teil on juba kasutaja konto",
  newPassword: "Uus parool",
  newPasswordAgain: "Uus parool (uuesti)",
  optional: "Valikuline",
  OR: "Või",
  password: "Parool",
  passwordAgain: "Parool (uuesti)",
  privacyPolicy: "Privacy Policy",
  remove: "eemalda",
  resetYourPassword: "Muuda parooli",
  setPassword: "Säti parool",
  sign: "Logi",
  signIn: "Logi Sisse",
  signin: "logi sisse",
  signOut: "Logi Välja",
  signUp: "Registreeri",
  signupCode: "Registreerimise kood",
  signUpWithYourEmailAddress: "Registreeri e-postiga",
  terms: "Kasutamisõigused",
  updateYourPassword: "Uuenda parool",
  username: "Kasutajanimi",
  usernameOrEmail: "Kasutajanimi või e-post",
  "with": "koos",
  info: {
    emailSent: "E-kiri saadetud",
    emailVerified: "E-post verifitseeritud",
    passwordChanged: "Parool muudetud",
    passwordReset: "Parool reset"
  },
  error: {
    emailRequired: "E-posti aadress on vajalik.",
    minChar: "Parool peab olema vähemalt 7 tähemärki.",
    pwdsDontMatch: "Paroolid ei klapi",
    pwOneDigit: "Parool peab sisaldama vähemalt ühte numbrit.",
    pwOneLetter: "Parool peab sisaldama vähemalt ühte tähemärki.",
    signInRequired: "Te peate olema sisse logitud.",
    signupCodeIncorrect: "Registration code is incorrect.",
    signupCodeRequired: "Registration code is required.",
    usernameIsEmail: "Username cannot be an email address.",
    usernameRequired: "Username is required.",
    accounts: {
      "Email already exists.": "Email already exists.",
      "Email doesn't match the criteria.": "Email doesn't match the criteria.",
      "Invalid login token": "Invalid login token",
      "Login forbidden": "Login forbidden",
      "Service unknown": "Service unknown",
      "Unrecognized options for login request": "Unrecognized options for login request",
      "User validation failed": "User validation failed",
      "Username already exists.": "Username already exists.",
      "You are not logged in.": "You are not logged in.",
      "You've been logged out by the server. Please log in again.": "You've been logged out by the server. Please log in again.",
      "Your session has expired. Please log in again.": "Your session has expired. Please log in again.",
      "No matching login attempt found": "No matching login attempt found",
      "Password is old. Please reset your password.": "Password is old. Please reset your password.",
      "Incorrect password": "Incorrect password",
      "Invalid email": "Invalid email",
      "Must be logged in": "Must be logged in",
      "Need to set a username or email": "Need to set a username or email",
      "old password format": "old password format",
      "Password may not be empty": "Password may not be empty",
      "Signups forbidden": "Signups forbidden",
      "Token expired": "Token expired",
      "Token has invalid email address": "Token has invalid email address",
      "User has no password set": "User has no password set",
      "User not found": "User not found",
      "Verify email link expired": "Verify email link expired",
      "Verify email link is for unknown address": "Verify email link is for unknown address",
      "Match failed": "Match failed",
      "Unknown error": "Unknown error"
    }
  }
});

i18n.map('en', {
  fullName: 'Full Name'
});

i18n.map('ee', {
  fullName: 'Tais nimi'
});