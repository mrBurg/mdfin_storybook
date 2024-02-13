import React, { useState, useEffect } from 'react'; // useState, // useRef, // useMemo, // useCallback, // FocusEvent, // ChangeEvent,
// import _ from 'lodash';
import classNames from 'classnames';

// import htmlParser from 'html-react-parser';
// import InputMask from 'react-input-mask';

// import { SimpleInput } from 'mdfin-simple-input';
import { InputWidget } from 'mdfin-input-widget';
import { CheckboxWidget } from 'mdfin-checkbox-widget';
import { ButtonWidget } from 'mdfin-button-widget';

// import defaultStaticData from './../../assets/defaultStaticData.json';

import { TAuthorizationProps } from '../@types';
import scss from './../scss/Authorization.scss';

/* enum FIELD_NAME {
  PHONE_NUMBER = 'phoneNumber',
  MARKETING = 'marketing',
} */

function Authorization(props: TAuthorizationProps) {
  const { className, checkboxLabel, buttonLabel, inputPlaceholder } = props;

  const [styleClass, setStyleClass] = useState(null as unknown as string);

  useEffect(() => {
    setStyleClass(classNames(scss.authorization, className));
  }, [className]);

  return (
    <form className={styleClass}>
      <InputWidget placeholder={inputPlaceholder} />
      <CheckboxWidget className={scss.checkbox} label={checkboxLabel} />
      <ButtonWidget className={scss.submit}>{buttonLabel}</ButtonWidget>
    </form>
  );
  // const staticData = useMemo(
  //   () => ({ /* ...defaultStaticData, */ ...props.staticData }),
  //   [props.staticData]
  // );
  // const initialState = useRef(() => ({
  //   phoneNumber: {
  //     id: FIELD_NAME.PHONE_NUMBER, //staticData.phoneNumber.id,
  //     //mask: '+40799999999', //staticData.phoneNumber.phoneMask,
  //     value: '',
  //   },
  //   checkBox: {
  //     id: FIELD_NAME.MARKETING, //staticData.checkbox.id,
  //     value: false,
  //   },
  //   isRenderMarketingPopup: false,
  // }));
  // const [formState, setFormState] = useState(initialState.current);
  // const [invalidFields, setInvalidFields] = useState<Array<string | boolean>>(
  //   []
  // );
  // const setCurrentValue = (currentValue: string | boolean, id: string) => {
  //   if (id == FIELD_NAME.PHONE_NUMBER && typeof currentValue === 'string') {
  //     setFormState({
  //       ...formState,
  //       [id]: { value: currentValue.replace(/[\s-_]/g, ''), id: id },
  //     });
  //   } else {
  //     setFormState({ ...formState, [id]: { value: currentValue, id: id } });
  //   }
  // };
  // console.log('formState:', formState.phoneNumber.value);
  // const [formDisabled, setFormDisabled] = useState(false);
  // const validateForm = useCallback(() => {
  //   let invalidFieldsInner: (string | boolean)[] = invalidFields;
  //   _.forEach(formState, (item: any) => {
  //     invalidFieldsInner = validateItem(
  //       item.value,
  //       item.id,
  //       invalidFieldsInner
  //     ) as (string | boolean)[];
  //   });
  //   setInvalidFields(invalidFieldsInner);
  //   if (invalidFieldsInner.length == 0) {
  //     return true;
  //   }
  //   return false;
  // }, []);
  // const validateItem = useCallback(
  //   (
  //     currentValue: string | boolean,
  //     id: string,
  //     invalidFieldsInner?: (string | boolean)[]
  //   ) => {
  //     /*Check if field contain in invalidFields */
  //     const containedField = () => {
  //       if (id != invalidFields.filter((item) => item == id)[0]) {
  //         if (invalidFieldsInner) {
  //           return (invalidFieldsInner = [...invalidFieldsInner, id]);
  //         }
  //         return setInvalidFields([...invalidFields, id]);
  //       }
  //     };
  //     //Validate checkBox
  //     if (id == FIELD_NAME.MARKETING && !formState.checkBox.value) {
  //       containedField();
  //       if (invalidFieldsInner) {
  //         return invalidFieldsInner;
  //       }
  //       return;
  //     }
  //     //Validate phoneNumber
  //     if (id == FIELD_NAME.PHONE_NUMBER && typeof currentValue === 'string') {
  //       const phoneRegExp = /(?=\+407[1-9]\d{7})(?=\+407(?!(\d)\1{7}))/g;
  //       if (!phoneRegExp.test(currentValue)) {
  //         containedField();
  //         if (invalidFieldsInner) {
  //           return invalidFieldsInner;
  //         }
  //         return;
  //       }
  //     }
  //     const removedInvalidFields = invalidFields.filter((item) => item != id);
  //     if (invalidFieldsInner) {
  //       return (invalidFieldsInner = removedInvalidFields);
  //     }
  //     setInvalidFields(removedInvalidFields);
  //   },
  //   [formState.checkBox.value, invalidFields]
  // );
  /* const onSubmitHandler = useCallback(() => {
    if (!!validateForm()) {
      // submitForm();
    }
  }, []); */
  // return (
  //   <form
  //     className={scss.authorization}
  //     onSubmit={(event) => onSubmitHandler()}
  //   >
  //     {/* <div className={scss.fieldsContainer}> */}
  //     <InputMask
  //       id={FIELD_NAME.PHONE_NUMBER}
  //       mask={staticData.phoneNumber.phoneMask}
  //       value={formState.phoneNumber.value}
  //       placeholder={staticData.phoneNumber.placeholder}
  //       onBlur={(event: FocusEvent<HTMLInputElement>) =>
  //         validateItem(event.target.value, FIELD_NAME.PHONE_NUMBER)
  //       }
  //       onChange={(event: ChangeEvent<HTMLInputElement>) =>
  //         setCurrentValue(event.target.value, FIELD_NAME.PHONE_NUMBER)
  //       }
  //       className={classNames(
  //         scss.input,
  //         /* inputClassName, */ {
  //           [scss.error]: invalidFields.includes(FIELD_NAME.PHONE_NUMBER),
  //         }
  //       )}
  //     />
  //     {/* <InputMask
  //       mask={formState.phoneNumber.mask}
  //       // placeholder={staticData.phoneNumber.placeholder}
  //       value={formState.phoneNumber.value}
  //       onBlur={(event: FocusEvent<HTMLInputElement>) =>
  //         validateItem(event.target.value, FIELD_NAME.PHONE_NUMBER)
  //       }
  //     >
  //       {
  //         (() => (
  //           <SimpleInput
  //             id={FIELD_NAME.PHONE_NUMBER}
  //             placeholder={staticData.phoneNumber.placeholder}
  //             // value={formState.phoneNumber.value}
  //             error={invalidFields.includes(FIELD_NAME.PHONE_NUMBER)}
  //             callBack={(event: ChangeEvent<HTMLInputElement>) =>
  //               setCurrentValue(event.target.value, FIELD_NAME.PHONE_NUMBER)
  //             }
  //             className={scss.input}
  //             // onBlur={(event: FocusEvent<HTMLInputElement>) =>
  //             //   validateItem(event.target.value, FIELD_NAME.PHONE_NUMBER)
  //             // }
  //           />
  //         )) as any
  //       }
  //     </InputMask> */}
  //     {/* </div> */}
  //   </form>
  // );
}

export { Authorization };
