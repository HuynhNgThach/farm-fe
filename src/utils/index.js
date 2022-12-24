//import { PhoneNumberUtil, PhoneNumberType } from "google-libphonenumber";

//export const validatePhone = (countryCode, phoneNum) => {
//  //phoneNum = countryCode + phonenumber
//  let valid = false;
//  const numerRegex = /^\d+$/;
//  if (!numerRegex.test(phoneNum)) {
//    console.log(numerRegex.test(phoneNum), phoneNum);
//    return false;
//  }
//  try {
//    console.log("validate", `${countryCode}${phoneNum}`);
//    const phoneUtil = PhoneNumberUtil.getInstance();
//    valid =
//      phoneUtil.isValidNumber(phoneUtil.parse(`${countryCode}${phoneNum}`)) &&
//      phoneUtil.getNumberType(phoneUtil.parse(`${countryCode}${phoneNum}`)) ===
//        PhoneNumberType.MOBILE;
//  } catch (e) {
//    valid = false;
//  }
//  return valid;
//};

//export const parsePhone = (phone) => {
//  console.log(phone);
//  try {
//    const phoneUtil = PhoneNumberUtil.getInstance();

//    const phoneNumber = phoneUtil.parseAndKeepRawInput(phone, "VN");
//    console.log(phoneNumber);
//    return {
//      countryCode: `+${phoneNumber.getCountryCode()}`,
//      phoneNumber: phoneNumber.getNationalNumber(),
//    };
//  } catch (error) {
//    console.log("parse phone error", error);
//    return {
//      countryCode: `+84`,
//      phoneNumber: "",
//    };
//  }
//};

//export function isInputNumber(evt) {
//  evt = evt || window.event;
//  var charCode = evt.which ? evt.which : evt.keyCode;
//  if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
//    evt.preventDefault();
//  } else {
//    return true;
//  }
//}

export function saveToStorage(key, payload) {
  try {
    const obj = {
      expire: "",
      payload: {
        data: payload,
      },
    };
    window.localStorage.setItem(key, JSON.stringify(obj));
  } catch (error) {
    console.error(error);
  }
}
export function getFromStorage(key) {
  try {
    const storage = window.localStorage.getItem(key);
    return !storage ? {} : JSON.parse(storage).payload.data;
  } catch (error) {
    console.error(error);
  }
}
