/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./website/templates/*.{html,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

tailwind.config = {
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
        indigo: "4B0082",
        'cc1': "#F8F9FA",
        'cc2': "#E9ECEF",
        'cc3': "#DEE2E6",
        'cc4': "#CED4DA",
        'cc5': "#ADB5BD",
        'cc6': "#6C757D",
        'cc7': "#495057",
        'cc8': "#343A40",
        'cc9': "#212529",
      }
    }
  }
}

